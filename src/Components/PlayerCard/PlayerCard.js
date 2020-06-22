import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./PlayerCard.css";

function PlayerCard() {
  return (
    <>
      <Container>
        <Row>
          <Col>
            <Card>
              <Row>
                <Col>Hero 1</Col>
                <Col>Hero 2</Col>
                <Col>Hero 3</Col>
              </Row>
              <h2>Lots of stuff here</h2>
              <p>And then some more here</p>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default PlayerCard;
