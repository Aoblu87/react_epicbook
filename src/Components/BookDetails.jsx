import { Card } from "react-bootstrap";

export default function BookDetails({
  book,

  setSelectedId,
  setBookTitle,
}) {
  return (
    <Card key={book.asin} className="border border-0">
      <Card.Img
        variant="top"
        src={book.img}
        onClick={() => {
          setSelectedId(book.asin);
          setBookTitle(book.title);
        }}
      />
      <Card.Body className="my-2">
        <Card.Title className="text-center my-2">{book.title}</Card.Title>
      </Card.Body>
    </Card>
  );
}
