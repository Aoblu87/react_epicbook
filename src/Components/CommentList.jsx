import { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import ListGroup from "react-bootstrap/ListGroup";

export default function CommentList({ selectedId }) {
  const [loading, setLoading] = useState(true);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    // Fetch // versione con Promise.then
    fetch(
      `https://striveschool-api.herokuapp.com/api/books/${selectedId}/comments/`
    )
      .then((r) => r.json())
      .then(setComments)
      .finally(() => {
        setLoading(false);
      });
  }, [selectedId]);
  return loading ? (
    <Spinner />
  ) : (
    comments.map((comment) => (
      <ListGroup.Item as="li">
        <div>
          <h3>Recensione</h3>
          <p>{comment.comment}</p>
        </div>
        <div>
          <h4>Valutazione</h4>
          <p>{comment.rate}</p>
        </div>
      </ListGroup.Item>
    ))
  );
}
