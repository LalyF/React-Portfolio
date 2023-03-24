import React from "react";
import Card from 'react-bootstrap/Card';

function Project(props) {
  return (
   <Card style={{ width: '18rem', margin: "2rem" }}>
    <Card.Title>{props.title}</Card.Title> 
    <Card.Img variant="top" src={require(`./images/${props.image}`)} />
    <Card.Link href="#">GitHub url</Card.Link>
    <Card.Link href="#">Website</Card.Link>
    </Card>
  );
}

export default Project;
