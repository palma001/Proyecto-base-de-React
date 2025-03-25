import React from "react";
import { SessionData } from "../../interfaces/Session";
import { useNavigate } from "react-router";
import { FaRightFromBracket } from "react-icons/fa6";
import { authenticationStore } from "../../stores/authorization";
import { ROUTES } from "../../routes/routes";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Avatar,
  DropdownSection,
  Button,
} from "@heroui/react";

export default function DropdownSession({
  session,
}: {
  session?: SessionData
}) {
  /**
   * Logout function from store
   */
  const { logout } = authenticationStore();
  /**
   * Navigate to other page
   */
  const navigate = useNavigate();
  /**
   * Actions function
   * @param {React.Key} key
   */
  const actions = (key: React.Key) => {
    switch (key) {
      case "logout":
        logout();
        break;
      default:
        navigate(ROUTES.PROFILE);
        break;
    }
  };

  return (
    <Dropdown placement="bottom-start">
      <DropdownTrigger>
        <Avatar
          src={session?.user?.image_url}
          className="cursor-pointer"
          classNames={{
            base: "bg-gradient-to-br from-primary to-secondary",
            icon: "text-white",
          }}
        />
      </DropdownTrigger>
      <DropdownMenu
        aria-label="User Actions"
        variant="flat"
        className="p-3 min-w-[340px]"
        onAction={(key) => actions(key)}
      >
        <DropdownSection showDivider>
          <DropdownItem
            key="profile"
            textValue="Perfil"
            startContent={
              <Avatar
                src={session?.user?.image_url}
                classNames={{
                  base: "bg-gradient-to-br from-primary to-secondary",
                  icon: "text-white",
                }}
              />
            }
          >
            <div className="grid items-center">
              <span className="font-semibold">{session?.user?.name || "Nombre"}</span>
              <span className="text-tiny">@{session?.user?.username}</span>
            </div>
          </DropdownItem>
        </DropdownSection>
        <DropdownSection>
          <DropdownItem
            key="logout"
            textValue="logout"
            startContent={
              <Button isIconOnly variant="solid" className="rounded-full">
                <FaRightFromBracket size={20} />
              </Button>
            }
            onPress={logout}
          >
            <span className="font-semibold">Cerrar sesión</span>
          </DropdownItem>
        </DropdownSection>
      </DropdownMenu>
    </Dropdown>
  );
}
