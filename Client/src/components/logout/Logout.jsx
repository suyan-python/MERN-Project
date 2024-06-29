import { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../store/auth";

const Logout = () => {
  const { LogoutUser } = useAuth();

  try {
    useEffect(() => {
      LogoutUser();
    }, [LogoutUser]);
  } catch (error) {
    console.log(error);
  }
  return <Navigate to="/" />;
};

export default Logout;
