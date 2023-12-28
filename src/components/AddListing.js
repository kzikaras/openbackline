import React, { useState } from "react";
import { Form, FormGroup, Label, Input, Button, Container } from "reactstrap";
import Navigation from "./Navigation";
import { useNavigate } from "react-router-dom";

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
    return navigate("/dashboard");
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
