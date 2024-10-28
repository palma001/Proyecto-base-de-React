import { formUserConfig, tableUserConfig } from "./userConfig";
import { formRoadConfig, tableRoadConfig } from "./areaConfig";
import { formMaintTypeConfig, tableMaintTypeConfig } from "./maintTypeConfig";

import {
  formMaintLevelConfig,
  tableMaintLevelConfig,
} from "./maintLevelConfig";
import { formZoneConfig, tableZoneConfig } from "./zoneConfig";
import { formLocationConfig, tableLocationConfig } from "./locationsConfig";

export const config = {
  users: {
    entity: "users",
    tableTitle: "Lista de usuarios",
    table: tableUserConfig,
    form: formUserConfig,
  },
  areas: {
    entity: "areas",
    tableTitle: "Lista de areas",
    table: tableRoadConfig,
    form: formRoadConfig,
  },
  "maint-types": {
    entity: "maint-types",
    tableTitle: "Tipos de mantenimiento",
    table: tableMaintTypeConfig,
    form: formMaintTypeConfig,
  },
  zones: {
    entity: "zones",
    tableTitle: "Zonas",
    table: tableZoneConfig,
    form: formZoneConfig,
  },
  locations: {
    entity: "locations",
    tableTitle: "Ubicación",
    table: tableLocationConfig,
    form: formLocationConfig,
  },
  "maint-levels": {
    entity: "maint-levels",
    tableTitle: "Niveles de mantenimiento",
    table: tableMaintLevelConfig,
    form: formMaintLevelConfig,
  },
};
