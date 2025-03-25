import type { NavigateOptions } from "react-router";

import {HeroUIProvider} from "@heroui/react";
import { useHref, useNavigate } from "react-router";
import {ThemeProvider as NextThemesProvider} from "next-themes";

declare module "@react-types/shared" {
  interface RouterConfig {
    routerOptions: NavigateOptions;
  }
}

export function Provider({ children }: { children: React.ReactNode }) {
  const navigate = useNavigate();

  return (
    <HeroUIProvider navigate={navigate} useHref={useHref}>
      <NextThemesProvider attribute="class" defaultTheme="dark">
        {children}
      </NextThemesProvider>
    </HeroUIProvider>
  );
}
