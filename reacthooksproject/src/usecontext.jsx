import React, { useContext, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Login.css";
import { SessionContext } from "./App";
import { useHistory } from "react-router";

const UseContext = ()=>{
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const {loggedin,increment,setUserName} = useContext(SessionContext)
    const history = useHistory();
  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
    increment(true);
    setUserName(email);
    history.push('/login')

  }

  return (
    <div className="Login">
        {console.log(loggedin)}
        <h1>{loggedin==true?"User Logged in":"user is not logged in. Ps login once again"}</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group size="lg" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            autoFocus
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Button block size="lg" type="submit" disabled={!validateForm()}>
          Login
        </Button>
      </Form>
      
    </div>
  );
}
export default UseContext