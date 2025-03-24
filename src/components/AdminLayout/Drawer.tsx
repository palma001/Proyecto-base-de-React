import { Accordion, AccordionItem, Link } from "@heroui/react";
import { FaCircleNodes } from "react-icons/fa6";
// import { LuLayoutPanelLeft } from "react-icons/lu";
import {
  FaBuilding,
  // FaBuildingUser,
  // FaPiggyBank,
  // FaFileInvoiceDollar,
  // FaRegRectangleList,
  FaGear,
  // FaUser,
  FaUserGear,
  // FaLandmark
} from "react-icons/fa6";
// import { PiInvoice } from "react-icons/pi";
// import { BiMoneyWithdraw } from "react-icons/bi";
// import { IoIosPricetags } from "react-icons/io";
// import { IoDocument } from "react-icons/io5";
import { 
  // FaFolder, 
  FaUserLock, 
  // FaChartPie 
} from "react-icons/fa";
import { IconType } from "react-icons/lib";

interface DrawerProps {
  isOpen: boolean;
}

const navbarItems: 
  {
    icon: IconType;
    text: string;
    children: {
      icon: IconType;
      text: string;
      href: string;
    }[];
  }[] = [
  // {
  //   icon: LuLayoutPanelLeft,
  //   text: "Panel de control",
  //   children: [
  //     {
  //       icon: FaChartPie,
  //       text: "Estadísticas",
  //       href: "#",
  //     },
  //   ],
  // },
  // {
  //   icon: FaRegRectangleList,
  //   text: "Licitaciones",
  //   children: [
  //     {
  //       icon: IoIosPricetags,
  //       text: "Licitar | Cotizar",
  //       href: "#",
  //     },
  //   ],
  // },
  // {
  //   icon: FaFileInvoiceDollar,
  //   text: "Impuestos y libros",
  //   children: [
  //     {
  //       icon: BiMoneyWithdraw,
  //       text: "Facturación",
  //       href: "#",
  //     },
  //     {
  //       icon: PiInvoice,
  //       text: "Retenciones",
  //       href: "#",
  //     },
  //   ],
  // },
  // {
  //   icon: FaFolder,
  //   text: "Documentos",
  //   children: [
  //     {
  //       icon: IoDocument,
  //       text: "Gestión de documentos",
  //       href: "#",
  //     },
  //   ],
  // },
  // {
  //   icon: FaBuilding,
  //   text: "Clientes",
  //   children: [
  //     {
  //       icon: FaBuilding,
  //       text: "Clientes",
  //       href: "#",
  //     },
  //     {
  //       icon: FaBuildingUser,
  //       text: "Compradores",
  //       href: "#",
  //     },
  //   ],
  // },
  {
    icon: FaGear,
    text: "Configuración",
    children: [
      // {
      //   icon: FaLandmark,
      //   text: "Bancos",
      //   href: "/admin/banks",
      // },
      // {
      //   icon: FaPiggyBank,
      //   text: "Cuentas bancarias",
      //   href: "#",
      // },
      {
        icon: FaBuilding,
        text: "Empresas",
        href: "/admin/companies",
      },
      {
        icon: FaCircleNodes,
        text: "Módulos",
        href: "/admin/modules",
      },
      // {
      //   icon: FaCoins,
      //   text: "Monedas",
      //   href: "/admin/currencies",
      // },
      // {
      //   icon: FaCreditCard,
      //   text: "Métodos de pago",
      //   href: "/admin/payment-methods",
      // },
      // {
      //   icon: FaUser,
      //   text: "Usuarios",
      //   href: "/admin/users",
      // },
      {
        icon: FaUserGear,
        text: "Roles",
        href: "/admin/roles",
      },
      {
        icon: FaUserLock,
        text: "Permisos",
        href: "/admin/permissions",
      },
    ],
  },
];

export default function Drawer({ isOpen }: DrawerProps) {
  return (
    <div
      className={`fixed top-16 px-3 bottom-0 dark:bg-gray-900 border-r-1 border-gray-400 border-opacity-30 w-full z-20 sm:w-64 transition-transform duration-300 ease-in-out ${isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
    >
      <Accordion variant="light">
        {navbarItems.map((item, index: number) => (
          <AccordionItem
            key={index}
            aria-label={item.text}
            isCompact
            title={
              <span className="font-semibold flex items-center gap-1">
                <item.icon size={18} />
                {item.text}
              </span>
            }
          >
            {item.children.map((child, i: number) => (
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
  icon: IconType;
  text: string;
  isActive?: boolean;
  href: string;
}

function DrawerLink({ icon: Icon, text, isActive, href }: DrawerLinkProps) {
  return (
    <Link
      href={href}
      className={`flex items-center px-4 py-2 text-sm ${isActive
          ? "text-blue-400 bg-blue-500/10"
          : "text-gray-400 hover:bg-white/5"
        }`}
    >
      <Icon className="size-5 mr-3" />
      {text}
    </Link>
  );
}
