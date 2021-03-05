import React from "react";
import { Button, Card } from "react-bootstrap";

const News = (props) => {
  const { title, description } = props.article;
  //console.log(props);
  // urlToImage
  return (
    <Card>
      <Card.Header>Featured</Card.Header>
      {/* <Card.Img variant="top" src={urlToImage} /> */}
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description} </Card.Text>
        <Button variant="primary">Go To </Button>
      </Card.Body>
    </Card>
  );
};

export default News;
