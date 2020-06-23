import React from "react";
import { Container, Row, Col, Dropdown } from "react-bootstrap";
import "./Staging.css";
import ActiveQuest from "../ActiveQuest/ActiveQuest";
import ActiveLocation from "../ActiveLocation/ActiveLocation";
import API from "../../Utils/API";
function Staging() {
  const scenarios = ["one", "two", "three"];

  // function to populate dropdown
  const getBoxes = () => {
    API.getBoxes()
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  };

  const dropdown = () => {
    getBoxes();
    // get array of all scenarios, map over it to create dropdown items
    return scenarios.map((scenario) => {
      return <Dropdown.Item>{scenario}</Dropdown.Item>;
    });
    // return items;
  };

  return (
    <Container fluid>
      <Row>
        <Col lg={12}>
          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              Dropdown Button
            </Dropdown.Toggle>

            <Dropdown.Menu>
              {dropdown()}
              {/* <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item> */}
            </Dropdown.Menu>
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
