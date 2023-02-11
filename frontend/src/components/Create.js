import React, { useState, useRef } from "react";
import axios from "axios";
import bcrypt from "bcryptjs";
import { Form, Button, Container, Row, Col } from "react-bootstrap";

const Create = () => {
  const [user, setUser] = useState({
    firstname: "",
    lastname: "",
    phone: "",
  });
  const emailRef = useRef();
  const passwordRef = useRef();

  const handleChange = (e) => {
    setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const BASE_URL = "https://capstone-4koe.onrender.com/home";

  const handleClick = async (e) => {
    e.preventDefault();
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(passwordRef.current.value, salt);
    const newUser = {
      firstname: user.firstname,
      lastname: user.lastname,
      email: emailRef.current.value,
      phone: user.phone,
      password: hash,
    };

    try {
      const res = await axios.post(`${BASE_URL}/register/tutor`, newUser);
      console.log("Success");
      console.log(res.data);
    } catch (error) {
      console.error("Error Occured");
      console.error(error.message);
      console.error(error.response);
    }
  };

  return (
    <Container style={{ marginTop: "100px" }}>
      <Row className="justify-content-md-center">
        <Col xs={12} md={8}>
          <Form
            style={{
              padding: "3rem",
              backgroundColor: "#f7f7f7",
              borderRadius: "10px",
            }}
          >
            <h1 className="text-center" style={{ marginBottom: "1rem", textAlign:"center" }}>
              Sign Up
            </h1>
            <Form.Group controlId="formFirstName">
              <Form.Label style={{ fontWeight: "bold" }}>First Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter First Name"
                onChange={handleChange}
                name="firstname"
                required
                style={{
                  marginBottom: "1rem",
                  marginLeft: "4%",
                  padding: "0.5rem",
                  borderRadius: "10px",
                }}
              />
            </Form.Group>
            <Form.Group controlId="formLastName">
              <Form.Label style={{ fontWeight: "bold" }}>Last Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Last Name"
                onChange={handleChange}
                name="lastname"
                required
                style={{
                  marginBottom: "1rem",
                  marginLeft: "4%",
                  padding: "0.5rem",
                  borderRadius: "10px",
                }}
              />
            </Form.Group>
            <Form.Group controlId="formEmail">
              <Form.Label style={{ fontWeight: "bold" }}>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter Email"
                ref={emailRef}
                name="email"
                required
                style={{
                  marginBottom: "1rem",
                  marginLeft: "17%",
                  padding: "0.5rem",
                  borderRadius: "10px",
                }}
              />
            </Form.Group>
            <Form.Group controlId="formPhone">
              <Form.Label style={{ fontWeight: "bold" }}>Phone</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter Phone"
                onChange={handleChange}
                name="phone"
                style={{
                  marginBottom: "1rem",
                  padding: "0.5rem",
                  marginLeft: "15%",
                  borderRadius: "10px",
                }}
              />
            </Form.Group>
            <Form.Group controlId="formPassword">
              <Form.Label style={{ fontWeight: "bold" }}>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter Password"
                ref={passwordRef}
                name="password"
                style={{
                  marginBottom: "1rem",
                  marginLeft: "6%",
                  padding: "0.5rem",
                  borderRadius: "10px",
                }}
              />
            </Form.Group>
            <Button
              variant="primary"
              type="submit"
              style={{
                marginTop: "2rem",
                width: "100%",
                backgroundColor: "#4285f4",
                border: "none",
                padding: "1rem",
                borderRadius: "4px",
                fontWeight: "bold",
              }}
              onClick={handleClick}
            >
              Add
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Create;
