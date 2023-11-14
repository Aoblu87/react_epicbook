import { useState } from "react";
import Logo from "../assets/logo_books.png";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import { Col, Row } from "react-bootstrap";

function AlertDismissible() {
  const [show, setShow] = useState(true);

  return (
    <>
      <Row className="justify-content-center sticky-top p-5 w-md-50">
        <Alert show={show} variant="light" className="d-flex flex-column w-50">
          <Alert.Heading className="d-flex justify-content-center align-items-center my-3">
            <img
              id="logo-cookies"
              className="img-fluid"
              src={Logo}
              alt="Logo"
            />
          </Alert.Heading>
          <p className="d-flex justify-content-center">
            This website uses cookies to ensure you get the best experience.{" "}
            <Alert.Link href="#" className="fw-medium ms-2">
              Learn more
            </Alert.Link>
          </p>
          <hr />
          <Col className="d-flex justify-content-between align-items-center">
            <div>
              <Alert.Link
                href="#"
                className="link-dark link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover"
              >
                Preferences
              </Alert.Link>
            </div>
            <div>
              <Button onClick={() => setShow(false)} variant="outline-dark">
                Accept
              </Button>
            </div>
          </Col>
        </Alert>
      </Row>

      {!show && (
        <div className="d-flex justify-content-center fixed-bottom bg-secondary border border-0 rounded-0 opacity-75 p-2">
          This website uses cookies to ensure you get the best experience.{" "}
          <Alert.Link href="#" className="fw-medium ms-2">
            Learn more
          </Alert.Link>
        </div>
      )}
    </>
  );
}
export default AlertDismissible;
