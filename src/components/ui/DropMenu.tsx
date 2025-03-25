import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@heroui/react";
import { LuLayoutPanelLeft } from "react-icons/lu";
import { RiExchangeLine } from "react-icons/ri";
import { toast } from "sonner";
import { authenticationStore } from "../../stores/authorization";

export default function DropMenu() {
  const { getSession } = authenticationStore();
  const session = getSession();

  const items = [
    {
      label: "Cambiar empresa",
      icon: <RiExchangeLine size={20} />,
      condition: session?.user?.companies?.length > 1,
      action: () => {
        toast.info("Cambiar empresa");
      },
    },
  ];

  return (
    <>
      <Dropdown>
        <DropdownTrigger>
          <Button isIconOnly radius="full">
            <LuLayoutPanelLeft size={20} />
          </Button>
        </DropdownTrigger>
        <DropdownMenu>
            {
              items.map((item, index) => item.condition ? (
                <DropdownItem key={`${item.label}-${index}`} onPress={item.action}>
                  <p className="flex items-center gap-2 font-semibold">{item.icon} {item.label}</p>
                </DropdownItem>
              ) : <></>)
            }
        </DropdownMenu>
      </Dropdown>
    </>
  );
}