import styled from "styled-components";
import logo from "../pictures/logo.png";
import "../App.css";
import { styles, colors } from "./globalStyles.js";
import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import walpaper from "../pictures/walpaper.png";

const { main, second, third, white } = colors;

const Home = () => {
  return (
    <StyledHomePage>
      <div className="navbar">
        <div className="navbar-content">
          {" "}
          <div className="logo">
            {" "}
            <h5>OLD TOWN COFFEE </h5>
            <img
              src={require("../pictures/logo1.svg").default}
              alt="mySvgImage"
              style={{ width: "18%" }}
            />
          </div>
          <h4>
            <FiMenu size={35} />
          </h4>
        </div>
      </div>

      <div className="walpaper">
        <h1 className="title">FRESH LOCAL COFFEE</h1>
        <button>Learn More</button>
      </div>

      <div className="center-section">
        <div>
          <h2>SINCE 1985</h2>
          <p>
            dustry. Lorem Ipsum has been the industry's standard dummy text ever
            since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a s
          </p>
        </div>

        <div className="carousel">carousel slideshow</div>
        <button>SEE ALL OUR DRINKS</button>
      </div>

      <footer>
        <div className="footer-content">
          <div className="footer-block-1">
            <h2>Explore Old Town Coffee</h2>
            <h5>About</h5>
            <h5>Types of Coffee</h5>
            <h5>Visit Us</h5>
          </div>
          <div className="footer-block-2">
            <h2>Get in Touch</h2>
            <h5>FAQ</h5>
            <h5>CONTACT US</h5>
          </div>
        </div>
      </footer>
    </StyledHomePage>
  );
};
export default Home;

const StyledHomePage = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #dfcbbb;
  width: 100%;
  align-items: center;

  .navbar {
    background-color: ${second};
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 10vh;

    .navbar-content {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      width: 90%;
    }
  }
  .logo {
    display: flex;
    flex-direction: row;
    img {
      margin-left: 10px;
      width: 15%;
    }
  }

  .walpaper {
    width: 100%;
    height: 90vh;
    background-image: url(${walpaper});
    background-size: cover;
    background-position: center;
    display: flex;
    flex-direction: column;

    button {
      color: black;
      font-size: 1em;
      width: 40%;
      align-self: center;
      border-radius: 6px;
    }
  }
  .title {
    color: ${main};
    font-size: 5em;
    text-align: left;
  }

  footer {
    background-color: #383838;
    width: 100vw;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
