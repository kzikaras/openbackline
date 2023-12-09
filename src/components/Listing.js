import React, { useEffect, useState } from "react";
import Navigation from "./Navigation";
import ListingCard from "./ListingCard";
import { Container, Row, Col } from "reactstrap";
import { useNavigate } from "react-router-dom";
import mockData from "../mockData";
import {
  BrowserRouter as Router,
  Link,
  Route,
  Routes,
  useParams,
} from "react-router-dom";

function getListing(id) {
  const listing = mockData.userListings.find((listing) => listing.id === id);
  return listing;
}

function Dashboard(props) {
  const { id } = useParams();
  const post = getListing(id);
  useEffect(() => {
    console.log("Use Effect");
  }, []);
  return (
    <div className="App">
      <Navigation color="dark" dark />
      <h1>Item info will go on this page for item {id}</h1>
      <Container>
        <Row></Row>
      </Container>
    </div>
  );
}

export default Dashboard;
