import "./UserGuess.css";

export default function UserGuess({ currentWord }) {
  const letterElements = currentWord
    .split("")
    .map((letter, index) => <span key={index}>{letter.toUpperCase()}</span>);
  return <section className="guess">{letterElements}</section>;
}
