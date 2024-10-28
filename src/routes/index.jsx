import { createBrowserRouter } from "react-router-dom";
import SignIn from "../pages/signin/pages";
import MainLayout from "../Layout";
import { AuthProvider } from "../context/auth-context";
import { DrawerProvider } from "../context/drawer-context";
import Profile from "../pages/profile/page";

import AddOdm from "../pages/forms/AddOdm";
import AddActivities from "../pages/forms/AddActivities";
import AddMaterials from "../pages/forms/AddMaterials";

import Odm from "../pages/forms/Odm";
import Activities from "../pages/forms/Activities";
import Materials from "../pages/forms/Materials";

import Metadata from "../pages/admin/settings/metadata/page";
import MetadataAdd from "../pages/admin/settings/metadata/add/page";
import MetadataShow from "../pages/admin/settings/metadata/show/page";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <SignIn />,
  },
  {
    path: "admin",
    element: (
      <DrawerProvider>
        <AuthProvider>
          <MainLayout />
        </AuthProvider>
      </DrawerProvider>
    ),
    children: [
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "settings",
        children: [
          {
            path: "metadata/:entity",
            element: <Metadata />,
          },
          {
            path: "metadata/:entity/add",
            element: <MetadataAdd />,
          },
          {
            path: "metadata/:entity/show/:id",
            element: <MetadataShow />,
          },
        ],
      },
      {
        path: "management",
        children: [
          {
            path: "form/odm",
            element: <Odm />,
          },
          {
            path: "form/odm/add",
            element: <AddOdm />,
          },
          {
            path: "form/activities",
            element: <Activities />,
          },
          {
            path: "form/activities/add",
            element: <AddActivities />,
          },
          {
            path: "form/materials",
            element: <Materials />,
          },
          {
            path: "form/materials/add",
            element: <AddMaterials />,
          },
        ],
      },
    ],
  },
]);
