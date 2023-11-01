import { Card } from "react-bootstrap";
import { useState } from "react";
import CommentArea from "./CommentArea";

export default function SingleBook({ oneBook, asin }) {
  const [selected, setSelected] = useState(false);
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);

  return (
    <Card key={asin} className="border border-0">
      <Card.Img
        id="card-img"
        variant="top"
        src={oneBook.img}
        onClick={() => {
          setSelected(!selected);
          handleShow();
        }}
        className={selected ? "selected" : "not-selected"}
        style={{
          outline: selected ? "3px solid red" : "3px solid transparent",
          margin: "-3px",
        }}
      />
      <Card.Body className="my-2">
        <Card.Title className="text-center my-2">{oneBook.title}</Card.Title>
      </Card.Body>
      <CommentArea setShow={setShow} show={show} asin={asin} />
    </Card>
  );
}
