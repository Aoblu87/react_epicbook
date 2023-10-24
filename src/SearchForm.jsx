import { Col, Row } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


export default function SearchForm() {
    return (
        <>
            <Row className='justify-content-center my-5'>
                <Col md={5}>

                    <Form.Control size="lg" type="text" placeholder="Grimorie Anthology" />
                </Col>
                <Col md={2}>
                    <Button variant="dark"><i class="bi bi-search"></i></Button>

                </Col>

            </Row>

        </>

    );
}

