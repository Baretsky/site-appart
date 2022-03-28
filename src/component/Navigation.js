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
                    to="/appart1"
                    className={(nav) => (nav.isActive ? "nav-active" : "")}>
                    <li>Jacobin</li>
                </NavLink>
                <NavLink
                    to="/appart2"
                    className={(nav) => (nav.isActive ? "nav-active" : "")}>
                    <li>Coifferie</li>
                </NavLink>
                <NavLink
                    to="/appart3"
                    className={(nav) => (nav.isActive ? "nav-active" : "")}>
                    <li>Poterne</li>
                </NavLink>
            </ul>
        </div>
    );
};

export default Navigation;