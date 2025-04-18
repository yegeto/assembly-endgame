import "./SecretWord.css";

export default function SecretWord({
  secretWord,
  userGuesses,
  lastGuessedLetter,
  isGameOver,
}) {
  const letterElements = secretWord.split("").map((letter, index) => {
    const isGuessesIncludesLetter = userGuesses.includes(letter);
    const shouldRevealLetter = isGameOver || isGuessesIncludesLetter;
    const revealedLetterClass =
      isGameOver && !isGuessesIncludesLetter ? "missed-letter" : null;
    return (
      <span key={index} className={revealedLetterClass}>
        {shouldRevealLetter ? letter.toUpperCase() : ""}
      </span>
    );
  });

  return (
    <>
      <section className="word">{letterElements}</section>

      {/* Combined visually-hidden aria-live region for status updates */}
      <section className="sr-only" aria-live="polite" role="status">
        <p>
          {lastGuessedLetter
            ? secretWord.includes(lastGuessedLetter)
              ? `Correct! The letter ${lastGuessedLetter} is in the word.`
              : `Sorry, the letter ${lastGuessedLetter} is not in the word.`
            : "Start guessing letters!"}
        </p>
        <p>
          Current word:{" "}
          {secretWord
            .split("")
            .map((letter) =>
              userGuesses.includes(letter) ? `${letter}.` : "blank."
            )
            .join(" ")}
        </p>
      </section>
    </>
  );
}
