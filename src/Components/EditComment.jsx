import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { Bearer } from "../Bearer";
import "react-toastify/dist/ReactToastify.css";

export default function EditComment({ id, asin, description, value }) {
  // const [loading, setLoading] = useState(true);
  const [rate, setRate] = useState(true);
  const [comment, setComment] = useState(value);
  const navigate = useNavigate();

  const handleEdit = (id) => {
    const formData = {
      comment,
      rate,
      elementId: id,
    };
    console.log(formData);

    fetch(`https://striveschool-api.herokuapp.com/api/comments/${id}`, {
      headers: {
        Authorization: Bearer,
        "Content-Type": "application/json",
      },
      method: "PUT",
      body: JSON.stringify(formData),
    })
      .then(function (response) {
        if (response.ok) {
          toast.success("Comment saved successfully!", {
            position: toast.POSITION.BOTTOM_RIGHT,
          });
          navigate(`/BookDetails/${id}`);
        } else {
          toast.error("Something went wrong!", {
            position: toast.POSITION.TOP_LEFT,
          });
        }
      })
      .catch((e) => console.error(e));
  };
  return (
    <Form onSubmit={handleEdit}>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Control
          placeholder="Romanzo avvincente..."
          as="textarea"
          rows={3}
          type="text"
          value={description}
          onChange={(e) => setComment(e.target.value)}
        />
      </Form.Group>
      <Form.Label>Come valuteresti il libro?</Form.Label>
      <Form.Select
        aria-label="Default select example"
        value={value}
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
        <Button type="submit">Invia</Button>
        <ToastContainer />
      </Form.Group>
    </Form>
  );
}
