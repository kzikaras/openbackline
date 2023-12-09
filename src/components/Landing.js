import React from "react";
import Navigation from "./Navigation";
import Hero from "./Hero";
import SearchPage from "./searchPage";
import { Container } from "reactstrap";

function Landing(props) {
  return (
    <div className="App">
      <Navigation color="dark" dark />
      <Container>
        <Hero />
      </Container>
      <SearchPage />
    </div>
  );
}

export default Landing;
