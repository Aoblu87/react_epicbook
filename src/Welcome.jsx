import Card from 'react-bootstrap/Card';
import Library from './assets/boooks.jpeg';
import Ratio from 'react-bootstrap/Ratio';
import { Container } from 'react-bootstrap';
import AlertDismissible from './AlertDismissible';


function Welcome() {
    return (
        <Container className='my-5'>

            <Card className="bg-light text-white border border-0" >
                <Ratio aspectRatio="21x9">

                    <Card.Img className='img-fluid' src={Library} alt="New Tapei" />
                </Ratio>
                <Card.ImgOverlay>
                    <Card.Title className='display-3 text-dark p-4 fw-semibold'>Welcome on EpicBooks</Card.Title>

                    <AlertDismissible />

                </Card.ImgOverlay>
            </Card>
        </Container>
    );
}

export default Welcome;


