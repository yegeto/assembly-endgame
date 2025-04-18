import { useState } from "react";

import "./App.css";
import Header from "./components/Header";
import Status from "./components/Status";
import LanguageChips from "./components/LanguageChips";
import UserGuess from "./components/UserGuess";
import Keyboard from "./components/Keyboard";

function App() {
  const [currentWord, setCurrentWord] = useState("react");

  return (
    <main>
      <Header />
      <Status />
      <LanguageChips />
      <UserGuess currentWord={currentWord} />
      <Keyboard />
      <button className="new-game">New Game</button>
    </main>
  );
}

export default App;
