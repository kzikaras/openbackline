import React, { useEffect, useState } from "react";
import Navigation from "./Navigation";
import ListingCard from "./ListingCard";
import { Container, Row, Col, Button } from "reactstrap";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

function Dashboard(props) {
  console.log("props in Dashboard", props);
  const [userListings, setUserListings] = useState([]);
  const { state } = useLocation();
  // const { customer_id } = localStorage.getItem("open-backline-customer_id");
  const navigate = useNavigate();
  console.log(userListings);
  useEffect(() => {
    console.log("props in Dash useeffect", props);
    axios
      .get(`http://127.0.0.1:5000/customer/get_listings`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem(
            "open-backline-token"
          )}`,
        },
      })
      .then((response) => {
        setUserListings(response.data.listings);
      })
      .catch((err) => {
        console.log(err);
        return navigate("/login");
      });
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
      <h1>Your listings:</h1>
      <Container>
        <Row>
          {userListings.map((listing) => {
            console.log(listing);
            return (
              <Col>
                <ListingCard
                  key={listing.id}
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
