import React, { useState } from 'react';
import { Container, Row, Col, Card, Tabs, Tab } from 'react-bootstrap';
import Signup from './Auth/Signup';
import Login from './Auth/Login';
import { ToastContainer, toast } from 'react-toastify';
import yoga from '@yogajs/core';

yoga.initializeApp({
  appUrl: 'http://localhost:8000/yoga'
})

yoga.auth().onAuthStateChanged( user => {
  if (user) {
    toast.success(`Seja bem-vindo, ${user.name}`, {
      position: toast.POSITION.BOTTOM_CENTER
    });
  }
});

const App = () => {
  const [key, setKey] = useState('login');

  return (
    <>
      <ToastContainer />
      <Container>
        <Row>
          <Col>
            <Card>
              <Card.Body>
                <Tabs activeKey={key} onSelect={k => setKey(k)}>
                  <Tab className="pt-5" eventKey="login" title="Login">
                    <Login />
                  </Tab>
                  <Tab className="pt-5" eventKey="signup" title="Signup">
                    <Signup />
                  </Tab>
                </Tabs>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
