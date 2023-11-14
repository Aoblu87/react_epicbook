import { Card, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import dataBooks from "../assets/JSON/fantasy.json";

export default function AllTheBooks({ query }) {
  const searchResult = (book) =>
    book.title.toLowerCase().includes(query.toLowerCase());

  return (
    <Container className="d-flex my-5">
      <Row xs={1} md={4} className="g-4">
        {dataBooks.filter(searchResult).map((book) => (
          <SingleBook book={book} key={book.asin} />
        ))}
      </Row>
    </Container>
  );
}

function SingleBook({ book }) {
  return (
    <Card key={book.asin} className="border border-0">
      <Link to={`/BookDetails/${book.asin}`} key={book.asin}>
        <Card.Img variant="top" src={book.img} />
        <Card.Body className="my-2">
          <Card.Title className="text-center my-2">{book.title}</Card.Title>
        </Card.Body>
      </Link>
    </Card>
  );
}
