import React from "react";
import { Link } from "react-router-dom";

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
                <Link className="nav-link" to='/'>Home</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to='/add'>add</Link>
            </li>
        </ul>
    </nav>);
}

export default MenuBar;