import React from "react";
import { useKeycloak } from "@react-keycloak/web";
import { useEffect } from "react";
import CustomSpinner from "base/components/CustomSpinner/CustomSpinner";

function LogoutPage() {
  // const { keycloak } = useKeycloak();

  // useEffect(() => {
  //   if (!keycloak.authenticated) {
  //     keycloak.login({ redirectUri: "http://localhost:3000/dashboard/" });
  //   } else {
  //     keycloak.logout({ redirectUri: "http://localhost:3000/dashboard/" });
  //   }
  // }, [keycloak]);

  useEffect(() => {
    // /api/user/log-out/{userid}
    window.location = `${process.env.REACT_APP_LOGIN}/login`;
  }, []);

  return <CustomSpinner />;
}

export default LogoutPage;
