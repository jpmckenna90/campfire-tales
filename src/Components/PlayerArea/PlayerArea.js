import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./PlayerArea.css";
import PlayerCard from "../PlayerCard/PlayerCard";

function PlayerArea() {
  return (
    <Container fluid>
      <Row>
        <Col lg={12}>
          <h1>We playin</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <PlayerCard />
        </Col>
        <Col>
          <PlayerCard />
        </Col>
      </Row>
      <Row>
        <Col>
          <PlayerCard />
        </Col>
        <Col>
          <PlayerCard />
        </Col>
      </Row>
    </Container>
  );
}

export default PlayerArea;
