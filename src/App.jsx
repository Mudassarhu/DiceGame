import styled from "styled-components";
import StartGame from "./Components/StartGame";
import { useState } from "react";
import GamePlay from "./Components/GamePlay";
import TotalScore from "./Components/TotalScore";

<TotalScore />;

function App() {
  const [isGameStarted, setIsGameStarted] = useState(false);

  const toggleGamePlay = () => {
    setIsGameStarted((prev) => !prev);
  };

  return (
    <>{isGameStarted ? <GamePlay /> : <StartGame toogle={toggleGamePlay} />}</>
  );
}

export default App;
