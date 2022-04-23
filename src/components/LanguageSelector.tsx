import React from "react";
import styles from "./LanguageSelector.module.css";

type Props = {
  lang: string;
  onChange(lang: string): void;
};

export function LanguageSelector({ lang, onChange }: Props) {
  return (
    <ul className={styles.language_list}>
      <li>
        <button
          onClick={() => onChange("en-GB")}
          data-active={["en-GB", "en"].includes(lang)}
        >
          <span role="img" aria-label="English UK">
            🇬🇧
          </span>
        </button>
      </li>
      <li>
        <button
          onClick={() => onChange("en-US")}
          data-active={lang === "en-US"}
        >
          <span role="img" aria-label="English US">
            🇺🇸
          </span>
        </button>
      </li>
      <li>
        <button
          onClick={() => onChange("ro-RO")}
          data-active={["ro-RO", "ro"].includes(lang)}
        >
          <span role="img" aria-label="Română">
            🇷🇴
          </span>
        </button>
      </li>
    </ul>
  );
}
