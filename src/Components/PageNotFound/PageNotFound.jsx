import { Button, Col, Container, Image, Row } from "react-bootstrap";
import Status404 from "./Pagenotfound.png";
import styles from "./styles.module.scss";
import cn from "classnames";
import { Link } from "react-router-dom";

export default function PageNotFound() {
  return (
    <Container>
      <Row className="flex-column position-relative">
        <Col className={"d-flex justify-content-center "}>
          <Image src={Status404} roundedCircle />
        </Col>
        <Link to={"/"}>
          <Col>
            <Button
              variant="success"
              className={cn(styles.btnNotFound, "position-absolute")}
            >
              Back to Homepage
            </Button>
          </Col>
        </Link>
      </Row>
    </Container>
  );
}
