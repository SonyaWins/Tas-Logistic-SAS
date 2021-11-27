import React from "react";

const Navbar = () => {
    return <nav className= "navbar navbar-light navbar-expand">
        <div className= "container">
            <a className="navbar-brand" href="#"> <i className="typcn typcn-flash" />TAS LOGISTIC S.A.S</a>
        </div>
        <button className="navbar-toggler" data-toggle="collapse">
            <span className= "navbar-toggler-icon"></span>
        </button>
    </nav>
}

export default Navbar;