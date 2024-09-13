import React, { useState } from "react";
import { Form, FormGroup, Label, Input, Button, Container } from "reactstrap";
import Navigation from "./Navigation";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AddListing = (props) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // validate data was entered
    if (!title || !description || !price) {
      return alert("Please enter all required fields");
    }
    console.log("Form submitted:", { title, description, price });
    const { customer_id } = localStorage.getItem("open-backline-customer_id");
    const form_data = { title, description, price, customer_id };
    axios
      .post(
        "http://127.0.0.1:5000/customer/add_listing",
        {
          input_data: form_data,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem(
              "open-backline-token"
            )}`,
          },
        }
      )
      .then((response) => {
        console.log(response.data);

        //redirect user to dashboard page once the it's a success
        if (response.status === 201) {
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
          alert("An error occured");
        }
      });
  };

  return (
    <div className="App">
      <Navigation color="dark" dark />
      <Container className="mt-4">
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <Label for="title">Title</Label>
            <Input
              type="text"
              name="title"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Label for="description">Description</Label>
            <Input
              type="textarea"
              name="description"
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Label for="price">Price</Label>
            <Input
              type="number"
              name="price"
              id="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </FormGroup>
          <Button type="submit">Submit</Button>
        </Form>
      </Container>
    </div>
  );
};

export default AddListing;
