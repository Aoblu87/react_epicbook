import { Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Books from './assets/JSON/fantasy.json';

function AllTheBooks() {
    return (
        <Container className='my-5'>

            <Row xs={1} md={4} className="g-4">
                {Books.map((book, i) => (
                    <Col key={i}>
                        <Card id={book.asin}>
                            <Card.Img variant="top" src={book.img} />
                            <Card.Body>
                                <Card.Title>{book.title}</Card.Title>
                               
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default AllTheBooks;