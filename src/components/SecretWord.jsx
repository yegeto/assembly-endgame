import "./SecretWord.css";

export default function SecretWord({ currentWord }) {
  const letterElements = currentWord
    .split("")
    .map((letter, index) => <span key={index}>{letter.toUpperCase()}</span>);
  return <section className="word">{letterElements}</section>;
}
