import styled from "styled-components";

const StartGame = ({ toogle }) => {
  return (
    <Container>
      <div>
        <img src="Images/dices.png" alt="diceimge" />
      </div>
      <div className="content">
        <h1>Dice Game</h1>
        <Button onClick={toogle}>Play Game</Button>
      </div>
    </Container>
  );
};

export default StartGame;

const Container = styled.div`
  max-width: 1180px;
  display: flex;
  height: 100vh;
  margin: 0 auto;
  align-items: center;

  .content h1 {
    font-size: 96px;
    white-space: nowrap;
  }
`;

const Button = styled.button`
  color: white;
  padding: 10px 18px;
  background: black;
  border-radius: 5px;
  min-width: 220px;
  border: none;
  font-size: 16px;
  border: 1px solid black;
  transition: 0.4s background ease-in;
  cursor: pointer;
  margin-left: 312px;

  &:hover {
    background-color: white;
    border: 1px solid black;
    color: black;
    transition: 0.3s background ease-in;
  }
`;
