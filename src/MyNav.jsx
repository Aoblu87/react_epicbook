import { Button, Col, Form, Row } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Logo from "./assets/logo_books.png";

function MyNav({ query, setQuery }) {
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary fixed-top" xs={12} md={6}>
        <Container className="justify-content-center">
          <Row
            xs={3}
            className="justify-content-between p-2"
            style={{ width: "100%" }}
          >
            <Navbar.Brand href="#home" className="d-flex">
              <img
                src={Logo}
                width="30"
                height="30"
                className="d-inline-block align-top"
                alt="logo"
              />
            </Navbar.Brand>
            <Navbar.Toggle
              aria-controls="basic-navbar-nav"
              className="d-flex"
              style={{ width: "15%" }}
            />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#">Home</Nav.Link>
                <Nav.Link href="#">About</Nav.Link>
                <Nav.Link href="#">Browse</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Row>
          <Row className="justify-content-center my-2" xs={2}>
            <Col className="d-flex justify-content-center" xs={11}>
              <Form.Control
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
            </Col>
            <Col className="d-flex justify-content-center" xs={1}>
              <Button variant="dark">
                <i className="bi bi-search"></i>
              </Button>
            </Col>
          </Row>
        </Container>
      </Navbar>
    </>
  );
}

export default MyNav;
