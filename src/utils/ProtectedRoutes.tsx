import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ProtectedRoutes = ({
  component: Component,
}: {
  component: React.ComponentType;
}) => {
  const navigate = useNavigate();
  const isAuthenticated = localStorage.getItem("access_token");

  useEffect(() => {
    const verifyToken = async () => {
      try {
        if (!isAuthenticated) {
          navigate("/auth/login");
          return;
        }
      } catch (error) {
        console.error("Token verification error:", error);
        navigate("/auth/login");
      }
    };

    verifyToken();
  }, [navigate, isAuthenticated]);

  return isAuthenticated ? <Component /> : null;
};

export default ProtectedRoutes;
