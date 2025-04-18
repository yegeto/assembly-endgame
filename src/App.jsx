import { useState } from "react";

import "./App.css";
import Header from "./components/Header";
import Status from "./components/Status";
import LanguageChips from "./components/LanguageChips";
import UserGuess from "./components/SecretWord";
import Keyboard from "./components/Keyboard";

function App() {
  const [currentWord, setCurrentWord] = useState("react");
  const [guessedLetters, setGuessedLetters] = useState([]);

  function handleGuess(letter) {
    if (!guessedLetters.includes(letter)) {
      setGuessedLetters((prevLetters) => [...prevLetters, letter]);
    }
  }

  return (
    <main>
      <Header />
      <Status />
      <LanguageChips />
      <UserGuess secretWord={currentWord} userGuesses={guessedLetters} />
      <Keyboard
        onGuess={handleGuess}
        userGuesses={guessedLetters}
        secretWord={currentWord}
      />
      <button className="new-game">New Game</button>
    </main>
  );
}

export default App;
