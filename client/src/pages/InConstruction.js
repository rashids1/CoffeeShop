import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import construction from "../pictures/construction.png";
import { colors } from "./globalStyles";
const { main, third } = colors;
const InConstruction = () => {
  const navigate = useNavigate();
  return (
    <StyledConstruction>
      <div className="construction-image"></div>
      <img src={construction} />
      <h2>Page under construction ...</h2>

      <h5>
        Go back to the{" "}
        <span className="link" onClick={() => navigate("/")}>
          Home page
        </span>
      </h5>
    </StyledConstruction>
  );
};

export default InConstruction;

const StyledConstruction = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${main};
  .link {
    color: blue;
  }
`;
