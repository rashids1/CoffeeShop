import styled from "styled-components";
import logo from "../pictures/logo.png";
import "../App.css";
import { styles, colors } from "./globalStyles.js";
import { useState } from "react";
import { FiMenu, FiArrowRight, FiArrowLeft, FiX } from "react-icons/fi";
import walpaper from "../pictures/walpaper.png";
import Carousel from "./components/Carousel.js";
import coffeeShop from "../pictures/coffeeShop.jpg";
import Drawer from "./components/Drawer";
import { useNavigate } from "react-router";

//To do
// adjust font of text
//animations
// make it responsive

const { main, second, third, white } = colors;

const Home = () => {
  const navigate = useNavigate();
  const bodyStyle = document.body.style;
  const [visibleDrawer, setVisibleDrawer] = useState(false);
  const hideDrawer = () => {
    setVisibleDrawer(!visibleDrawer);
  };

  visibleDrawer
    ? (bodyStyle.overflowY = "hidden")
    : (bodyStyle.overflowY = "auto");

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
            {visibleDrawer ? (
              <FiX size={35} onClick={hideDrawer} />
            ) : (
              <FiMenu size={35} onClick={hideDrawer} />
            )}
          </h4>
        </div>
      </div>
      {visibleDrawer && (
        <Drawer
          visibleDrawer={visibleDrawer}
          setVisibleDrawer={setVisibleDrawer}
        />
      )}
      <div className="walpaper">
        <h1 className="title">FRESH LOCAL COFFEE</h1>
        <button onClick={() => navigate("/under-construction")}>
          Learn More
        </button>
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
        <Carousel />
        <button>SEE ALL OUR DRINKS</button>
      </div>

      <div className="second-section">
        <h3>VISIT OUR NEW SHOP</h3>
        <div className="picture"></div>
        <h5>369 Skymall Road, Montreal , Qc,H1O 2K6</h5>
        <h5>405-689-9999</h5>
        <button>
          GET DIRECTIONS <span style={{ visibility: "hidden" }}> _</span>
          <FiArrowRight />
        </button>
      </div>

      <footer>
        <div className="footer-content">
          <div className="footer-block-1">
            <h3>Explore Old Town Coffee</h3>
            <h5 onClick={() => navigate("/under-construction")}>About us</h5>
            <h5 onClick={() => navigate("/under-construction")}>
              Types of Coffee
            </h5>
            <h5 onClick={() => navigate("/under-construction")}>Visit Us</h5>
          </div>
          <div className="footer-block-2">
            <h3>Get in Touch</h3>
            <h5 onClick={() => navigate("/under-construction")}>Faq</h5>
            <h5 onClick={() => navigate("/under-construction")}>Contact Us</h5>
          </div>
          <p>
            &#169; Old Town Coffee. All rights reserved Powered by Rashid Design{" "}
          </p>
        </div>
      </footer>
    </StyledHomePage>
  );
};
export default Home;

const StyledHomePage = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${main};
  min-width: 310px;
  width: 100%;
  align-items: center;

  .navbar {
    background-color: ${second};
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 10vh;
    position: sticky;
    top: 0;
    z-index: 3;
    border-bottom: solid 0.1px #bfbfbf;

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
    align-items: center;
    img {
      margin-left: 10px;
      width: 150px;
      max-width: 220px;
      height: auto;
    }
    h5 {
      font-size: 4vw;
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
      width: 40%;
      align-self: center;
      background-color: #fbeee0;
      border: 2px solid #422800;
      border-radius: 30px;
      box-shadow: #ad5c05 0px 0px 0px 1.5px;
      color: #422800;
      cursor: pointer;
      font-weight: 600;
      font-size: 1em;
      padding: 0 18px;
      line-height: 50px;
      text-align: center;
      text-decoration: none;
      user-select: none;
    }
  }

  .title {
    color: ${main};
    font-size: 5em;
    text-align: left;
    margin-left: 10px;
  }

  .center-section {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
    margin: 12px 0px;
    width: 95%;
    background-color: ${second};
    h2 {
      font-size: 2em;
    }
    p {
    }
    button {
      margin-top: 45px;
      padding: 10px;
      font-weight: bold;
    }
  }

  .second-section {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
    margin: 0 0 12px 0;
    width: 95%;
    background-color: ${second};
    h2 {
      font-size: 2em;
    }
    p {
    }
    h5 {
      font-size: 1em;
      margin: 25px 0 0 0;
    }

    button {
      margin-top: 30px;
      padding: 10px;
      font-weight: bold;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
    }

    .picture {
      border: 5px solid black;
      width: 80%;
      height: 50%;
      background-image: url(${coffeeShop});
      background-position: center;
      background-size: cover;
    }
  }

  footer {
    background-color: ${second};
    width: 100vw;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .footer-content {
      width: 85%;
    }
    p {
      margin-top: 60px;
      font-size: 0.65em;
    }

    h5 {
      font-weight: 500;
      font-size: 0.85em;
    }
  }

  //media queries//
  @media screen and (min-width: 450px) {
    .logo h5 {
      font-size: clamp(0.5rem, 4vw, 1.4rem);
    }
  }
`;
