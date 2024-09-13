import React, { useState } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import Navigation from "./Navigation";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [username, setUsername] = useState("");

  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleZipcodeChange = (e) => {
    setZipcode(e.target.value);
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform sign-up logic here
    console.log("Email:", email);
    console.log("Password:", password);
    axios
      .post("http://127.0.0.1:5000/signup", {
        email: email,
        password: password,
        zipcode: zipcode,
        username: username,
      })
      .then((response) => {
        console.log(response);
        // nav to login page
        if (response.status === 201) {
          return navigate("/login");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <Navigation color="dark" dark />
      <div className="container">
        <div className="row">
          <div className="col-4"></div>
          <Form className="col-4 mt-5" onSubmit={handleSubmit}>
            <FormGroup>
              <Label for="email">Email:</Label>
              <Input
                type="email"
                id="email"
                value={email}
                onChange={handleEmailChange}
              />
            </FormGroup>
            <FormGroup>
              <Label for="username">Username:</Label>
              <Input
                type="text"
                id="username"
                value={username}
                onChange={handleUsernameChange}
              />
            </FormGroup>
            <FormGroup>
              <Label for="password">Password:</Label>
              <Input
                type="password"
                id="password"
                value={password}
                onChange={handlePasswordChange}
              />
            </FormGroup>
            <FormGroup>
              <Label for="zipcode">zipcode:</Label>
              <Input
                type="text"
                id="zipcode"
                value={zipcode}
                onChange={handleZipcodeChange}
              />
            </FormGroup>
            <Button type="submit">Sign Up</Button>
          </Form>
          <div className="col-4"></div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
