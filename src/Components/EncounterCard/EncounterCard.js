import React from "react";
import { Card, Row, Col, Image } from "react-bootstrap";
import "./EncounterCard.css";

function EncounterCard(props) {
  const dragStart = (e) => {
    const target = e.target;
    e.dataTransfer.setData("card_id", target.id);

    setTimeout(() => {
      target.style.display = "none";
    }, 0);
  };

  const dragOver = (e) => {
    e.stopPropagation();
  };

  return (
    // <Card>
    //   <Row>
    <>
      {/* <div
        id={props.id}
        onDragStart={dragStart}
        onDragOver={dragOver}
        draggable={props.draggable}
      >
        {props.children}
      </div> */}
      {/* <h1>{props.text}</h1> */}
      <Image
        src={props.image}
        className={props.className}
        id={props.id}
        onDragStart={dragStart}
        onDragOver={dragOver}
        draggable={props.draggable}
      ></Image>
    </>
    //   </Row>
    // </Card>
  );
}

export default EncounterCard;
