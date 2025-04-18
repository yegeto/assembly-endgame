import "./SecretWord.css";

export default function SecretWord({ secretWord, userGuesses }) {
  const letterElements = secretWord
    .split("")
    .map((letter, index) => (
      <span key={index}>
        {userGuesses.includes(letter) ? letter.toUpperCase() : ""}
      </span>
    ));
  return <section className="word">{letterElements}</section>;
}
