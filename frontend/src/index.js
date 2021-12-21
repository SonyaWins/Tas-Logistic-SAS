/*!

=========================================================
* Paper Dashboard React - v1.3.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-dashboard-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

* Licensed under MIT (https://github.com/creativetimofficial/paper-dashboard-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React, { useState } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect} from "react-router-dom";

import "bootstrap/dist/css/bootstrap.css";
import "assets/scss/paper-dashboard.scss?v=1.3.0";
import "assets/demo/demo.css";
import "perfect-scrollbar/css/perfect-scrollbar.css";

import Admin from "layouts/Admin.js";
import User from "layouts/User.js";
import Auth from "layouts/Auth.js";

const App = () => {
  const [auth, setAuth] = useState("");
  let layout, path;

  switch (auth) {
    case "user":
      path = "/user/";
      layout = <Route path={path} render={(props) => <User {...props} />} />
      break;
    case "admin":
      path = "/admin/";
      layout = <Route path={path} render={(props) => <Admin {...props} />} />
      break;
    default:
      path = "/auth";
      layout = <Route path={path} render={(props) => <Auth setAuth={setAuth} {...props} />} />
      break;
  }

  return (
    <BrowserRouter>
      <Switch>
        {layout}
        <Redirect to={path} />
      </Switch>
    </BrowserRouter>
  );
}
ReactDOM.render(<App />, document.getElementById("root"));
