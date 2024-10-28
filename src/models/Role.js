import Model from "./Model";

export class RoleModel extends Model {
  roleAcronym = {
    doctor: "DR",
    admin: "AD",
    root: "ROOT"
  }

  constructor() {
    super('roles');
  }
}

export default RoleModel