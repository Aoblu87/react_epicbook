import React, { useState } from "react";
import { Button, Col, ListGroup, Row } from "react-bootstrap";
import { PencilFill, Trash3Fill } from "react-bootstrap-icons";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Bearer } from "../Bearer";
import EditComment from "./EditComment";

export default function CommentList({ id, comments, setComments }) {
  const [loading, setLoading] = useState(true);
  const [editingComment, setEditingComment] = useState(null);

  // FETCH GET
  const getComments = () => {
    try {
      fetch(`https://striveschool-api.herokuapp.com/api/books/${id}/comments/`)
        .then((r) => r.json())
        .then(setComments)
        .finally(() => {
          setLoading(false);
        });
    } catch (error) {
      console.log(error);
    }
  };
  // FETCH DELETE
  const handleDelete = (id) => {
    try {
      fetch("https://striveschool-api.herokuapp.com/api/comments/" + id, {
        method: "DELETE",
        headers: {
          Authorization: Bearer,
        },
      })
        .then((r) => {
          if (r.ok) {
            toast.success("Deleted successfully!", {
              position: toast.POSITION.BOTTOM_RIGHT,
            });
          } else {
            toast.error("Something went wrong!", {
              position: toast.POSITION.BOTTOM_RIGHT,
            });
          }
        })
        .then(getComments);
    } catch (error) {
      console.log(error);
    }
  };

  const handleEditComment = (comment) => {
    setEditingComment(comment);
  };

  // SALVO I DATI MODIFICATI
  const handleSaveEdit = () => {
    try {
      fetch(
        `https://striveschool-api.herokuapp.com/api/comments/${editingComment._id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: Bearer,
          },
          body: JSON.stringify({
            comment: editingComment.comment,
            // Include other fields that you want to update
          }),
        }
      )
        .then((r) => {
          if (r.ok) {
            toast.success("Comment updated successfully!", {
              position: toast.POSITION.BOTTOM_RIGHT,
            });
          } else {
            toast.error("Something went wrong!", {
              position: toast.POSITION.TOP_LEFT,
            });
          }
        })
        .then(() => {
          setEditingComment(null);
          getComments();
        });
    } catch (error) {
      console.log(error);
    }
  };

  // ANNULLO LA MODIFICA CON IL BOTTONE CANCEL
  const handleCancelEdit = () => {
    setEditingComment(null);
  };

  return comments.map((comment) => (
    <ListGroup.Item as="li" key={comment._id}>
      {editingComment && editingComment._id === comment._id ? (
        <EditComment />
      ) : (
        <>
          <Row className="justify-content-between">
            <Col md={8}>
              <h3>Recensione</h3>
              <p>{comment.comment}</p>
            </Col>
            <Col md={1} className="d-flex align-items-center p-2">
              <Button
                variant="warning"
                className="me-2"
                onClick={() => handleEditComment(comment)}
              >
                <PencilFill />
              </Button>
              <Button
                variant="danger"
                className="me-1"
                onClick={() => handleDelete(comment._id)}
              >
                <Trash3Fill />
              </Button>
            </Col>
            <ToastContainer />
          </Row>
          <div>
            <h4>Valutazione</h4>
            <p>{comment.rate}</p>
          </div>
        </>
      )}
    </ListGroup.Item>
  ));
}
