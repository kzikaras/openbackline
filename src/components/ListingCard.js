import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap";
import { useNavigate } from "react-router-dom";

const ListingCard = (props) => {
  const navigate = useNavigate();
  function navToListing() {
    console.log(props.id);
    return navigate(`/listing/${props.id}`);
  }
  return (
    <div>
      <Card>
        <CardImg top width="100%" src={props.image} alt="Card image cap" />
        <CardBody>
          <CardTitle>{props.title}</CardTitle>
          <CardSubtitle>{props.subtitle}</CardSubtitle>
          <CardText>{props.description}</CardText>
          <Button onClick={navToListing}>{props.buttonText}</Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default ListingCard;
