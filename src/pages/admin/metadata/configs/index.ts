/* eslint-disable @typescript-eslint/no-explicit-any */
import { formBankConfig, tableBankConfig } from "./bankConfig";
import { formCurrencyConfig, tableCurrencyConfig } from "./currencyConfig";
import { formEventConfig, tableEventConfig } from "./eventsConfig";
import { formNewsConfig, tableNewsConfig } from "./newsConfig";
import { formPaymentMethodConfig, tablePaymentMethodConfig } from "./paymentMethodConfig";
import { formUserConfig, tableUserConfig } from "./userConfig";

export const config: any = {
  users: {
    services: "admin/users",
    tableTitle: "Lista de usuarios",
    table: tableUserConfig,
    form: formUserConfig,
  },
  news: {
    services: "posts",
    tableTitle: "Lista de noticias",
    table: tableNewsConfig,
    form: formNewsConfig,
  },
  events: {
    services: "posts",
    tableTitle: "Lista de eventos",
    table: tableEventConfig,
    form: formEventConfig,
  },
  currencies: {
    services: "admin/currencies",
    tableTitle: "Lista de monedas",
    table: tableCurrencyConfig,
    form: formCurrencyConfig,
  },
  banks: {
    services: "admin/banks",
    tableTitle: "Lista de bancos",
    table: tableBankConfig,
    form: formBankConfig,
  },
  "payment-methods": {
    services: "admin/payment-methods",
    tableTitle: "Lista de métodos de pago",
    table: tablePaymentMethodConfig,
    form: formPaymentMethodConfig,
  },
};
