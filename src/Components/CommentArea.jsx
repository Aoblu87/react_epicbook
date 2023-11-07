import { Card, CardSubtitle, ListGroup } from "react-bootstrap";
import AddComment from "./AddComment";
import CommentList from "./CommentList";

export default function CommentArea({ selectedId, bookTitle }) {
  return (
    <>
      <Card id="comment-area">
        <Card.Body>
          {/* <div className="d-flex justify-content-end">
            <Link to={"/home"} variant="ligth">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="27"
                height="27"
                fill="currentColor"
                className="bi bi-x-circle"
                viewBox="0 0 16 16"
              >
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
              </svg>
            </Link>
          </div> */}
          <Card.Title>Lascia una recensione</Card.Title>
          <CardSubtitle className="mb-2 text-danger">{bookTitle}</CardSubtitle>
          <AddComment selectedId={selectedId} />
          <ListGroup as="ol" numbered>
            <CommentList selectedId={selectedId} />
          </ListGroup>
        </Card.Body>
      </Card>
    </>
  );
}
