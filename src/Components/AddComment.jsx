import { useCallback, useEffect, useState } from "react";
import { Button, Form, Spinner } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Bearer } from "../Bearer";

export default function AddComment({ id, setComments, loading, setLoading }) {
  const [rate, setRate] = useState(false);
  const [comment, setComment] = useState("");

  //Volevo applicare i campi required nel form per dare un output visivo del campo non inserito, ma sono riuscita a creare la validazione solo per il campo testo e non per il
  //campo Select che rimaneva sempre validato.

  // const [validated, setValidated] = useState(false);

  // const validate = () => {
  //   if (!setRate) {
  //     validation = IsInvalid;
  //   } else validation = IsValid;
  // };

  const getComments = useCallback(() => {
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
  }, [id, setComments, setLoading]);

  useEffect(() => {
    getComments();
  }, [id, getComments]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // const form = e.currentTarget;
    // if (form.checkValidity() === false) {
    //   e.preventDefault();
    //   e.stopPropagation();
    // }

    // setValidated(true);

    const formData = {
      comment,
      rate,
      elementId: id,
    };
    console.log(formData);
    try {
      fetch("https://striveschool-api.herokuapp.com/api/comments/", {
        headers: {
          Authorization: Bearer,
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(formData),
      })
        .then(function (response) {
          if (response.ok) {
            toast.success("Comment saved successfully!", {
              position: toast.POSITION.BOTTOM_RIGHT,
            });
          } else {
            toast.error("Something went wrong!", {
              position: toast.POSITION.TOP_LEFT,
            });
          }
        })

        .then(getComments)
        .finally(() => {
          setLoading(false);
        });
    } catch (error) {
      console.log(error);
    }
  };

  return loading ? (
    <div className="d-flex mt-5">
      <Spinner animation="border" variant="primary" className="mx-auto" />
    </div>
  ) : (
    <Form
      onSubmit={handleSubmit}
      className="position-relative"
      // noValidate
      // validated={validated}
    >
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Control
          placeholder="Romanzo avvincente..."
          as="textarea"
          rows={3}
          type="text"
          required
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
      </Form.Group>
      <Form.Label>Come valuteresti il libro?</Form.Label>
      <Form.Group>
        <Form.Select
          aria-label="Default select example"
          value={rate}
          required
          onChange={(e) => setRate(e.target.value)}
        >
          <option>Valutazione...</option>
          <option value="5">Eccellente</option>
          <option value="4">Molto buono</option>
          <option value="3">Nella media</option>
          <option value="2">Scarso</option>
          <option value="1">Pessimo</option>
        </Form.Select>
      </Form.Group>
      <Form.Group className="d-flex justify-content-end py-4 gap-2">
        <Button type="submit">Invia</Button>
        <ToastContainer />
      </Form.Group>
    </Form>
  );
}
