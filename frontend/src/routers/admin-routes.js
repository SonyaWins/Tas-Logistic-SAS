import UserPage from "views/Account.js";
import Ordenes from "views/Ordenes.js"
import Puertos from "views/Puertos.js"

var routes = [
  {
    path: "/perfil",
    name: "Perfil",
    icon: "nc-icon nc-single-02",
    component: UserPage,
    layout: "/admin",
  },
  {
    path: "/ordenes",
    name: "Ordenes",
    icon: "nc-icon nc-tile-56",
    component: Ordenes,
    layout: "/admin",
  },
  {
    path: "/puertos",
    name: "Puertos",
    icon: "nc-icon nc-tile-56",
    component: Puertos,
    layout: "/admin",
  }
];

export default routes;