import styled from "styled-components";
import { colors } from "../globalStyles";

const { second } = colors;
const Drawer = ({ visibleDrawer, setVisibleDrawer }) => {
  console.log("visibleDrawer", visibleDrawer);
  return (
    <StyledDrawer className="Drawer">
      <p>hi im drawer</p>
    </StyledDrawer>
  );
};
export default Drawer;

const StyledDrawer = styled.div`
  height: 100vh;
  width: 90%;
  background-color: ${second};
  opacity: 100%;
  position: fixed;
  top: 66px;
  z-index: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
