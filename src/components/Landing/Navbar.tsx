import { Button } from "@heroui/react"
import { Link } from "@heroui/link";
import { link as linkStyles } from "@heroui/theme";
import clsx from "clsx";
import { FaBars, FaRightToBracket } from "react-icons/fa6";
import { Logo } from "../icons";
import ThemeSwitch from "../theme-switch";
import { siteConfig } from "../../config/site";
import { ROUTES } from "../../routes/routes";
import DropdownSession from "../AdminLayout/DropdownSession";
import {
  Navbar as NextUINavbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@heroui/navbar";
import { SessionData } from "../../interfaces/Session";

import DropMenu from "../ui/DropMenu";

export default function Navbar({
  session,
  onMenuClick,
}: {
  session?: SessionData | null;
  onMenuClick?: () => void;
}) {

  return (
    <NextUINavbar
      maxWidth="xl"
      position="sticky"
      isBordered
      className="bg-white dark:bg-gray-900"
    >
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        {onMenuClick && (
          <Button
            type="button"
            onPress={onMenuClick}
            variant="light"
            isIconOnly
          >
            <FaBars className="h-5 w-5 dark:text-white" />
          </Button>
        )}
        <NavbarBrand className="gap-3 max-w-fit">
          <Link
            className="flex justify-start items-center gap-1 dark:text-white"
            color="foreground"
            href="/"
          >
            <Logo />
            <p className="font-bold text-inherit">Quote</p>
          </Link>
        </NavbarBrand>
        <div className="hidden lg:flex gap-4 justify-start ml-2">
          {siteConfig.navItems.map((item) => (
            <NavbarItem key={item.href}>
              <Link
                className={clsx(
                  linkStyles({ color: "foreground" }),
                  "data-[active=true]:text-primary data-[active=true]:font-medium dark:text-white"
                )}
                href={item.href}
              >
                {item.label}
              </Link>
            </NavbarItem>
          ))}
        </div>
      </NavbarContent>

      <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-full"
        justify="end"
      >
        <DropMenu />
        <ThemeSwitch />
        <NavbarItem className="hidden md:flex">
          {session ? (
            <DropdownSession session={session} />
          ) : (
            <Button
              as={Link}
              href={ROUTES.LOGIN}
              startContent={<FaRightToBracket />}
              variant="solid"
            >
              Iniciar sesión
            </Button>
          )}
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        <DropMenu />
        <ThemeSwitch />
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarMenu>
        <div className="mx-4 mt-2 flex flex-col gap-2">
          {siteConfig.navMenuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                color={
                  index === 2
                    ? "primary"
                    : index === siteConfig.navMenuItems.length - 1
                    ? "danger"
                    : "foreground"
                }
                href={item.href}
                size="lg"
              >
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}
        </div>
      </NavbarMenu>
    </NextUINavbar>
  );
}
