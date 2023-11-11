import { useEffect, useState } from "react";
import { Button, Col, Row, Spinner } from "react-bootstrap";
import { PencilFill, Trash3Fill } from "react-bootstrap-icons";
import ListGroup from "react-bootstrap/ListGroup";
import { Bearer } from "../Bearer";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export default function CommentList({ id }) {
  const [loading, setLoading] = useState(true);
  const [comments, setComments] = useState([]);
  const navigate = useNavigate();

  // Fetch GET
  useEffect(() => {
    fetch(`https://striveschool-api.herokuapp.com/api/books/${id}/comments/`, {
      headers: {
        Authorization: Bearer,
        "Content-Type": "application/json",
      },
    })
      .then((r) => {
        if (!r.ok) {
          throw new Error(`HTTP error! Status: ${r.status}`);
        }
        return r.json();
      })
      .then((data) => {
        console.log("API response:", data);
        setComments(data);
      })
      .finally(() => setLoading(false))
      .catch((error) => console.error("Error fetching comments:", error));
  }, [id]);

  // Fetch DELETE

  const handleDelete = (id, asin) => {
    fetch(`https://striveschool-api.herokuapp.com/api/comments/${id}`, {
      headers: {
        Authorization: Bearer,
      },
      method: "DELETE",
    })
      .then((r) => {
        if (r.ok) {
          toast.success("Deleted successfully!", {
            position: toast.POSITION.BOTTOM_RIGHT,
          });
          navigate(`/BookDetails/${asin}`);
        } else {
          toast.error("Something went wrong!", {
            position: toast.POSITION.TOP_LEFT,
          });
        }
        return r.json();
      })
      .then(setComments)
      .catch((e) => console.error("Error deleting comment:", e));
  };

  const handleEdit = (id, asin, description, value) => {
    navigate(`/EditComment/${id}, ${asin}, ${description}, ${value}`);
  };

  return loading ? (
    <Spinner />
  ) : (
    comments.map((comment, key) => (
      <ListGroup.Item as="li" key={key}>
        <Row className="justify-content-between">
          <Col md={8}>
            <h3>Recensione</h3>
            <p>{comment.comment}</p>
          </Col>
          <Col md={1} className="d-flex align-items-center p-2">
            <Button
              variant="warning"
              className="me-2"
              onClick={handleEdit(
                comment.id,
                comment.elementId,
                comment.comment,
                comment.rate
              )}
            >
              {" "}
              <PencilFill />{" "}
            </Button>
            <Button
              variant="danger"
              className="me-1"
              onClick={() => {
                handleDelete(comment._id, comment.elementId);
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
