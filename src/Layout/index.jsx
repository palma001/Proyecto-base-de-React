import { Outlet } from "react-router-dom";
import QNavbar from "./QNavbar";
import { useContext } from "react";
import { DrawerContext } from "../context/drawer-context";

export default function MainLayout() {

  const { setIsOpen } = useContext(DrawerContext);

  const closeDrawer = () => {
    setIsOpen(false);
  };

  return (
    <>
      <QNavbar />
      <div className="w-full grid justify-center" onClick={closeDrawer}>
        <div className="max-w-5x rounded-md">
          <Outlet />
        </div>
      </div>
    </>
  );
}
