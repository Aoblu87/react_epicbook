import {
  Button,
  Card,
  CardBody,
  Col,
  Container,
  Image,
  ListGroup,
  ListGroupItem,
  Row,
} from "react-bootstrap";
import { useParams } from "react-router-dom";
import dataBooks from "../assets/JSON/fantasy.json";
import CommentArea from "./CommentArea";

export default function BookDetails() {
  const { id } = useParams();
  console.log("Received id:", id);

  const book = dataBooks.find((book) => book.asin === id);

  if (!book) {
    return <div>Product not found</div>;
  }

  return (
    <Container>
      <Row className="g-0 ">
        <Card className="d-flex flex-row flex-wrap justify-content-center border border-0">
          <Col md={4} className="d-flex mx-3">
            <Image src={book.img} className="card-img-top" alt={book.title} />
          </Col>
          <Col md={8} className="d-flex flex-column">
            <CardBody>
              <h5 className="card-title">{book.title}</h5>
              <p className="card-text">Genre: {book.category}</p>
              <p className="card-text">Price: {book.price}€</p>

              <p className="card-text">
                Description: Lorem ipsum dolor sit amet, consectetur adipiscing
                elit. Sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua.
              </p>
            </CardBody>
            <ListGroup className="list-group list-group-flush">
              <ListGroupItem>ISBN: {book.asin}</ListGroupItem>
              <ListGroupItem>
                PubListGroupItemshed: January 1, 2023
              </ListGroupItem>
              <ListGroupItem>Pages: 200</ListGroupItem>
            </ListGroup>
            <CardBody>
              <Button className="btn btn-primary">Buy Now</Button>
            </CardBody>
          </Col>
        </Card>
      </Row>
      <Row className="p-2">
        <CommentArea id={book.asin} />
      </Row>
    </Container>
  );
}
