import moment from "moment";

export const generateColorFromString = (str) => {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }

  const red = hash & 0xff;
  const green = (hash >> 8) & 0xff;
  const blue = (hash >> 16) & 0xff;

  return `#${red.toString(16).padStart(2, "0")}${green
    .toString(16)
    .padStart(2, "0")}${blue.toString(16).padStart(2, "0")}`;
};

export const formatDate = (
  timestamp,
  { format } = { format: "yyyy-MM-DD" }
) => {
  if (!timestamp) return "";
  return moment(timestamp).format(format);
};
