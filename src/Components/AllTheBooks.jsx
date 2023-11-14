import { Container, Row } from "react-bootstrap";
import dataBooks from "../assets/JSON/fantasy.json";
import SingleBook from "../components/SingleBook/SingleBook";

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
