import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import es from "./es";

export const defaultNS = "es";

i18next.use(initReactI18next).init({
  lng: "es", // if you're using a language detector, do not define the lng option
  debug: false,
  resources: {
    es: {
      es,
    },
  },
  defaultNS,
});
