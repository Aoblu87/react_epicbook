import { Col, Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import { useState } from 'react';
import SingleBook from './SingleBook';
import dataBooks from './assets/JSON/fantasy.json';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default function AllTheBooks() {
    const [query, setQuery] = useState("");
    const searchResult = dataBooks.title.toLowerCase().includes(query.toLowerCase());


    return (

        <Container className='my-5'>

            <Row className='justify-content-center my-5'>
                <Col md={5}>

                    <Form.Control
                        type="text"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                    />
                </Col>
                <Col md={2}>
                    <Button variant="dark"><i class="bi bi-search"></i></Button>

                </Col>

            </Row>

            <Row xs={1} md={4} className="g-4">

                {dataBooks.filter(searchResult).map((book) => (


                    <SingleBook oneBook={book} key={book.asin} />

                ))}

            </Row>
        </Container>
    );
}









