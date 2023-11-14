import { useCallback, useState } from "react";
import { Card } from "react-bootstrap";
import AddComment from "./AddComment";
import ListaCommentiProva from "./ListaCommentiProva";

export default function CommentArea({ id }) {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);

  const getCommentsByBook = useCallback(
    (id) => {
      setLoading(true);
      try {
        fetch(
          `https://striveschool-api.herokuapp.com/api/books/${id}/comments/`
        )
          .then((r) => r.json())
          .then(setComments)
          .finally(() => {
            setLoading(false);
          });
      } catch (error) {
        console.log(error);
      }
    },
    [setComments, setLoading]
  );
  return (
    <>
      <Card id="comment-area" className="my-5">
        <Card.Body>
          <Card.Title className="d-flex justify-content-center">
            Lascia una recensione
          </Card.Title>

          <AddComment
            id={id}
            comments={comments}
            setComments={setComments}
            loading={loading}
            setLoading={setLoading}
            getCommentsByBook={getCommentsByBook}
          />
        </Card.Body>
      </Card>
      <Card id="comment-area" className="my-5">
        <Card.Body>
          <Card.Title className="d-flex justify-content-center">
            Recensioni clienti
          </Card.Title>

          <ListaCommentiProva
            id={id}
            comments={comments}
            setComments={setComments}
            loading={loading}
            setLoading={setLoading}
            getCommentsByBook={getCommentsByBook}
          />
        </Card.Body>
      </Card>
    </>
  );
}
