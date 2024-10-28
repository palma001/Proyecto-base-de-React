// components/Drawer.js
import { useContext } from "react";
import { Link } from "react-router-dom";
import { IoIosSettings, IoMdClose } from "react-icons/io";
import { Accordion, AccordionItem, Button } from "@nextui-org/react";
import LogoPDVSA from "../assets/pdvsa-logo.png";
import { DrawerContext } from "../context/drawer-context";
import { MdOutlineMenu } from "react-icons/md";
import { LuArrowLeftFromLine } from "react-icons/lu";

const Drawer = () => {
  const { isOpen, setIsOpen } = useContext(DrawerContext);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  const titleStyles = "text-base font-semibold";
  const linkStyles = "hover:font-semibold hover:text-black";

  const sections = [
    {
      label: "Configuración",
      path: "settings",
      links: [
        {
          label: "Usuarios",
          path: "metadata/users",
        },
        {
          label: "Tipos de mantenimiento",
          path: "metadata/maint-types",
        },
        {
          label: "Zonas",
          path: "metadata/zones",
        },
        {
          label: "Niveles de mantenimiento",
          path: "metadata/maint-levels",
        },
        {
          label: "Areas",
          path: "metadata/areas",
        },
        {
          label: "Ubicación",
          path: "metadata/locations",
        },
        {
          label: "Role",
          path: "metadata/roles",
        },
      ],
      indicator: <IoIosSettings className="text-xl" />,
    },
    {
      label: "Administración",
      path: "management",
      links: [
        {
          label: "ODM",
          path: "form/odm",
        },
        {
          label: "Actividades",
          path: "form/activities",
        },
        {
          label: "Materiales",
          path: "form/materials",
        },
        {
          label: "Ver plan semanal",
          path: "#",
        },
        {
          label: "Fijar plan semanal",
          path: "#",
        },
        {
          label: "Ver plan mensual",
          path: "#",
        },
      ],
      indicator: <IoIosSettings className="text-xl" />,
    },
  ];

  return (
    <>
      {isOpen ? (
        <Button
          isIconOnly
          disableRipple
          className=" bg-transparent"
          onClick={toggleDrawer}
        >
          <IoMdClose className="size-6" />
        </Button>
      ) : (
        <Button
          isIconOnly
          disableRipple
          className=" bg-transparent"
          onClick={toggleDrawer}
        >
          <MdOutlineMenu className="size-6" />
        </Button>
      )}

      <div
        className={`fixed top-0 left-0 h-screen sm:w-64 w-screen z-50 bg-white drop-shadow-xl transform transition-transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-2 pr-0 h-full flex flex-col justify-between">
          <div className="flex flex-col items-center">
            <img
              src={LogoPDVSA}
              alt="Logo de la aplicacion"
              className="w-32 mt-7 mb-4"
            />
            <Accordion className="overflow-y-auto h-[calc(100vh-210px)] sm:h-[calc(100vh-160px)]">
              {sections.map((section, index) => (
                <AccordionItem
                  isCompact
                  key={index}
                  indicator={section.indicator}
                  aria-label={section.label}
                  title={<span className={titleStyles}>{section.label}</span>}
                  className="text-sm"
                >
                  <ul className="pl-4">
                    {section.links.map((link, index) => (
                      <li className="mb-2" key={index}>
                        <Link
                          className={linkStyles}
                          to={`${section.path}/${link.path}`}
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </AccordionItem>
              ))}
            </Accordion>
            <div>
              <button className="sm:hidden text-gray-600 flex justify-center w-full">
                <LuArrowLeftFromLine
                  className="text-2xl"
                  onClick={toggleDrawer}
                />
              </button>
              <p className="text-sm text-center mt-5 text-gray-400">
                Powered By Karanta Dev.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Drawer;
