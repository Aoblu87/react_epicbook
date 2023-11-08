import { Card, Container, Row } from "react-bootstrap";
import CommentArea from "./CommentArea";

export default function BookDetails({
  book,

  selectedId,
}) {
  const { id } = useParams();
  return (
    <Container>
      <Row>
        <Card key={book.selectedId} className="border border-0">
          <Card.Img variant="top" src={book.img} />
          <Card.Body className="my-2">
            <Card.Title className="text-center my-2">{book.title}</Card.Title>
          </Card.Body>
        </Card>
      </Row>
      <Row>
        <CommentArea selectedId={selectedId} />
      </Row>
    </Container>
  );
}
