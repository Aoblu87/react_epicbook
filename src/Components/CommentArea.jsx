import { useState } from "react";
import { Card, ListGroup } from "react-bootstrap";
import AddComment from "./AddComment";
import CommentList from "./CommentList";

export default function CommentArea({ id }) {
  const [comments, setComments] = useState([]);
  return (
    <>
      <Card id="comment-area" className="my-5">
        <Card.Body>
          <Card.Title className="d-flex justify-content-center">
            Lascia una recensione
          </Card.Title>

          <AddComment id={id} comments={comments} setComments={setComments} />
          <ListGroup as="ol" numbered>
            <CommentList
              id={id}
              comments={comments}
              setComments={setComments}
            />
          </ListGroup>
        </Card.Body>
      </Card>
    </>
  );
}
