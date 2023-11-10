import { Card, ListGroup } from "react-bootstrap";
import AddComment from "./AddComment";
import CommentList from "./CommentList";

export default function CommentArea({ id }) {
  console.log(id);
  return (
    <>
      <Card id="comment-area">
        <Card.Body>
          <Card.Title>Lascia una recensione</Card.Title>

          <AddComment id={id} />
          <ListGroup as="ol" numbered>
            <CommentList id={id} />
          </ListGroup>
        </Card.Body>
      </Card>
    </>
  );
}
