import { useState } from "react";
import styled from "styled-components";

const NumberSelector = ({ error, selectedNumber, setSelectedNumber }) => {
  const arrnumber = [1, 2, 3, 4, 5, 6];
  // const [selectedNumber, setSelectedNumber] = useState();

  //console.log(selectedNumber);

  return (
    <NumberSelectorContainer>
      <p>{error}</p>
      <div className="flex">
        {arrnumber.map((value, i) => (
          <Box
            isSelected={value == selectedNumber}
            key={i}
            onClick={() => setSelectedNumber(value)}
          >
            {value}
          </Box>
        ))}
      </div>
      <p>Select Number</p>
    </NumberSelectorContainer>
  );
};

export default NumberSelector;

const NumberSelectorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;

  .flex {
    display: flex;
    gap: 24px;
  }

  p {
    font-size: 24px;
    font-weight: 700px;
  }
`;

const Box = styled.div`
  height: 72px;
  width: 72px;
  border: 1px solid black;
  display: grid;
  place-items: center;
  font-size: 24px;
  font-weight: 700;
  background-color: ${(props) => (props.isSelected ? "Black" : "White")};
  color: ${(props) => (!props.isSelected ? "Black" : "White")};
`;
