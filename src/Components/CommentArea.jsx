import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import AddComment from "./AddComment";
import CommentList from "./CommentList";
import { ListGroup } from "react-bootstrap";

export default function CommentArea({ show, setShow, asin }) {
  const handleClose = () => setShow(false);

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Lascia una Recensione</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <AddComment asin={asin} />
          <ListGroup as="ol" numbered>
            <CommentList asin={asin} />
          </ListGroup>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
