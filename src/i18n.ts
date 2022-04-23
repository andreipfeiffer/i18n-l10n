import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them)
const resources = {
  en: {
    translation: {
      hello: "Hello {{to}}",
      fruit_one: "one fruit",
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
      hello: "Salutare {{to}}",
      fruit_one: "un fruct",
      fruit_few: "{{count}} fructe",
      fruit_other: "{{count}} de fructe",
    },
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: navigator.language,

    keySeparator: false, // we do not use keys in form messages.welcome

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
