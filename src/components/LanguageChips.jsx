import { languages } from "./languages";
import "./LanguageChips.css";
import { clsx } from "clsx";

export default function LanguageChips({ wrongGuessCount }) {
  const languageElements = languages.map(
    ({ backgroundColor, color, name }, index) => {
      const styles = {
        backgroundColor: backgroundColor,
        color: color,
      };

      const chipClass = clsx({
        chip: true,
        lost: index < wrongGuessCount,
      });
      return (
        <span className={chipClass} key={name} style={styles}>
          {name}
        </span>
      );
    }
  );

  return <section className="language-chips">{languageElements}</section>;
}
