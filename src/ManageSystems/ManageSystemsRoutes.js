import React from "react";
import {Route, Switch} from "react-router";
import Manager from "./components/Manager/Manager";
import Resources from "./components/Resources/Resources";
import Permissions from "./components/Permissions/Permissions";
import Roles from "./components/Roles/Roles";
import Users from "./components/Users/Users";
import ManageSystemMenu from "./components/Menu/Menu";
import RoleResource from "./components/RoleResource/RoleResource";
import Access from "./components/Access/Access";
import RolesManagement from "./components/RolesManagement/RolesManagement";
import ResourcePermissions from "./components/ResourcePermissions/ResourcePermissions";
import SystemManagement from "./components/SystemManagement/SystemManagement";
import Events from "./components/Events/Events";

const ManageSystemsRoutes = () => {
  return (
    <Switch>
      <Route key="/dashboard" exact path="/dashboard" component={Manager}/>
      <Route
        key="/Resources"
        exact
        path="/resources/:id"
        component={Resources}
      />
      <Route
        key="/Permissions"
        exact
        path="/permissions"
        component={Permissions}
      />
      <Route key="/Roles" exact path="/roles" component={Roles}/>
      <Route
        key="/Roles-management"
        exact
        path="/roles-management"
        component={RolesManagement}
      />
      <Route
        key="/Roles-management"
        exact
        path="/roles-management/:id"
        component={RolesManagement}
      />
      <Route key="/Users" exact path="/users" component={Users}/>
      <Route
        key="/Menu"
        exact
        path="/menu"
        component={ManageSystemMenu}
      />
      <Route
        key="/Menu"
        exact
        path="/menu/:id"
        component={ManageSystemMenu}
      />
      <Route
        key="/RoleResource"
        exact
        path="/role-resource"
        component={RoleResource}
      />
      <Route key="/Access" exact path="/access" component={Access}/>
      <Route
        key="/ResourcePermissions"
        exact
        path="/resource-permissions"
        component={ResourcePermissions}
      />
      <Route
        key="/SystemManagement"
        exact
        path="/system-management"
        component={SystemManagement}
      />
      <Route
        key="/Events"
        exact
        path="/events"
        component={Events}
      />
      {/*<Route key="/Logout" path="logout" element={<Logout/>}/>;*/}
      {/*<Route key="/Login" path="login" index element={store.getState().user.accessToken ? <Manager/> : <Login/>}/>;*/}
      {/*<Route path="*" element={<Navigate to="login"/>}/>;*/}
    </Switch>
  );
};

export default ManageSystemsRoutes;
