import React, { useState } from "react";
import { Button, Col, ListGroup, Row } from "react-bootstrap";
import { PencilFill, Trash3Fill } from "react-bootstrap-icons";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Bearer } from "../Bearer";
import EditComment from "./EditComment";

export default function CommentList({
  id,
  comments,
  setComments,
  loading,
  setLoading,
}) {
  const [editingComment, setEditingComment] = useState(null);

  const getComments = () => {
    try {
      fetch(`https://striveschool-api.herokuapp.com/api/books/${id}/comments/`)
        .then((r) => r.json())
        .then(setComments);
      // .finally(() => {
      //   setLoading(false);
      // });
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = (id) => {
    setLoading(true);
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
              position: toast.POSITION.TOP_LEFT,
            });
          }
        })
        .then(getComments);
      // .finally(() => {
      //   setLoading(false);
      // });
    } catch (error) {
      console.log(error);
    }
  };

  const handleEditComment = (comment) => {
    setEditingComment(comment);
  };

  // return loading ? (
  //   <div className="d-flex mt-5">
  //     <Spinner animation="border" variant="primary" className="mx-auto" />
  //   </div>
  // ) : (
  return comments.map((comment) => (
    <ListGroup.Item as="li" key={comment._id}>
      <Row className="justify-content-between">
        {editingComment && editingComment._id === comment._id ? (
          <>
            <EditComment
              comment={comment}
              editingComment={editingComment}
              setEditingComment={setEditingComment}
            />
          </>
        ) : (
          <>
            <Col className="d-flex justify-content-between">
              <Col md={8}>
                <h3>Recensione</h3>
                <p>{comment.comment}</p>
              </Col>
              <Col md={1} className="d-flex align-items-center p-0 p-md-2">
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
            </Col>
            <ToastContainer />
            <div>
              <h4>Valutazione</h4>
              <p>{comment.rate}</p>
            </div>
          </>
        )}
      </Row>
    </ListGroup.Item>
  ));
  // );
}
