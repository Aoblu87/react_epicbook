import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import cn from "classnames";
import styles from "./styles.module.scss";

export default function SingleBook({ book }) {
  return (
    <Card key={book.asin} className={cn("border border-0", styles.card)}>
      <Link
        to={`/BookDetails/${book.asin}`}
        key={book.asin}
        className="link-offset-2 link-underline link-underline-opacity-0 text-dark"
      >
        <Card.Img variant="top" src={book.img} className={cn(styles.imgCard)} />
        <Card.Body className="my-2">
          <Card.Title className="text-center my-2">{book.title}</Card.Title>
        </Card.Body>
      </Link>
    </Card>
  );
}
