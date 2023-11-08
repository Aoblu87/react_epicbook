import { useState } from "react";
import { Container, Row } from "react-bootstrap";
import dataBooks from "../assets/JSON/fantasy.json";
import SingleBook from "./SingleBook";

export default function AllTheBooks({ query }) {
  const [selectedId, setSelectedId] = useState("");
  const [bookTitle, setBookTitle] = useState("");
  const searchResult = (book) =>
    book.title.toLowerCase().includes(query.toLowerCase());
  console.log(selectedId);
  console.log(bookTitle);

  return (
    <Container className="d-flex my-5">
      <Row xs={1} md={4} className="g-4">
        {dataBooks.filter(searchResult).map((book) => (
          <SingleBook
            selectedId={selectedId}
            setSelectedId={setSelectedId}
            bookTitle={bookTitle}
            setBookTitle={setBookTitle}
            book={book}
            key={book.asin}
            onClick={() => {
              setSelectedId(book.asin);
              setBookTitle(book.title);
            }}
          />
        ))}
      </Row>
      {/* {selectedId && (
        <CommentArea selectedId={selectedId} bookTitle={bookTitle} />
      )} */}
    </Container>
  );
}
