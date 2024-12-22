import {
  Navbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  NavbarContent,
  NavbarItem
} from "@nextui-org/react";
import { ROUTES } from "../../routes/routes"
import { Link } from "react-router";

export default function App() {
  const router = ROUTES;
  const menuItems = [
    "Profile",
    "Dashboard",
    "Activity",
    "Analytics",
    "System",
    "Deployments",
    "My Settings",
    "Team Settings",
    "Help & Feedback",
    "Log Out",
  ];

  return (
    <Navbar className="shadow-lg">
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarContent className="sm:hidden pr-3" justify="center">
        <NavbarBrand className="w-full">
          <Link to="/">
            <img src="/image/quanto.png" alt="Quanto" />
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex sm:gap-8" justify="center">
        <NavbarBrand>
          <Link to="/">
            <img src="/image/quanto.png" alt="Quanto" />
          </Link>
        </NavbarBrand>
        <NavbarItem>
          <Link to="/" className="text-sm" color="foreground">
            Inicio
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link to="/#" className="text-sm" color="foreground">
            Planes y suscripciones
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link to="/#" className="text-sm" color="foreground">
            Punto de venta virtual
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link to="/stores" className="text-sm" color="foreground">
            Tiendas registradas
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link
            className="rounded-full border-2 p-2 text-sm border-quanto text-quanto"
            to={`${router.AUTH}/${router.REGISTER}`}
          >
            Abrir una tienda
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            className="rounded-full p-2.5 text-sm bg-quanto text-white"
            to={`${router.AUTH}/${router.LOGIN}`}
          >
            Iniciar sesión
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link to="/#"
              className="w-full"
              color={
                index === 2
                  ? "warning"
                  : index === menuItems.length - 1
                    ? "danger"
                    : "foreground"
              }
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
