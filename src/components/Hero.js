import React from "react";
import { Container, Row, Col } from "reactstrap";

function Hero(props) {
  return (
    <div className="hero-content">
      <div className="jumbotron col-10 offset-1">
        <Container>
          <Row>
            <Col>
              <h1>Open Backline</h1>
              <h2>Share your gear.</h2>
            </Col>
            <Col>
              <img
                className="thumbImage"
                src={require("../assets/optim_hero.jpg")}
              />
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default Hero;
