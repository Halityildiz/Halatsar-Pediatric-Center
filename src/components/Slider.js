import React from "react";
import { Carousel } from "react-bootstrap";
import dogum from "../img/2.jpg";
import doktor from "../img/6.jpg";
import psiko from "../img/psiko2.jpg";
import cocuk from "../img/ortopedi.jpg";
import hasta from "../img/hasta2.jpg";

const Slider = () => {
  return (
    <div
      style={{
        borderBottom: "5px solid #a2c6fd",
      }}
    >
      <Carousel fade autoPlay={true} interval={2000}>
        <Carousel.Item>
          <img className="d-block w-100" src={dogum} alt="First slide" />
          <Carousel.Caption>
            <h1
              style={{ fontSize: "48px", paddingBottom: "64px", color: "red" }}
            >
              Working With Small Miracles Everyday{" "}
            </h1>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100 h-25" src={hasta} alt="Third slide" />
          <Carousel.Caption>
            <h1
              style={{ fontSize: "48px", paddingBottom: "64px", color: "red" }}
            >
              Heal a child, change the world{" "}
            </h1>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100 h-25" src={psiko} alt="Third slide" />
          <Carousel.Caption>
            <h1
              style={{ fontSize: "48px", paddingBottom: "64px", color: "red" }}
            >
              Healthy child makes healthy Nation{" "}
            </h1>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100 h-25" src={cocuk} alt="Third slide" />
          <Carousel.Caption>
            <h1
              style={{ fontSize: "48px", paddingBottom: "64px", color: "red" }}
            >
              Ensuring emergency care for all children{" "}
            </h1>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100 h-25" src={doktor} alt="Second slide" />
          <Carousel.Caption>
            <h1
              style={{ fontSize: "48px", paddingBottom: "64px", color: "red" }}
            >
              A whole new way to treat your child
            </h1>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Slider;
