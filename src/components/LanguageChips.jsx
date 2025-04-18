import { languages } from "./languages";
import "./LanguageChips.css";

export default function LanguageChips() {
  const languageElements = languages.map(({ backgroundColor, color, name }) => {
    const styles = {
      backgroundColor: backgroundColor,
      color: color,
    };
    return (
      <span className="chip" key={name} style={styles}>
        {name}
      </span>
    );
  });

  return <section className="language-chips">{languageElements}</section>;
}
