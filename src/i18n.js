import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "./data/languages/en/translation.json";
import de from "./data/languages/de/translation.json";

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      de: { translation: de },
    },
    lng: "en", 
    fallbackLng: "en",
    interpolation: { escapeValue: false },
  });

export default i18n;
