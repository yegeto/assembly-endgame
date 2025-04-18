import { clsx } from "clsx";
import "./Status.css";

export default function Status({ userLost, userWon }) {
  const gameStatusClass = clsx("game-status", {
    won: userWon,
    lost: userLost,
  });

  function renderGameStatus() {
    if (userLost) {
      return (
        <>
          <h2>Game over!</h2>
          <p>You lose! Better start learning Assembly 😭</p>
        </>
      );
    } else if (userWon) {
      return (
        <>
          <h2>You win!</h2>
          <p>Well done! 🎉</p>
        </>
      );
    } else {
      return null;
    }
  }

  return <section className={gameStatusClass}>{renderGameStatus()}</section>;
}
