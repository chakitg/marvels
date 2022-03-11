import React, { useState } from "react";
import "./ItemCard.css";
import { Card, Button, Modal } from "react-bootstrap";
import Progress from "./Progress";

const ItemCard = (props) => {
  const { data } = props;
  console.log(data);
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  return (
    <>
      <div className="card-container">
        <Card className="item-card">
          <Card.Img className="image" variant="top" src={data.image.url} />
          <Card.Body className="card-body">
            <Card.Title className="title">{data.name}</Card.Title>

            <Button variant="dark" onClick={handleShow}>
              See my powers
            </Button>
          </Card.Body>
        </Card>
      </div>
      <Modal show={showModal} onHide={handleClose}>
        <div className="popup">
          <Modal.Header closeButton>
            <Modal.Title className="popup-main">{data.name}</Modal.Title>
          </Modal.Header>

          <div className="stats">
            <Modal.Body>
              <img src={data.image.url} alt="popup" class="popup-image"></img>
              <div className="description">
                <Modal.Title className="description-title">
                  Description
                </Modal.Title>
                <Modal.Title className="bio">ID:</Modal.Title>
                <Modal.Body>{data.id}</Modal.Body>
                <Modal.Title className="bio">Full Name:</Modal.Title>
                <Modal.Body>{data.biography["full-name"]}</Modal.Body>
                <Modal.Title className="bio">Publisher:</Modal.Title>
                <Modal.Body>{data.biography["publisher"]}</Modal.Body>
                <Modal.Title className="bio">First Appearance:</Modal.Title>
                <Modal.Body>{data.biography["first-appearance"]}</Modal.Body>
              </div>
            </Modal.Body>
            <div className="statistics">
              <Modal.Body>
                <Modal.Title className="titles">Strength:</Modal.Title>
                <Progress done={data.powerstats.strength}></Progress>
              </Modal.Body>
              <Modal.Body>
                <Modal.Title className="titles">Durability:</Modal.Title>
                <Progress done={data.powerstats.durability}></Progress>
              </Modal.Body>
              <Modal.Body>
                <Modal.Title className="titles">Combat:</Modal.Title>
                <Progress done={data.powerstats.combat}></Progress>
              </Modal.Body>
              <Modal.Body>
                <Modal.Title className="titles">Intelligence:</Modal.Title>

                <Progress done={data.powerstats.intelligence}></Progress>
              </Modal.Body>
              <Modal.Body>
                <Modal.Title className="titles">Power:</Modal.Title>

                <Progress done={data.powerstats.power}></Progress>
              </Modal.Body>
              <Modal.Body>
                <Modal.Title className="titles">Speed:</Modal.Title>

                <Progress done={data.powerstats.speed}></Progress>
              </Modal.Body>
            </div>
          </div>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </div>
      </Modal>
    </>
  );
};

export default ItemCard;
