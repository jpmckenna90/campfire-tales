import React from "react";
import { Card, Row, Col, Image } from "react-bootstrap";
import "./EncounterCard.css";

function EncounterCard(props) {
  return (
    // <Card>
    //   <Row>
    <>
      <h1>{props.text}</h1>
      <Image src={props.image} className="encounter-img"></Image>
    </>
    //   </Row>
    // </Card>
  );
}

export default EncounterCard;
