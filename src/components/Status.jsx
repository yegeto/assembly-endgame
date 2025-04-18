import { clsx } from "clsx";
import "./Status.css";
import { getFarewellText } from "./utils";
import { languages } from "./languages";

export default function Status({
  userLost,
  userWon,
  wrongGuessCount,
  isLastGuessIncorrect,
}) {
  const farewellMessage = isLastGuessIncorrect
    ? getFarewellText(languages[wrongGuessCount - 1].name)
    : "";

  const gameStatusClass = clsx("game-status", {
    won: userWon,
    lost: userLost,
    farewell: isLastGuessIncorrect && !userLost,
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
      return <p className="farewell-message">{farewellMessage}</p>;
    }
  }

  return (
    <section aria-live="polite" role="status" className={gameStatusClass}>
      {renderGameStatus()}
    </section>
  );
}
