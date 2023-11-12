import React, { useState } from "react";
import { Button, Col, Form, ListGroup, Row } from "react-bootstrap";
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

  return (
    <Form onSubmit={handleSaveEdit}>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Control
          placeholder="Romanzo avvincente..."
          as="textarea"
          rows={3}
          type="text"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
      </Form.Group>
      <Form.Label>Come valuteresti il libro?</Form.Label>
      <Form.Select
        aria-label="Default select example"
        value={rate}
        onChange={(e) => setRate(e.target.value)}
      >
        <option>Valutazione...</option>
        <option value="5">Eccellente</option>
        <option value="4">Molto buono</option>
        <option value="3">Nella media</option>
        <option value="2">Scarso</option>
        <option value="1">Pessimo</option>
      </Form.Select>
      <Form.Group className="d-flex justify-content-end py-4 gap-2">
        <Button variant="success" className="me-2" onClick={handleSaveEdit}>
          Save
        </Button>
        <Button variant="secondary" onClick={handleCancelEdit}>
          Cancel
        </Button>
        <ToastContainer />
      </Form.Group>
    </Form>
  );
}
