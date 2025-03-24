/* eslint-disable @typescript-eslint/no-explicit-any */
import { formBankConfig, tableBankConfig } from "./bankConfig";
import { formCurrencyConfig, tableCurrencyConfig } from "./currencyConfig";
import { formEventConfig, tableEventConfig } from "./eventsConfig";
import { formPaymentMethodConfig, tablePaymentMethodConfig } from "./paymentMethodConfig";
import { formUserConfig, tableUserConfig } from "./userConfig";
import { formRolConfig, tableRolConfig } from "./rolConfig";
import { formPermissionConfig, tablePermissionConfig } from "./permissionConfig";
import { formModuleConfig, tableModuleConfig } from "./moduleConfig";
import { formLeadConfig, tableLeadConfig } from "./leadConfig";

export const config: any = {
  users: {
    services: "users",
    tableTitle: "Lista de usuarios",
    table: tableUserConfig,
    form: formUserConfig,
  },
  events: {
    services: "posts",
    tableTitle: "Lista de eventos",
    table: tableEventConfig,
    form: formEventConfig,
  },
  currencies: {
    services: "currencies",
    tableTitle: "Lista de monedas",
    table: tableCurrencyConfig,
    form: formCurrencyConfig,
  },
  banks: {
    services: "banks",
    tableTitle: "Lista de bancos",
    table: tableBankConfig,
    form: formBankConfig,
  },
  "payment-methods": {
    services: "payment-methods",
    tableTitle: "Lista de métodos de pago",
    table: tablePaymentMethodConfig,
    form: formPaymentMethodConfig,
  },
  roles: {
    services: "roles",
    tableTitle: "Lista de roles",
    table: tableRolConfig,
    form: formRolConfig,
  },
  permissions: {
    services: "permissions",
    tableTitle: "Lista de permisos",
    table: tablePermissionConfig,
    form: formPermissionConfig,
  },
  modules: {
    services: "modules",
    tableTitle: "Lista de módulos",
    table: tableModuleConfig,
    form: formModuleConfig,
  },
  leads: {
    services: "leads",
    tableTitle: "Lista de leads",
    table: tableLeadConfig,
    form: formLeadConfig,
  },
};
