import { clsx } from "clsx";
import "./Status.css";

export default function Status({ userLost, userWon }) {
  const gameStatusClass = clsx("game-status", {
    won: userWon,
    lost: userLost,
  });

  return (
    <section className={gameStatusClass}>
      {userWon ? (
        <>
          <h2>You win!</h2>
          <p>Well done! 🎉</p>
        </>
      ) : userLost ? (
        <>
          <h2>Game over!</h2>
          <p>You lose! Better start learning Assembly 😭</p>
        </>
      ) : null}
    </section>
  );
}
