import React, { useState } from "react";

// javascript plugin used to create scrollbars on windows
import PerfectScrollbar from "perfect-scrollbar";
import { useLocation } from "react-router-dom";

import {
    Card,
    CardBody,
    CardHeader,
    NavItem,
    NavLink,
    Nav,
    Input
} from "reactstrap";

import Login from "../components/Forms/Login.js"
import SignUp from "../components/Forms/SignUp.js"
import { Button } from "bootstrap";

var ps;

function hello(){
  console.log("ok work it!")
}

function Auth(props) {
  const [tab, setTab] = useState(0);

  const mainPanel = React.useRef();
  const location = useLocation();
  
  React.useEffect(() => {
    if (navigator.platform.indexOf("Win") > -1) {
      ps = new PerfectScrollbar(mainPanel.current);
      document.body.classList.toggle("perfect-scrollbar-on");
    }
    return function cleanup() {
      if (navigator.platform.indexOf("Win") > -1) {
        ps.destroy();
        document.body.classList.toggle("perfect-scrollbar-on");
      }
    };
  });
  
  React.useEffect(() => {
    mainPanel.current.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
  }, [location]);
  
  const onClickHandle = (e) => {
    e.preventDefault();
    if (tab === 1) {
      setTab(0);
    } else {
      setTab(1);
    }
  }

  return (
    <div Style="background-color: #f4f3ef;" className="wrapper">
    	<div className="container h-100 d-flex" ref={mainPanel}>
        <Card className="ml-auto mr-auto my-auto">
          
          <CardHeader>
            <Nav className="nav-tabs" variant="tabs" defaultActiveKey="#first">
              <NavItem>
                <NavLink 
                  className={tab === 0? "active" : ""}
                  onClick={(e) => onClickHandle(e)} href="#first">
                    Ingresar
                  </NavLink>    
              </NavItem>


              <NavItem>
                <NavLink 
                  className={tab === 1? "active" : ""}
                  onClick={(e) => onClickHandle(e)} href="#link">
                    Crear Cuenta
                  </NavLink>
              </NavItem>
            </Nav>
          </CardHeader>

          <CardBody>
            {tab === 0? <Login onClick="hello()" /> : <SignUp />}
          </CardBody>
        </Card> 
      </div>
    </div>
  );
}

export default Auth;
