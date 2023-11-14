import { useState } from "react";
import { Button, Card, Form } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Bearer } from "../Bearer";

export default function EditComment({
  id,
  comments,
  setComments,
  comment,
  editingComment,
  setEditingComment,
}) {
  const [rateValue, setRateValue] = useState(false);
  const [description, setDescription] = useState("");
  //   const [loading, setLoading] = useState(true);

  const getComments = () => {
    try {
      fetch(
        `https://striveschool-api.herokuapp.com/api/books/${comment.elementId}/comments/`
      )
        .then((r) => r.json())
        .then(setComments);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSaveEdit = (e) => {
    e.preventDefault();
    // setLoading(true);
    const formData = {
      comment: description,
      rate: rateValue,
      elementID: id,
    };
    try {
      fetch(
        `https://striveschool-api.herokuapp.com/api/comments/${comment._id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: Bearer,
          },
          body: JSON.stringify(formData),
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
      // .finally(() => {
      //   setLoading(false);
      // });
    } catch (error) {
      console.error(error);
    }
  };

  const handleCancelEdit = () => {
    setEditingComment(null);
  };

  return (
    //loading ? (
    //     <div className="d-flex mt-5">
    //       <Spinner animation="border" variant="primary" className="mx-auto" />
    //     </div>
    //   ) : (
    //     <>
    <Form onSubmit={handleSaveEdit}>
      <Card.Title className="d-flex justify-content-center">
        Lascia una recensione
      </Card.Title>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Control
          placeholder="Romanzo avvincente..."
          as="textarea"
          rows={3}
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </Form.Group>
      <Form.Label>Come valuteresti il libro?</Form.Label>
      <Form.Select
        aria-label="Default select example"
        value={rateValue}
        onChange={(e) => setRateValue(e.target.value)}
      >
        <option>Valutazione...</option>
        <option value="5">Eccellente</option>
        <option value="4">Molto buono</option>
        <option value="3">Nella media</option>
        <option value="2">Scarso</option>
        <option value="1">Pessimo</option>
      </Form.Select>
      <Form.Group className="d-flex justify-content-end py-4 gap-2">
        <Button variant="success" className="me-2" type="submit">
          Save
        </Button>
        <Button variant="secondary" onClick={handleCancelEdit}>
          Cancel
        </Button>
        <ToastContainer />
      </Form.Group>
    </Form>
  );
  //     </>
  //   );
}
