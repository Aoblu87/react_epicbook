import { Col, Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import SearchInput from './SearchForm';
import SingleBook from './SingleBook';
import dataBooks from './assets/JSON/fantasy.json';

function AllTheBooks() {
    return (

        <Container className='my-5'>
            <SearchInput />
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

