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

    axios
      .post("http://127.0.0.1:5000/login", loginPayload)
      .then((response) => {
        //get token from response
        const token = response.data.access_token;
        console.log(response.data);
        //set JWT token to local
        localStorage.setItem("open-backline-token", token);
        localStorage.setItem(
          "open-backline-customer_id",
          response.data.customer_id
        );

        //set token to axios common header
        // setAuthToken(token);

        //redirect user to dashboard page
        if (response.status === 200) {
          // return and navigate to the dashboard route with props
          const propsToPass = {
            loggedIn: true,
            customer_id: response.data.customer_id,
          };
          // Need to add customer ID props
          console.log("propsToPass: ", propsToPass);
          navigate("/dashboard", { state: propsToPass });
        }
      })
      .catch((err) => {
        if (err.response.status === 401) {
          alert(
            "Login failed. Please enter correct username and password or sign up"
          );
        }
      });
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
