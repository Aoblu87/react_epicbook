import { Container, Col } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import dataBooks from './assets/JSON/fantasy.json';
import { Card } from "react-bootstrap";
import { useState } from 'react';


function AllTheBooks() {
    return (

        <Container className='my-5'>

            <Row xs={1} md={4} className="g-4">
                {dataBooks.map((book, i) => {
                    return (


                        <Col key={i}  >
                            <SingleBook oneBook={book} />

                        </Col>

                    );
                })}

            </Row>
        </Container>
    );
}

export default AllTheBooks;

function SingleBook({ oneBook }) {

    const [isSelected, setIsSelected] = useState(false);
    let pictureClassName = 'picture'
    if (isSelected) {

        pictureClassName = 'border border-secondary-subtle '
    }
    else {
        pictureClassName = 'picture'
    }

    return (



        <Card id={oneBook.asin} className='border border-0'>
            <Card.Img id='card-img' variant="top" src={oneBook.img} className={pictureClassName} onClick={() => setIsSelected(true)} />
            <Card.Body className='my-2'>
                <Card.Title className='text-center my-2'>{oneBook.title}</Card.Title>

            </Card.Body>
        </Card>



    );
}