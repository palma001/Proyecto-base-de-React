/* eslint-disable react-hooks/exhaustive-deps */
import { useLocation, useNavigate } from "react-router-dom";
import { authenticationStore } from "../store/authorization";
import { useEffect } from "react";
import UserModel from "../models/User";

function RequireAuth({ children }) {
  const { user, setRole } = authenticationStore();
  const navigate = useNavigate();
  const location = useLocation();

  const userModel = new UserModel();

  useEffect(() => {
    if (user !== "403") getUserDetail();
  }, [user]);

  const getUserDetail = async () => {
    if (user) {
      const userDetail = await userModel
        .where("email", "==", user?.email)
        .first();
      if (userDetail) {
        setRole(userDetail.role);

        if (location.pathname === "/")
          return navigate("/admin/subscribers", {
            state: { from: "/" },
            replace: true,
          });

        return navigate(location.pathname, {
          state: { from: "/" },
          replace: true,
        });
      }
    }
    return navigate("/", {
      state: { from: location },
      replace: true,
    });
  };

  return children;
}

export default RequireAuth;
