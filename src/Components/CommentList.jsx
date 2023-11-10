import { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import ListGroup from "react-bootstrap/ListGroup";

export default function CommentList({ id }) {
  const [loading, setLoading] = useState(true);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    // Fetch // versione con Promise.then
    fetch(`https://striveschool-api.herokuapp.com/api/books/${id}/comments/`)
      .then((r) => r.json())
      .then(setComments)
      .finally(() => {
        setLoading(false);
      });
  }, [id]);
  return loading ? (
    <Spinner />
  ) : (
    comments.map((comment, key) => (
      <ListGroup.Item as="li" key={key++}>
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
