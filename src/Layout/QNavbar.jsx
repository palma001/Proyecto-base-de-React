/* eslint-disable react/prop-types */
import React from "react";
import { AuthContext } from "../context/auth-context";
import { authenticationStore } from "../store/authorization";
import Drawer from './Drawer'
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Avatar,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Dropdown,
  Button,
} from "@nextui-org/react";


const menu = [
  {
    id: 1,
    url: "/admin/subscribers",
    label: "Suscriptores",
  },
  {
    id: 2,
    url: "/admin/signed-contracts",
    label: "Administrar contratos",
  },
  {
    id: 3,
    url: "/admin/contracts",
    label: "Contratos",
  },
];

const validModule = (url, session) => {
  if (session) {
    const { user } = session;
    if (user.is_root) return true;

    for (const role of user.roles) {
      for (let md of role.modules) {
        if (md.url === url) {
          const permissions = JSON.parse(md.pivot.permissions);
          if (permissions.includes("1")) {
            return true;
          }
        }
      }
    }
    return false;
  }
  return false;
};

const Navigation = ({ session, pathname }) => {
  return (
    <>
      {menu.map((m) => (
        <div key={m.id}>
          {validModule(m.url, session) && (
            <NavbarItem
              className={
                pathname === m.url &&
                "bg-teal-700 text-white px-2 py-1 rounded-lg"
              }
            >
              <Link color="foreground" to={m.url}>
                {m.label}
              </Link>
            </NavbarItem>
          )}
        </div>
      ))}
    </>
  );
};

export default function QNavbar() {
  const { session } = React.useContext(AuthContext);
  const { logout } = authenticationStore();
  let { pathname } = useLocation();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const actions = (key) => {
    switch (key) {
      case "logout":
        logout();
        navigate("/");
        break;
      default:
        navigate("/admin/profile");
        break;
    }
  };

  return (
    <>
      <Navbar onMenuOpenChange={setIsMenuOpen}>
        <NavbarContent justify="start">
          <Drawer/>
          <NavbarBrand className="flex gap-1">
            <p className="font-bold text-inherit text-teal-800">{session.user.name}</p>
          </NavbarBrand>
        </NavbarContent>
        {/*<NavbarContent justify="center" className="hidden sm:flex gap-4">
           <Navigation session={session} pathname={pathname} /> 
        </NavbarContent>*/}
        <NavbarContent justify="end">
          {session && (
            <NavbarItem>
              <Dropdown className="dark:bg-black dark:text-white">
                <DropdownTrigger>
                  <Button
                    variant="bordered"
                    isIconOnly
                    size="lg"
                    radius="full"
                    color="success"
                  >
                    <Avatar
                      isBordered
                      radius="full"
                      src={session?.user?.profile_picture}
                      classNames={{
                        base: "bg-gradient-to-br from-[#FFB457] to-[#FF705B]",
                        icon: "text-black/80",
                      }}
                    />
                  </Button>
                </DropdownTrigger>
                <DropdownMenu
                  aria-label="Action event example"
                  onAction={(key) => actions(key)}
                >
                  <DropdownItem key="profile" textValue={session?.user?.name}>
                    {session?.user?.name} {session.user?.last_name}
                  </DropdownItem>
                  <DropdownItem key="account" textValue={session.user?.email}>
                    {session.user?.email}
                  </DropdownItem>
                  <DropdownItem key="logout" textValue="logout">
                    Cerrar sesión
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </NavbarItem>
          )}
        </NavbarContent>
      </Navbar>
    </>
  );
}
