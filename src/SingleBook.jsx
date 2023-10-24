import { Card } from "react-bootstrap";

export default function SingleBook({ oneBook }) {
    return (




        <Card id={oneBook.asin} className='border border-0'>
            <Card.Img id='card-img' variant="top" src={oneBook.img} className='img-fluid h-25' />
            <Card.Body className='my-2'>
                <Card.Title className='text-center my-2'>{oneBook.title}</Card.Title>

            </Card.Body>
        </Card>



    );
}