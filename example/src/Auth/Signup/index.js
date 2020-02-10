import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { toast } from 'react-toastify';
import yoga from '@yogajs/core';

const INITIAL_STATE = {
  name: '',
  email: '',
  password: ''
}

const Signup = () => {
  const [formData, setFormData] = useState(INITIAL_STATE);
  const [loading, setLoading] = useState(false);

  const handleChange = (field) => {
    return (e) => {
      setFormData({...formData, [field]: e.target.value});
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await yoga.auth().createUser({...formData})
    } catch (e) {
      console.log(e);
      toast.error(e, {
        position: toast.POSITION.BOTTOM_CENTER
      });
    } finally {
      setLoading(false);
    } 
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control onChange={handleChange('name')} type="text" placeholder="Enter your name" />
      </Form.Group>

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
  )
}

export default Signup;
