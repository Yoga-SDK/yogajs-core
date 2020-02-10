import { toast } from 'react-toastify';
import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import yoga from '@yogajs/core';

const INITIAL_STATE = {
  email: '',
  password: ''
};

const Login = () => {
  const [formData, setFormData] = useState(INITIAL_STATE)
  const [loading, setLoading] = useState(false);

  const handleChange = (field) => {
    return (e) => {
      setFormData({...formData, [field]: e.target.value});
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    yoga.auth().signInWithIdentityAndPassword(formData.email, formData.password)
    .catch(err => {
      toast.error(err, {
        position: toast.POSITION.BOTTOM_CENTER
      });
    })
    .then(() => setLoading(false));
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control onChange={handleChange('email')} type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control onChange={handleChange('password')} type="password" placeholder="Password" />
      </Form.Group>

      <Button disabled={loading} variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default Login;
