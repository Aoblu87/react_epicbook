import React, { useState } from "react";
import { Button, Col, ListGroup, Row } from "react-bootstrap";
import { PencilFill, Trash3Fill } from "react-bootstrap-icons";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Bearer } from "../Bearer";

export default function CommentList({ id, comments, setComments }) {
  const [loading, setLoading] = useState(true);
  const [editingComment, setEditingComment] = useState(null);

  const getComments = () => {
    fetch(`https://striveschool-api.herokuapp.com/api/books/${id}/comments/`)
      .then((r) => r.json())
      .then(setComments)
      .finally(() => {
        setLoading(false);
      });
  };

  const handleDelete = (id) => {
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
            position: toast.POSITION.TOP_LEFT,
          });
        }
      })
      .then(getComments)
      .catch((e) => console.error(e));
  };

  const handleEditComment = (comment) => {
    setEditingComment(comment);
  };

  const handleSaveEdit = () => {
    // Implement the logic for updating the comment on the server
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
      })
      .catch((e) => console.error(e));
  };

  const handleCancelEdit = () => {
    setEditingComment(null);
  };

  return comments.map((comment) => (
    <ListGroup.Item as="li" key={comment._id}>
      <Row className="justify-content-between">
        <Col md={8}>
          {editingComment && editingComment._id === comment._id ? (
            <input
              type="text"
              value={editingComment.comment}
              onChange={(e) =>
                setEditingComment({
                  ...editingComment,
                  comment: e.target.value,
                })
              }
            />
          ) : (
            <>
              <h3>Recensione</h3>
              <p>{comment.comment}</p>
            </>
          )}
        </Col>
        <Col md={1} className="d-flex align-items-center p-2">
          {editingComment && editingComment._id === comment._id ? (
            <>
              <Button
                variant="success"
                className="me-2"
                onClick={handleSaveEdit}
              >
                Save
              </Button>
              <Button variant="secondary" onClick={handleCancelEdit}>
                Cancel
              </Button>
            </>
          ) : (
            <>
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
            </>
          )}
        </Col>
        <ToastContainer />
      </Row>
      <div>
        <h4>Valutazione</h4>
        <p>{comment.rate}</p>
      </div>
    </ListGroup.Item>
  ));
}
