import React from 'react';
import { NavLink } from "react-router-dom";

const Navigation = () => {
    return (
        <div className="navigation">
            <ul>
                <NavLink
                    to="/"
                    className={(nav) => (nav.isActive ? "nav-active" : "")}>
                    <li>Acceuil</li>
                </NavLink>
                <NavLink
                    to="/coifferie"
                    className={(nav) => (nav.isActive ? "nav-active" : "")}>
                    <li>Coifferie</li>
                </NavLink>
                <NavLink
                    to="/jacobin"
                    className={(nav) => (nav.isActive ? "nav-active" : "")}>
                    <li>Jacobin</li>
                </NavLink>
                <NavLink
                    to="/poterne"
                    className={(nav) => (nav.isActive ? "nav-active" : "")}>
                    <li>Poterne</li>
                </NavLink>
                <NavLink
                    to="/contact"
                    className={(nav) => (nav.isActive ? "nav-active" : "")}>
                    <li>Contact</li>
                </NavLink>
            </ul>
        </div>
    );
};

export default Navigation;