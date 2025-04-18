import { useState } from "react";

import "./App.css";
import Header from "./components/Header";
import Status from "./components/Status";
import LanguageChips from "./components/LanguageChips";
import SecretWord from "./components/SecretWord";
import Keyboard from "./components/Keyboard";
import { getRandomWord } from "./components/utils";

function App() {
  const [currentWord, setCurrentWord] = useState(() => getRandomWord());
  const [guessedLetters, setGuessedLetters] = useState([]);
  console.log(currentWord);

  const wrongGuessCount = guessedLetters.filter(
    (letter) => !currentWord.includes(letter)
  ).length;

  const isGameWon = currentWord
    .split("")
    .every((letter) => guessedLetters.includes(letter));
  const isGameOver = wrongGuessCount > 7;
  const isGameEnd = isGameOver || isGameWon;
  const lastGuessedLetter = guessedLetters[guessedLetters.length - 1];
  const isLastGuessIncorrect =
    lastGuessedLetter && !currentWord.includes(lastGuessedLetter);

  function handleGuess(letter) {
    if (!guessedLetters.includes(letter)) {
      setGuessedLetters((prevLetters) => [...prevLetters, letter]);
    }
  }

  function startNewGame() {
    setCurrentWord(getRandomWord());
    setGuessedLetters([]);
  }

  return (
    <main>
      <Header />
      <Status
        userWon={isGameWon}
        userLost={isGameOver}
        wrongGuessCount={wrongGuessCount}
        isLastGuessIncorrect={isLastGuessIncorrect}
      />
      <LanguageChips wrongGuessCount={wrongGuessCount} />
      <SecretWord
        secretWord={currentWord}
        userGuesses={guessedLetters}
        lastGuessedLetter={lastGuessedLetter}
        isGameOver={isGameOver}
      />
      <Keyboard
        onGuess={handleGuess}
        userGuesses={guessedLetters}
        secretWord={currentWord}
        isGameEnd={isGameEnd}
      />
      {isGameEnd ? (
        <button className="new-game" onClick={startNewGame}>
          New Game
        </button>
      ) : null}
    </main>
  );
}

export default App;
