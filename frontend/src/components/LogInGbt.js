import React, { useRef } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import "./Login.css";
import bcrypt from "bcryptjs";

const LogInGbt = () => {
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const history = useNavigate();
  const dispatch = useDispatch();

  const setUserData = (user) => ({
    type: "SET_USER_DATA",
    payload: user,
  });

  const BASE_URL = "https://capstone-4koe.onrender.com/home";

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = emailInputRef.current.value;
    const password = passwordInputRef.current.value;

    try {
      const res = await axios.post(`${BASE_URL}/login/tutor`, {
        email: email,
        password: password,
      });
      const { token, user } = res.data;
      localStorage.setItem("XSRF-TOKEN", token);
      dispatch(setUserData(user));
      history.push("/landing");
    } catch (err) {
      console.error({err: err.response.data});
    }
  };

  return (
    <Container fluid className="login-container">
      <Row className="justify-content-center">
        <Col md={4} className="my-auto">
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                ref={emailInputRef}
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                ref={passwordInputRef}
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default LogInGbt;
