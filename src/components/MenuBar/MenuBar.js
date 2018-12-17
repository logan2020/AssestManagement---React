import React from "react";
import { NavLink } from "react-router-dom";

import logo from "../../logo.svg";
import './MenuBar.css'

const MenuBar= () => {
    return (
    <nav data-component="menu-bar" className="navbar navbar-expand-sm bg-dark navbar-dark">
        <ul className="navbar-nav">
            <li className="nav-item">
                <img src={logo} alt="Logo comes here" />
            </li>
            <li className="nav-item">
                <NavLink exact={true} className="nav-link" to='/'>Home</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link" to='/add'>add</NavLink>
            </li>
        </ul>
    </nav>);
}

export default MenuBar;