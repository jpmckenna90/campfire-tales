import React, { useEffect, useState } from "react";
import { Container, Row, Col, Dropdown, Card, Image } from "react-bootstrap";
import "./Staging.css";
import ActiveQuest from "../ActiveQuest/ActiveQuest";
import ActiveLocation from "../ActiveLocation/ActiveLocation";
import API from "../../Utils/API";
import EncounterCard from "../EncounterCard/EncounterCard";
import StagingBox from "../StagingBox/StagingBox";

function Staging() {
  // store list of boxes in state
  const [boxes, setBoxes] = useState([]);
  // set active chosen box in state
  const [chosenBox, setChosenBox] = useState("Select a Box");
  // store list of scenarios in state
  const [scenarios, setScenarios] = useState([]);
  // set active chosen scenario in state
  const [chosenScenario, setChosenScenario] = useState("Select a Scenario");
  // set all encounter cards
  const [encounterCards, setEncounterCards] = useState([]);

  //!TODO gotta be a better way to do this
  useEffect(() => {
    async function get() {
      let res = await API.getBoxes();
      let newBoxes = res.data.map((box) => {
        return (
          <Dropdown.Item
            onClick={() => {
              setChosenBox(box);
            }}
          >
            {box}
          </Dropdown.Item>
        );
      });
      setBoxes(newBoxes);
    }
    get();
  }, []);

  useEffect(() => {
    if (chosenBox !== "Select a Box") {
      async function getEncounters() {
        let res = await API.getEncounters(chosenBox);
        let newScenarios = res.data.map((scenario) => {
          return (
            <Dropdown.Item
              onClick={() => {
                setChosenScenario(scenario.name);
              }}
            >
              {scenario.name}
            </Dropdown.Item>
          );
        });
        setScenarios(newScenarios);
      }
      getEncounters();
    }
  }, [chosenBox]);

  useEffect(() => {
    if (chosenScenario !== "Select a Scenario") {
      async function getEncounters() {
        let res = await API.getEncounterCards(chosenScenario);
        console.log("res.data: " + JSON.stringify(res.data));
        // JSON.stringify(res);
        let encounterCards = res.data.map((card) => {
          return (
            <EncounterCard
              name={card.name}
              image={card.image}
              text={card.text}
              className="encounter-card"
              id={card.name}
              draggable="true"
            ></EncounterCard>
          );
        });
        setEncounterCards(encounterCards);
      }
      getEncounters();
    }
  }, [chosenScenario]);

  return (
    <Container fluid>
      <Row>
        <Col lg={6}>
          <Dropdown className="mt-4">
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              {chosenBox}
            </Dropdown.Toggle>
            <Dropdown.Menu>{boxes}</Dropdown.Menu>
          </Dropdown>
        </Col>
        <Col lg={6}>
          <Dropdown className="mt-4">
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              {chosenScenario}
            </Dropdown.Toggle>
            <Dropdown.Menu>{scenarios}</Dropdown.Menu>
          </Dropdown>
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
      <Row className="staging-area">
        <StagingBox id="staging-box" className="staging-box">
          <Col>{encounterCards}</Col>
        </StagingBox>
      </Row>
    </Container>
  );
}

export default Staging;
