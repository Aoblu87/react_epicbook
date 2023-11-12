import { useCallback, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Bearer } from "../Bearer";

export default function AddComment({ id, comments, setComments }) {
  const [rateValue, setRateValue] = useState(false);
  const [description, setDescription] = useState("");
  const getComments = () => {
    fetch(`https://striveschool-api.herokuapp.com/api/books/${id}/comments/`)
      .then((r) => r.json())
      .then(setComments);
  };
<<<<<<< Updated upstream
  const getCommentsByBook = useCallback(getComments, [getComments]);
=======
  useEffect(() => {
    getComments();
  }, [id]);
  //Dovrei aggiungere la dipendeza [getComments], ma se uso la UseCallBack poi non riesco a visualizzare i dati al render del componente e non trovo soluzione.
>>>>>>> Stashed changes

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      comment: description,
      rate: rateValue,
      elementId: id,
    };
    console.log(formData);

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

      .then(getCommentsByBook)
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
        <Button type="submit">Invia</Button>
        <ToastContainer />
      </Form.Group>
    </Form>
  );
}
