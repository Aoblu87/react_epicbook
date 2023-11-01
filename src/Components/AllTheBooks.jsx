import { Container, Row } from "react-bootstrap";
import dataBooks from "../assets/JSON/fantasy.json";
import SingleBook from "./SingleBook";

export default function AllTheBooks({ query }) {
  const searchResult = (book) =>
    book.title.toLowerCase().includes(query.toLowerCase());

  return (
    <Container className="my-5">
      <Row xs={1} md={4} className="g-4">
        {dataBooks.filter(searchResult).map((book) => (
          <SingleBook oneBook={book} asin={book.asin} key={book.asin} />
        ))}
      </Row>
    </Container>
  );
}
