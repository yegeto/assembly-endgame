import "./Keyboard.css";

export default function Keyboard() {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";

  const keyboardElements = alphabet
    .split("")
    .map((letter) => <button key={letter}>{letter.toUpperCase()}</button>);
  return <section className="keyboard">{keyboardElements}</section>;
}
