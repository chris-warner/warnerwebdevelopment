import React from "react";
import { Navbar, Nav, Container, Alert } from "react-bootstrap";
import "./StatusComponent.css";

function StatusComponent() {
  return (
    <div>
        <Alert variant="success">
  <Alert.Heading className="alert"> <strong>Status:</strong> Accepting new and existing business.</Alert.Heading>
</Alert>
    </div>
  );
}

export default StatusComponent;
