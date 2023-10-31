import { Container, Row } from "react-bootstrap";
import SingleBook from "./SingleBook";
import dataBooks from "../assets/JSON/fantasy.json";

export default function AllTheBooks({ query, setQuery }) {
  const searchResult = (book) =>
    book.title.toLowerCase().includes(query.toLowerCase());

  return (
    <Container className="my-5">
      <Row xs={1} md={4} className="g-4">
        {dataBooks.filter(searchResult).map((book) => (
          <SingleBook oneBook={book} key={book.asin} />
        ))}
      </Row>
    </Container>
  );
}
