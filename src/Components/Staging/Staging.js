import React, { useEffect, useState } from "react";
import { Container, Row, Col, Dropdown } from "react-bootstrap";
import "./Staging.css";
import ActiveQuest from "../ActiveQuest/ActiveQuest";
import ActiveLocation from "../ActiveLocation/ActiveLocation";
import API from "../../Utils/API";
function Staging() {
  // store list of boxes in state
  const [boxes, setBoxes] = useState([]);
  // set active chosen box in state
  const [chosenBox, setChosenBox] = useState("Select a Box");
  // set active chosen scenario in state
  const [chosenScenario, setChosenScenario] = useState("Select a Scenario");

  //!TODO gotta be a better way to do this
  useEffect(() => {
    async function get() {
      let res = await API.getBoxes();
      let allBoxes = res.data;
      let newBoxes = [];
      console.log("all boxes: " + JSON.stringify(allBoxes));
      newBoxes = allBoxes.map((box) => {
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

  // useEffect(() => {
  //   API.
  // })
  useEffect(() => {
    if (chosenBox !== "Select a Box") {
      async function getEncounters() {
        let res = await API.getEncounters(chosenBox);
        let encounters = res.data;
        console.log('encounters: ' + JSON.stringify(encounters));
        setChosenScenario(encounters[0]);
        console.log('chosenScenario: ' + chosenScenario)
      }
      getEncounters();
    }
  }, [chosenBox]);

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

            <Dropdown.Menu>{}</Dropdown.Menu>
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
    </Container>
  );
}

export default Staging;
