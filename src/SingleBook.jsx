import { useState } from "react";
import { Card } from "react-bootstrap";


export default function SingleBook({ oneBook }) {

    const [isSelected, setIsSelected] = useState(false);
    let pictureClassName = 'picture'

    const handleClick = event => {
        // 👇️ toggle isActive state on click
        setIsSelected(current => !current);
    };
    if (isSelected) {

        pictureClassName = 'picture-active '
    }
    else {
        pictureClassName = ''
    }
    return (




        <Card id={oneBook.asin} className='border border-0'>
            <Card.Img id='card-img' variant="top" src={oneBook.img} className={pictureClassName} onClick={handleClick} />
            <Card.Body className='my-2'>
                <Card.Title className='text-center my-2'>{oneBook.title}</Card.Title>

            </Card.Body>
        </Card>



    );
}

