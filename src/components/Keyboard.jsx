import { clsx } from "clsx";

import "./Keyboard.css";

export default function Keyboard({
  onGuess,
  userGuesses,
  secretWord,
  isGameEnd,
}) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";

  const keyboardElements = alphabet.split("").map((letter) => {
    const isGuessed = userGuesses.includes(letter);
    const isCorrect = isGuessed && secretWord.includes(letter);
    const isWrong = isGuessed && !secretWord.includes(letter);
    const keyClass = clsx({
      correct: isCorrect,
      wrong: isWrong,
    });

    return (
      <button
        className={keyClass}
        onClick={() => onGuess(letter)}
        key={letter}
        disabled={isGameEnd}
      >
        {letter.toUpperCase()}
      </button>
    );
  });
  return <section className="keyboard">{keyboardElements}</section>;
}
