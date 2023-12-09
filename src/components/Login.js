import React from "react";
import Navigation from "./Navigation";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Login(props) {
  const navigate = useNavigate();
  let loginUser = (e) => {
    e.preventDefault();

    let loginPayload = {
      email: e.target.email.value,
      password: e.target.password.value,
    };
    const propsToPass = { loggedIn: true };
    return navigate("/dashboard", { state: propsToPass });
    // comment out until backend is more developed
    // axios
    //   .post("http://127.0.0.1:5000/login", loginPayload)
    //   .then((response) => {
    //     //get token from response
    //     const token = response.data.access_token;

    //     //set JWT token to local
    //     localStorage.setItem("open-backline-token", token);

    //     //set token to axios common header
    //     // setAuthToken(token);
    //     const propsToPass = { loggedIn: true };
    //     //redirect user to dashboard page
    //     if (response.status === 200) {
    //       // return and navigate to the dashboard route with props

    //       return navigate("/dashboard", { state: propsToPass });
    //     }
    //   })
    //   .catch((err) => {
    //     if (err.response.status === 401) {
    //       alert("Login failed. Please enter correct username and password");
    //     }
    //   });
  };
  return (
    <div className="login">
      <Navigation color="dark" dark />
      <div className="container">
        <div className="row">
          <div className="col-4"></div>
          <div className="col-4">
            <Form className="container mt-5" onSubmit={loginUser}>
              <FormGroup>
                <Label for="exampleEmail">Email</Label>
                <Input
                  id="exampleEmail"
                  name="email"
                  placeholder="with a placeholder"
                  type="email"
                />
              </FormGroup>
              <FormGroup>
                <Label for="examplePassword">Password</Label>
                <Input
                  id="examplePassword"
                  name="password"
                  placeholder="password placeholder"
                  type="password"
                />
              </FormGroup>
              <Button>Submit</Button>
            </Form>
          </div>
          <div className="col-4"></div>
        </div>
      </div>
    </div>
  );
}

export default Login;
