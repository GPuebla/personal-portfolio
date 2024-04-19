import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


export default function BoostrapComponent(props) {

  const [color, setColor] = useState(true);
  const cardColor = color ? 'redCard' : "greenCard"; 

  return (
    <div className='Container'>
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://miro.medium.com/v2/resize:fit:1400/1*x0d41ns8PTQZz4a3VbMrBg.png" />
            <Card.Body>
                <Card.Title>{props.Title}</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
                </Card.Text>
                <Button onClick={() => setColor(!color)} iD={cardColor} variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
    </div>
   

  )
}
