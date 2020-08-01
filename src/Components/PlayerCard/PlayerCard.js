import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./PlayerCard.css";
import StagingBox from "../StagingBox/StagingBox";

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
              {/* <h2>Lots of stuff here</h2>
              <p>And then some more here</p> */}
              <div id="player-engaged">
                <StagingBox id="engaged-box" className="staging-box" />
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default PlayerCard;
