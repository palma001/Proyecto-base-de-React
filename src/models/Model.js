import { and, where } from "firebase/firestore";
import { firebase } from "../libs/services";

export default class Model {
  constructor(tableName) {
    this.tableName = tableName;
    this.filters = [];
  }

  where(field, operator, value) {
    if (value) {
      this.filters.push(and(where(field, operator, value)));
    }
    return this;
  }

  async save(data) {
    try {
      await firebase.post(this.tableName, data);
    } catch (error) {
      throw new Error(error);
    }
  }

  // Método para actualizar un registro en la base de datos
  async update(id, data) {
    try {
      return await firebase.update(this.tableName, id, data);
    } catch (error) {
      throw new Error(error);
    }
  }
  async delete(id) {
    try {
      return await firebase.delete(this.tableName, id);
    } catch (error) {
      throw new Error(error);
    }
  }

  async get() {
    try {
      return await firebase.get(this.tableName, this.filters);
    } catch (error) {
      throw new Error(error);
    }
  }

  async first() {
    try {
      const data = await firebase.get(this.tableName, this.filters);
      return data[0];
    } catch (error) {
      throw new Error(error);
    }
  }

  async show(id) {
    try {
      return await firebase.show(this.tableName, id);
    } catch (error) {
      throw new Error(error);
    }
  }
}
