import { useState } from "react";
import { Card } from "react-bootstrap";



export default function SingleBook({ oneBook }) {

    const [selected, setSelected] = useState(false);

    return (




        <Card id={oneBook.asin} className='border border-0'>
            <Card.Img id='card-img' variant="top" src={oneBook.img} onClick={() => setSelected(!selected)}
                className="flex-grow-1"
                style={{
                    outline: selected ? "3px solid red" : "3px solid transparent",
                    margin: "-3px",
                }} />
            <Card.Body className='my-2'>
                <Card.Title className='text-center my-2'>{oneBook.title}</Card.Title>

            </Card.Body>
        </Card>



    );
}

