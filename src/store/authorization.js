import { create } from "zustand";
import { persist } from "zustand/middleware";
import { createJSONStorage } from "zustand/middleware";
import { decryptData, encryptData } from "../libs/cryptAes";
import { api } from "../libs/axios";

export const authenticationStore = create()(
  persist(
    (set, get) => ({
      session: null,

      handlerSession: (session) =>
        set(() => ({ session: encryptData(session) })),

      getSession: () => {
        const { session } = get();
        if (session) {
          const dataDecrypt = decryptData(session);
          api.defaults.headers.common.authorization = `${dataDecrypt.token_type} ${dataDecrypt.access_token}`;
          return decryptData(dataDecrypt);
        }
      },

      logout: () => set(() => ({ session: null })),
    }),
    {
      name: "session",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
