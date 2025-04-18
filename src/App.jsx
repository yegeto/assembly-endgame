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

  const wrongGuessCount = guessedLetters.filter(
    (letter) => !currentWord.includes(letter)
  ).length;

  const isGameWon = currentWord
    .split("")
    .every((letter) => guessedLetters.includes(letter));
  const isGameOver = wrongGuessCount > 7;
  const isGameEnd = isGameOver || isGameWon;

  function handleGuess(letter) {
    if (!guessedLetters.includes(letter)) {
      setGuessedLetters((prevLetters) => [...prevLetters, letter]);
    }
  }

  return (
    <main>
      <Header />
      <Status />
      <LanguageChips wrongGuessCount={wrongGuessCount} />
      <UserGuess secretWord={currentWord} userGuesses={guessedLetters} />
      <Keyboard
        onGuess={handleGuess}
        userGuesses={guessedLetters}
        secretWord={currentWord}
      />
      {isGameEnd ? <button className="new-game">New Game</button> : null}
    </main>
  );
}

export default App;
