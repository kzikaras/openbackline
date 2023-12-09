import React from "react";
import mockData from "../mockData";
import ListingCard from "./ListingCard";
import { Col, Container, Row } from "reactstrap";

const SearchPage = () => {
  const listings = mockData.searchListings;
  console.log(listings);
  return (
    <div className="heroSearch">
      <Container>
        <h1>Some listings to check out!</h1>
        <Row>
          {listings.map((listing) => (
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
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default SearchPage;
