import styled from "styled-components";
import { colors } from "../globalStyles";
import background from "../../pictures/background.png";
import { useNavigate } from "react-router";
const { second } = colors;

const Drawer = ({ visibleDrawer, setVisibleDrawer }) => {
  const navigate = useNavigate();
  console.log("visibleDrawer", visibleDrawer);
  return (
    <StyledDrawer className="Drawer">
      <h3 onClick={() => navigate("/under-construction")}>Types of Coffee</h3>
      <h3 onClick={() => navigate("/under-construction")}>Visit Us</h3>
      <h3 onClick={() => navigate("/under-construction")}>About Us</h3>
      <h3 onClick={() => navigate("/under-construction")}>Contact Us</h3>
    </StyledDrawer>
  );
};
export default Drawer;

const StyledDrawer = styled.div`
  height: 100vh;
  width: 100%;
  background-image: url(${background});
  background-size: cover;
  background-position: center;
  opacity: 100%;
  position: fixed;
  top: 66px;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  h3 {
    margin: 48px;
  }
`;
