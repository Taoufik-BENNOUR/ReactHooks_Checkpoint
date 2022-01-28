import React from 'react';
import { Card,ListGroup,ListGroupItem } from 'react-bootstrap';
import { Rating } from 'react-simple-star-rating'

const MovieCard = ({movie:{title,rate,description,posterUrl}}) => {
  return <>
    <Card style={{ width: '18rem',marginTop:"30px",background:'rgb(255, 165, 0,0.6)'
}}>
  <Card.Img style={{height:400}} variant="bottom" src={posterUrl} />
  <Card.Body>
    <Card.Title>{title}</Card.Title>
    <Rating initialValue={rate} readonly={true} />
    <Card.Text>
    {description}    </Card.Text>
  </Card.Body>
</Card>
  </>;
};

export default MovieCard;
