import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Staging.css";
import ActiveQuest from "../ActiveQuest/ActiveQuest";
import ActiveLocation from "../ActiveLocation/ActiveLocation";
function Staging() {
  return (
    <Container fluid>
      <Row>
        <Col lg={12}>
          <h1>We staging</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <ActiveQuest />
        </Col>
        <Col>
          <ActiveLocation />
        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
}

export default Staging;
