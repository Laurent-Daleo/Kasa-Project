import React, { useState } from "react";
import "./carousel.scss";
import arrowRigth from "./img/arrow_right.svg";
import arrowLeft from "./img/arrow_left.svg";

const direction = {
  previous: -1,
  next: 1,
};

export default function Carrousel({ pictures }) {
  const [counter, setCounter] = useState(0);

  /**
   * compteur du slide pour le defilement des images
   */
  const onChangeCurrentSlide = (newDirection) => {
    let newCounter = counter;

    if (newDirection === direction.previous) {
      newCounter--;
    }
    if (newDirection === direction.next) {
      newCounter++;
    }

    if (newCounter > pictures.length - 1) {
      newCounter = 0;
    }

    if (newCounter < 0) {
      newCounter = pictures.length - 1;
    }

    setCounter(newCounter);
  };

  return (
    <div className="slider_container">
      <div className="arrow_container">
        <div className="backward">
          <img
            className="arrow_left"
            src={arrowLeft}
            alt="Flèche gauche pour faire défilées les images précédentes"
            onClick={() => onChangeCurrentSlide(direction.previous)}
          ></img>
        </div>
        <div className="foward">
          <img
            src={arrowRigth}
            alt="Flèche droite pour faire défilées les images suivantes"
            className="arrow_rigth"
            onClick={() => onChangeCurrentSlide(direction.next)}
          ></img>
        </div>
      </div>
      {pictures.map((picture, index) => (
        <div className="slider_img" key={index}>
          {counter === index && <img src={picture} alt="coucou" />}
        </div>
      ))}

      <div className="counter_slides">
        {counter + 1}/{pictures.length}{" "}
      </div>
    </div>
  );
}
