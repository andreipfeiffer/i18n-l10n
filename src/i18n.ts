import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them)
const resources = {
  en: {
    translation: {
      hello: "Hello everybody",
      red: "red",
      color_apple: "{{color}} apple",
      fruit_one: "{{count}} fruit",
      fruit_other: "{{count}} fruits",
    },
  },
  "en-US": {
    translation: {
      hello: "Howdy!",
    },
  },
  ro: {
    translation: {
      hello: "Salutare tuturor",
      red: "roșu",
      color_apple: "mar {{color}}",
      fruit_one: "fruct",
      fruit_few: "fructe",
      fruit_other: "de fructe",
    },
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "en-GB",

    keySeparator: false, // we do not use keys in form messages.welcome

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
