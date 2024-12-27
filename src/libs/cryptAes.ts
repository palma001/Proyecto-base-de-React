/* eslint-disable @typescript-eslint/no-explicit-any */
import CryptoJS from "crypto-js";

export const encryptData = (data: any) => {
  try {
    const options = {
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7,
      iv: CryptoJS.enc.Utf8.parse(import.meta.env.VITE_APP_SECRET_IV),
    };
    const encryptedData = CryptoJS.AES.encrypt(
      JSON.stringify(data),
      CryptoJS.enc.Utf8.parse(import.meta.env.VITE_APP_SECRET_KEY),
      options
    );
    return encryptedData.toString();
  } catch (error) {
    return error;
  }
};

export const decryptData = (data) => {
  try {
    const options = {
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7,
      iv: CryptoJS.enc.Utf8.parse(import.meta.env.VITE_APP_SECRET_IV),
    };
    const encryptedData = CryptoJS.AES.decrypt(
      data,
      CryptoJS.enc.Utf8.parse(import.meta.env.VITE_APP_SECRET_KEY),
      options
    );
    const decryptedText = encryptedData.toString(CryptoJS.enc.Utf8);
    return JSON.parse(decryptedText);
  } catch (error) {
    return data;
  }
};
