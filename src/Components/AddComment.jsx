import { useState } from "react";
import { Button, Form } from "react-bootstrap";

export default function AddComment({ selectedId }) {
  // const [loading, setLoading] = useState(true);
  const [rate, setRate] = useState(false);
  const [comment, setComment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      comment,
      rate,
      elementId: selectedId,
    };
    console.log(formData);

    fetch("https://striveschool-api.herokuapp.com/api/comments/", {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTQyNTJkNTJjMWRlOTAwMTQ1NjM3MTUiLCJpYXQiOjE2OTg4NDUzOTcsImV4cCI6MTcwMDA1NDk5N30.pbpjH7j3zUKHJVynzwOMsZlvuuxiKLLuVaukS0n5rCE",
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(formData),
    })
      .then(function (response) {
        if (response.ok) {
          alert("Saved!");
        } else {
          alert("Something went wrong!");
        }
      })
      .catch((e) => console.error(e));
  };

  return (
    <Form onSubmit={handleSubmit}>
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
        <Button type="submit">Invia</Button>
      </Form.Group>
    </Form>
  );
}
