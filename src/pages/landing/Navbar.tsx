import {
  Navbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";
import { ROUTES } from "../../routes/routes"

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
          <img src="/image/quanto.png" alt="Quanto" />
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex sm:gap-8" justify="center">
        <NavbarBrand>
          <img src="/image/quanto.png" alt="Quanto" />
        </NavbarBrand>
        <NavbarItem>
          <Link className="text-sm" color="foreground" href="#">
            Inicio
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="text-sm" color="foreground" href="#">
            Planes y suscripciones
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="text-sm" color="foreground" href="#">
            Punto de venta virtual
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="text-sm" color="foreground" href="#">
            Tiendas registradas
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
        <Button as={Link} href={`${router.AUTH}/${router.REGISTER}`} variant="bordered" className="rounded-full border-quanto text-quanto">
            Abrir una tienda
          </Button>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} href={`${router.AUTH}/${router.LOGIN}`} variant="solid" className="rounded-full bg-quanto text-white">
            Iniciar sesión
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full"
              color={
                index === 2
                  ? "warning"
                  : index === menuItems.length - 1
                  ? "danger"
                  : "foreground"
              }
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
