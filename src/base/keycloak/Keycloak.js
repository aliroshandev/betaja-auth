import Keycloak from "keycloak-js";

const keycloakConfig = {
  realm: "mtna",
  url: "http://192.180.9.79:9080/auth",
  clientId: "residence-ui",
  // clientId: "residence-srv",
};

const keycloak = new Keycloak(keycloakConfig);
export default keycloak;
