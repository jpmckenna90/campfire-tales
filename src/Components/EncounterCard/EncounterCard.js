import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import "./EncounterCard.css";

function EncounterCard(props) {
  return (
    <Card>
      <Row>
        <Col>{props.name}</Col>
      </Row>
    </Card>
  );
}

export default EncounterCard;
