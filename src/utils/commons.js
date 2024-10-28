import { blobToURL } from "./Utils";

export const getFileAsBlob = async (downloadURL, filename = "test.pdf") => {
  try {
    const response = await fetch(downloadURL);
    const blob = await response.blob();
    const file = new File([blob], filename, { type: "application/pdf" });
    return await blobToURL(file);
  } catch (error) {
    console.error("Error obteniendo archivo:", error.message);
    throw error;
  }
};
