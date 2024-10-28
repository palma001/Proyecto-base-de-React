// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const envType = "development";

const configEnv = {};

export const app = initializeApp(configEnv[envType]);
export const db = getFirestore(app);

export const formatTimestamp = (
  timestamp,
  formatChoose = { year: "numeric", month: "numeric", day: "numeric" }
) => {
  if (!timestamp) return "";
  const date = timestamp.toDate();
  return date.toLocaleString("es-Es", formatChoose);
};

export const storage = getStorage(app, "");
