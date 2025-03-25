import { create } from "zustand";
import { persist } from "zustand/middleware";
import { createJSONStorage } from "zustand/middleware";
import { decryptData, encryptData } from "../libs/cryptAes";
import { api } from "../libs/axios";
import { SessionData } from "react-router";

interface AuthenticationStore {
  session: string | null;
  handlerSession: (session: SessionData) => void;
  getSession: () => SessionData | null;
  logout: () => void;
}

export const authenticationStore = create<AuthenticationStore>()(
  persist(
    (set, get) => ({
      session: null,

      handlerSession: (session: SessionData) =>
        set(() => ({ session: encryptData(session) as string })),

      getSession: () => {
        const { session } = get();
        if (session) {
          const dataDecrypt: SessionData = decryptData(session);
          api.defaults.headers.common.authorization = `Bearer ${dataDecrypt?.access_token}`;

          return dataDecrypt;
        }
        return null;
      },

      logout: () => set(() => ({ session: null })),
    }),
    {
      name: "session",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
