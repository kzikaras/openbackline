import React, { useEffect, useState } from "react";
import Navigation from "./Navigation";
import ListingCard from "./ListingCard";
import { Container, Row, Col, Button } from "reactstrap";
import { useNavigate } from "react-router-dom";
import checkAuth from "../functionLibrary";
import mockData from "../mockData";

function Dashboard(props) {
  const [userListings, setUserListings] = useState(mockData.userListings);
  const navigate = useNavigate();
  console.log(userListings);
  useEffect(() => {
    console.log(props.loggedIn);
  }, []);
  function redirectToAddListing() {
    return navigate("/new_listing");
  }
  // Calculate the number of rows needed to display all listings
  let numRows = Math.floor(userListings.length / 6);
  return (
    <div className="App">
      <Navigation color="dark" dark />
      <Row>
        <Col>
          <Button className="button" onClick={redirectToAddListing}>
            Add new listing
          </Button>
        </Col>
      </Row>
      <h1>Watched items:</h1>
      <Container>
        <Row>
          {userListings.map((listing) => {
            console.log(listing);
            return (
              <Col>
                <ListingCard
                  id={listing.id}
                  image={listing.imageUrl}
                  title={listing.title}
                  description={listing.description}
                  buttonText="Check it out"
                  className="col-2"
                />
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
}

export default Dashboard;
