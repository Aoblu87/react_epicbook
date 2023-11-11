import { Card, ListGroup } from "react-bootstrap";
import AddComment from "./AddComment";
import CommentList from "./CommentList";

export default function CommentArea({ id }) {
  return (
    <>
      <Card id="comment-area" className="my-5">
        <Card.Body>
          <Card.Title className="d-flex justify-content-center">
            Lascia una recensione
          </Card.Title>

          <AddComment id={id} />
          <ListGroup as="ol" numbered>
            <CommentList id={id} />
          </ListGroup>
        </Card.Body>
      </Card>
    </>
  );
}
