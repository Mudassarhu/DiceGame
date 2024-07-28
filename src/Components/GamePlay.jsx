import React from "react";
import TotalScore from "./TotalScore";
import NumberSelector from "./NumberSelector";
import styled from "styled-components";
import RoleDice from "./RoleDice";
import { useState } from "react";

const GamePlay = () => {
  const [score, setscore] = useState(0);
  const [selectedNumber, setSelectedNumber] = useState();
  const [currentDice, setCurrentDice] = useState(1);
  const [error, setError] = useState("");

  const generateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  const roleDice = () => {
    if (!selectedNumber) {
      setError("Please Select the Number");
      return;
    }

    const randomNumber = generateRandomNumber(1, 7);
    setCurrentDice((prev) => randomNumber);

    if (selectedNumber == randomNumber) {
      setscore((prev) => prev + randomNumber);
    } else setscore((prev) => prev - 2);

    setSelectedNumber(undefined);
  };

  const resetScore = () => {
    setscore(0);
  };

  return (
    <MainContainer>
      <div className="top_section">
        <TotalScore score={score} />
        <NumberSelector
          error={error}
          setError={setError}
          selectedNumber={selectedNumber}
          setSelectedNumber={setSelectedNumber}
        />
      </div>
      <RoleDice currentDice={currentDice} roleDice={roleDice} />
      <button className="btns" onClick={resetScore}>
        Reset
      </button>
    </MainContainer>
  );
};

export default GamePlay;

const MainContainer = styled.main`
  padding-top: 70px;
  display: flex;
  flex-direction: column;
  align-items: center;

  .btns {
    width: 220px;
    height: 40px;
    cursor: pointer;
    font-size: 16px;
    background-color: #f0f0f0;
    border: 1px solid #989696;
    border-radius: 5px;
    margin-top: 10px;
    transition: background-color 0.3s;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 0;
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;

    &:hover {
      background-color: #e0e0e0;
    }
  }
`;
