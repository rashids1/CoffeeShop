import styled from "styled-components";
import { FiArrowRight, FiArrowLeft } from "react-icons/fi";
import { useState } from "react";
import cappuccino from "../../pictures/coffeeBrews/Cappuccino.png";
import espresso from "../../pictures/coffeeBrews/espresso.png";
import latte from "../../pictures/coffeeBrews/latte.png";
import mocha from "../../pictures/coffeeBrews/mocha.png";

const Carousel = () => {
  const [imageIndex, setImageIndex] = useState(0);
  const coffeeDrinks = [
    {
      name: "Cappuccino",
      url: `${cappuccino}`,
    },
    {
      name: "Espresso",
      url: `${espresso}`,
    },
    {
      name: "Latte",
      url: `${latte}`,
    },
    {
      name: "Mocha",
      url: `${mocha}`,
    },
  ];
  const swipeRigth = () => {
    if (imageIndex === 3) {
      return setImageIndex(0);
    } else {
      setImageIndex(imageIndex + 1);
    }
  };
  const swipeLeft = () => {
    if (imageIndex === 0) {
      setImageIndex(3);
    } else {
      setImageIndex(imageIndex - 1);
    }
  };

  console.log("imageIndex", imageIndex);

  return (
    <StyledCarouselBox>
      <div>
        <FiArrowLeft
          size={35}
          onClick={swipeLeft}
          style={{ cursor: "pointer" }}
        />
      </div>
      <div className="carousel">
        <div
          style={{
            height: "100%",
            width: "100%",
            backgroundImage: `url(${coffeeDrinks[imageIndex].url})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
        <p>{coffeeDrinks[imageIndex].name}</p>
        <div className="index-dots">
          {coffeeDrinks.map((object, Oindex) => {
            return (
              <span
                className="dot"
                key={Oindex}
                onClick={() => setImageIndex(Oindex)}
              >
                &#9864;
              </span>
            );
          })}
        </div>
      </div>
      <div>
        <FiArrowRight
          size={35}
          onClick={swipeRigth}
          style={{ cursor: "pointer" }}
        />
      </div>
    </StyledCarouselBox>
  );
};
export default Carousel;

const StyledCarouselBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50%;

  .carousel {
    border: 5px solid black;
    width: 80%;
    height: 90%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .dot {
      margin: 5px;
      cursor: pointer;
    }
  }
`;
