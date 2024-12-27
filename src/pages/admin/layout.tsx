/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { Navigate, Outlet, useNavigate } from "react-router";
import { ROUTES } from "../../routes/routes";
import { authenticationStore } from "../../stores/authorization";
import Navbar from "../../components/Landing/Navbar";
import Drawer from "../../components/AdminLayout/Drawer";

export default function AdminLayout() {
  /**
   * Get session function from store
   */
  const { getSession } = authenticationStore();
  /**
   * Get session from getSession function
   */
  const session: any = getSession();

  const navigate = useNavigate();

  React.useEffect(() => {
    if (!session) {
      navigate(ROUTES.LOGIN);
    }
  }, [session]);

  const [isDrawerOpen, setIsDrawerOpen] = React.useState(true);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <>
      <title>Admin | Bingo Online</title>
      <div className="min-h-screen">
        <Navbar onMenuClick={toggleDrawer} session={session} />
        <div className="flex">
          <Drawer isOpen={isDrawerOpen} />
          <main
            className={`flex-1 transition-all duration-300 ease-in-out ${
              isDrawerOpen ? "ml-64" : "ml-0"
            }`}
          >
            <div className="py-4">
              <Outlet />
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
