/* eslint-disable @typescript-eslint/no-explicit-any */
import { Accordion, AccordionItem, Link } from "@heroui/react";
import {
  FaGear,
  FaCoins,
  FaCreditCard,
  FaUser,
  FaUserGear,
  FaLandmark,
} from "react-icons/fa6";
import { LuLayoutPanelLeft } from "react-icons/lu";
import { FaChartPie } from "react-icons/fa";
import { FaBuilding, FaBuildingUser } from "react-icons/fa6";
import { FaFolder } from "react-icons/fa";
import { FaRegRectangleList } from "react-icons/fa6";

interface DrawerProps {
  isOpen: boolean;
}

const navbarItems = [
  {
    icon: LuLayoutPanelLeft,
    text: "Panel de control",
    disable: true,
    children: [
      {
        icon: FaChartPie,
        text: "Estadísticas",
        href: "#",
      },
    ],
  },
  {
    icon: FaRegRectangleList,
    text: "Licitaciones",
    children: [
      {
        icon: FaBuilding,
        text: "Licitar | Cotizar",
        href: "#",
      },
      {
        icon: FaBuildingUser,
        text: "Compradores",
        href: "#",
      },
    ],
  },
  {
    icon: FaRegRectangleList,
    text: "Impuestos y libros",
    disable: true,
    children: [
      {
        icon: FaBuilding,
        text: "Licitar / cotizar",
        href: "#",
      },
      {
        icon: FaBuildingUser,
        text: "Retenciones",
        href: "#",
      },
    ],
  },
  {
    icon: FaFolder,
    text: "Documentos",
    disable: true,
    children: [
      {
        icon: FaBuilding,
        text: "Listar documentos",
        href: "#",
      },
    ],
  },
  {
    icon: FaBuilding,
    text: "Clientes",
    children: [
      {
        icon: FaBuilding,
        text: "Clientes",
        href: "#",
      },
      {
        icon: FaBuildingUser,
        text: "Compradores",
        href: "#",
      },
    ],
  },
  {
    icon: FaGear,
    text: "Configuración",
    children: [
      {
        icon: FaLandmark,
        text: "Bancos",
        href: "/admin/banks",
      },
      {
        icon: FaCoins,
        text: "Monedas",
        href: "/admin/currencies",
      },
      {
        icon: FaCreditCard,
        text: "Métodos de pago",
        href: "/admin/payment-methods",
      },
      {
        icon: FaUser,
        text: "Usuarios",
        href: "/admin/users",
      },
      {
        icon: FaUserGear,
        text: "Roles",
        href: "/admin/roles",
      },
    ],
  },
];

export default function Drawer({ isOpen }: DrawerProps) {
  return (
    <div
      className={`fixed top-16 px-3 bottom-0 dark:bg-gray-900 border-r-1 border-gray-400 border-opacity-30 w-64 transition-transform duration-300 ease-in-out ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <Accordion variant="light">
        {navbarItems.map((item: any, index: number) => (
          <AccordionItem
            key={index}
            isDisabled={item.disable}
            aria-label={item.text}
            isCompact
            title={
              <span className="font-semibold flex items-center gap-1">
                <item.icon size={18} />
                {item.text}
              </span>
            }
          >
            {item.children.map((child: any, i: number) => (
              <DrawerLink
                icon={child.icon}
                text={child.text}
                href={child.href}
                key={`${i}-link`}
              />
            ))}
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}

interface DrawerLinkProps {
  icon: React.ElementType;
  text: string;
  isActive?: boolean;
  href: string;
}

function DrawerLink({ icon: Icon, text, isActive, href }: DrawerLinkProps) {
  return (
    <Link
      href={href}
      className={`flex items-center px-4 py-2 text-sm ${
        isActive
          ? "text-blue-400 bg-blue-500/10"
          : "text-gray-400 hover:bg-white/5"
      }`}
    >
      <Icon className="size-5 mr-3" />
      {text}
    </Link>
  );
}
