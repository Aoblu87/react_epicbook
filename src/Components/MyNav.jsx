import { useContext } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { MoonStarsFill, Search, Sun } from "react-bootstrap-icons";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import Logo from "../assets/logo_books.png";
import ThemeContext from "../contexts/theme";

function MyNav({ query, setQuery }) {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <>
      <Navbar
        expand="lg"
        className={`theme === "light" ? "bg-light" : "bg-dark " mb-5`}
        variant={theme}
      >
        <Container fluid className="mx-3">
          <Link to="/">
            <Navbar.Brand>
              <img
                src={Logo}
                width="30"
                height="30"
                className="d-inline-block align-top"
                alt="logo"
              />
            </Navbar.Brand>
          </Link>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />

          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#">About</Nav.Link>
              <Nav.Link href="#">Browse</Nav.Link>
            </Nav>
          </Navbar.Collapse>

          <Row className="justify-content-center my-2 mx-5">
            <Col xs={9} md={11}>
              <Form.Control
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
            </Col>
            <Col xs={1} className="d-flex justify-content-center">
              <Button variant="dark">
                <Search />
              </Button>
            </Col>
          </Row>
          <Col className="d-none d-md-flex justify-content-end">
            <button
              className="btn btn-light rounded-circle"
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            >
              {theme === "light" ? <MoonStarsFill /> : <Sun />}
            </button>
          </Col>
        </Container>
      </Navbar>
    </>
  );
}

export default MyNav;
