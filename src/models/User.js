import { singUpUser } from "../lib/firebase";
import Model from "./Model";
import RoleModel from "./Role";

export class UserModel extends Model {
  constructor() {
    super("users");
    this.roleAcronym = "";
  }

  saveUser = async (user) => {
    try {
      await singUpUser(user.email, user.password);
      await this.save(user);
    } catch (error) {
      throw Error(error.message);
    }
  };

  getRole = async () => {
    try {
      const roleModel = new RoleModel();
      console.log(this.roleAcronym);
      return await roleModel.where("acronym", "==", this.roleAcronym).first();
    } catch (error) {
      throw Error(error.message);
    }
  };
}

export default UserModel;
