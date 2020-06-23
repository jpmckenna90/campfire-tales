import React, { useEffect, useState } from "react";
import { Container, Row, Col, Dropdown } from "react-bootstrap";
import "./Staging.css";
import ActiveQuest from "../ActiveQuest/ActiveQuest";
import ActiveLocation from "../ActiveLocation/ActiveLocation";
import API from "../../Utils/API";
function Staging() {
  const [boxes, setBoxes] = useState([]);

  // setBoxes(['1', '2', '3']);

  useEffect(() => {
    async function get() {
      let res = await API.getBoxes();
      let allBoxes = res.data;
      console.log("allBoxes: " + JSON.stringify(allBoxes));
      let newBoxes = allBoxes.map((box) => {
        return <Dropdown.Item>{box.name}</Dropdown.Item>;
      });
      setBoxes(newBoxes);
    }
    get();
  }, []);

  // useEffect(() => {
  //     const boxes = await boxResponse.data.map((box) => {
  //       return box.name;
  //     });
  //     console.log("boxes: " + boxes);
  //     setBoxes(boxes);

  //   getBoxes();
  // }, []);

  // function to populate dropdown
  async function buildMenu() {
    // if (boxes.length > 0) {
    //   console.log('boxes > 0 . here they are: ' + boxes)
    //   console.log('typeof boxes: ' + typeof boxes)
    //   console.log('typeof boxes[0]: ' + typeof boxes[0])
    //   let renderItems = boxes.map((box) => {
    //     return box
    //   });
    //   return renderItems.map(box => {
    //     return <Dropdown.Item>{box}</Dropdown.Item>
    //   })
    // } else {
    //   console.log('boxes < 0')
    // }
    console.log(JSON.stringify(boxes));
    // boxes.map((box) => {
    //   return <Dropdown.Item>{box}</Dropdown.Item>;
    // });
    // console.log("newArr in build function: " + newArr);
  }

  return (
    <Container fluid>
      <Row>
        <Col lg={12}>
          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              Dropdown Button
            </Dropdown.Toggle>

            <Dropdown.Menu>
              {boxes}
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
