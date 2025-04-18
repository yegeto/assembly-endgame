import "./Keyboard.css";

export default function Keyboard({ onGuess }) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";

  const keyboardElements = alphabet.split("").map((letter) => (
    <button onClick={() => onGuess(letter)} key={letter}>
      {letter.toUpperCase()}
    </button>
  ));
  return <section className="keyboard">{keyboardElements}</section>;
}
