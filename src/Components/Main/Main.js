import React from "react";
import "./Main.css";
import { Container, Row, Col } from "react-bootstrap";
import Staging from "../Staging/Staging";
import PlayerArea from "../PlayerArea/PlayerArea";

function Main() {
  return (
    <Container fluid>
      <Row>
        <Col lg={6}>
          <Staging />
        </Col>
        <Col lg={6}>
          <PlayerArea />
        </Col>
      </Row>
    </Container>
  );
}

export default Main;
