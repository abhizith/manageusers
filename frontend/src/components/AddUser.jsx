import React, { useRef } from "react";
import axios from "axios";
import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export function AddUser() {
  const navigate = useNavigate();
  const firstname = useRef(null);
  const lastname = useRef(null);
  const email = useRef(null);
  const saveUser = async (e) => {
    e.preventDefault();
    const data = JSON.stringify({
      firstname: firstname.current.value,
      lastname: lastname.current.value,
      email: email.current.value,
    });
    try {
      await axios.post("http://localhost:5000/users", data, {
        headers: { "Content-Type": "application/json" },
      });
      alert("User Added");
      navigate("/");
    } catch (error) {
      alert(error);
    }
  };
  return (
    <div className="container">
      <h3>Add User</h3>
      <Form onSubmit={saveUser}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>First Name</Form.Label>
          <Form.Control
            required
            type="text"
            maxlength="100"
            placeholder="First Name"
            ref={firstname}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            required
            type="text"
            maxlength="100"
            placeholder="Last Name"
            ref={lastname}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            required
            type="email"
            placeholder="Enter email"
            ref={email}
          />
        </Form.Group>
        <Link to="/">
          <Button variant="secondary">Back</Button>
        </Link>{" "}
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}
