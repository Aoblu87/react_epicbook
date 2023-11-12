import { useEffect, useState } from "react";
import { Button, Col, ListGroup, Row, Spinner } from "react-bootstrap";
import { PencilFill, Trash3Fill } from "react-bootstrap-icons";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Bearer } from "../Bearer";

export default function CommentList({ id, comments, setComments }) {
  const [loading, setLoading] = useState(true);

  const getComments = () => {
    fetch(`https://striveschool-api.herokuapp.com/api/books/${id}/comments/`)
      .then((r) => r.json())
      .then(setComments)
      .finally(() => {
        setLoading(false);
      });
  };

  console.log(comments);

  useEffect(() => {
    getComments();
  }, [id]);

  // Fetch DELETE
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
        return fetch(
          `https://striveschool-api.herokuapp.com/api/books/${id}/comments/`
        );
      })
      .then((r) => r.json())
      .then(getComments)
      .catch((e) => console.error(e));
  };

  return loading ? (
    <Spinner />
  ) : (
    comments.map((comment) => (
      <ListGroup.Item as="li" key={comment._id}>
        <Row className="justify-content-between">
          <Col md={8}>
            <h3>Recensione</h3>
            <p>{comment.comment}</p>
          </Col>
          <Col md={1} className="d-flex align-items-center p-2">
            <Button
              variant="warning"
              className="me-2"
              // onClick={handleEdit(
              //   comment.id,
              //   comment.elementId,
              //   comment.comment,
              //   comment.rate
              // )}
            >
              {" "}
              <PencilFill />{" "}
            </Button>
            <Button
              variant="danger"
              className="me-1"
              onClick={() => {
                handleDelete(comment._id);
              }}
            >
              {" "}
              <Trash3Fill />{" "}
            </Button>
          </Col>

          <ToastContainer />
        </Row>
        <div>
          <h4>Valutazione</h4>
          <p>{comment.rate}</p>
        </div>
      </ListGroup.Item>
    ))
  );
}
