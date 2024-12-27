import { useTranslation } from "react-i18next";

export default function QT({ word }: { word: string }) {
  const { t } = useTranslation();
  return word ? t(word) : "translate error";
}
