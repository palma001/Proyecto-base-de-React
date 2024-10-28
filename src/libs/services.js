import {
  Timestamp,
  and,
  collection,
  doc,
  getDoc,
  getDocs,
  orderBy,
  query,
  setDoc,
  updateDoc,
  where,
} from "firebase/firestore";
import { db } from "./firebase";

export const firebase = {
  /**
   * Soft deletes all documents
   * @param {collection} collect firestore collection
   * @returns {query} query collection
   */
  softDeletes(collect, filters = []) {
    return query(
      collect,
      and(...filters, where("deleted_at", "==", null)),
      orderBy("created_at", "desc")
    );
  },
  /**
   * Get data from firebase
   * @param {string} firestore name
   */
  async get(dbName, filters = []) {
    try {
      const data = [];
      const querySnapshot = await getDocs(
        this.softDeletes(collection(db, dbName), filters)
      );
      querySnapshot.forEach((doc) => {
        const dataDoc = doc.data();
        data.push({
          ...dataDoc,
          id: doc.id,
        });
      });
      return data;
    } catch (error) {
      throw new Error(error);
    }
  },
  /**
   * Get data from firebase
   * @param {string} firestore name
   */
  async show(dbName, id) {
    try {
      try {
        const newCityRef = doc(db, dbName, id);
        const docSnap = await getDoc(newCityRef);
        if (docSnap.exists()) {
          return docSnap.data();
        }
        throw new Error("Data no encontrada");
      } catch (error) {
        throw new Error(error);
      }
    } catch (error) {
      throw new Error(error);
    }
  },
  /**
   * Post data from firebase
   * @param {string} dbName name
   * @param {object} data data to send
   */
  async post(dbName, data) {
    try {
      const newCityRef = doc(collection(db, dbName));
      await setDoc(newCityRef, {
        ...data,
        created_at: Timestamp.now(),
        deleted_at: null,
      });
    } catch (error) {
      throw new Error(error);
    }
  },
  /**
   * Update data from firebase
   * @param {string} firestore name
   * @param {string} id data to be will update
   * @param {object} data data updated
   */
  async update(dbName, id, data) {
    try {
      const newCityRef = doc(db, dbName, id);
      const docSnap = await getDoc(newCityRef);
      if (docSnap.exists()) {
        await updateDoc(newCityRef, data);
        return docSnap.data();
      }
      throw new Error("Data no encontrada");
    } catch (error) {
      throw new Error(error);
    }
  },
  /**
   * Delete data from firebase
   * @param {string} firestore name
   * @param {string} firestore data deleted
   */
  async delete(dbName, id) {
    try {
      const newCityRef = doc(db, dbName, id);
      const docSnap = await getDoc(newCityRef);
      if (docSnap.exists()) {
        await updateDoc(newCityRef, {
          ...docSnap.data(),
          deleted_at: Timestamp.now(),
        });
        return docSnap.data();
      }
      throw new Error("Data no encontrada");
    } catch (error) {
      throw new Error(error);
    }
  },
};
