import axios from "axios";
import { useContext, useEffect } from "react";
import { useLocation, useNavigate } from "react-router";
import UserContext from "../context/user/UserContext";

export const useProtect = () => {
  const navigate = useNavigate();
  const { loginUser, logoutUser } = useContext(UserContext);
  const url = useLocation().pathname;

  useEffect(() => {
    const checkToken = localStorage.getItem("token");
    console.log(checkToken);
    if (checkToken) {
      const { id, authToken } = JSON.parse(checkToken);
      console.log(`Local storage UID: ${id} authToken: ${authToken}`);
      axios.get("/api/users").then((res) => {
        // Fake api response
        const userRes = {
          user: {
            id: 123,
            firstName: "UserName",
            secondName: "secondName",
            email: "email",
            password: "password",
            address: "address",
            secondaryAddress: "secondaryAddress",
            phone: "phone",
            userType: 0,
            status: 0,
          },
          authToken: "Baerer token",
        };

        const adminRes = {
          user: {
            id: 123,
            firstName: "AdminName",
            secondName: "secondName",
            email: "email",
            password: "password",
            address: "address",
            secondaryAddress: "secondaryAddress",
            phone: "phone",
            userType: 1,
            status: 0,
          },
          authToken: "Baerer token",
        };

        loginUser(adminRes);
        if (url === "/login" || url === "/register") {
          navigate("/");
        }
      });
    } else {
      logoutUser();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};
