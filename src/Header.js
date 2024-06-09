import React from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
    return (
        <header>

            <span><NavLink to="/" exact><img src='logo.webp' alt="Logo" style={{ width: 100 }} /></NavLink></span>
            <div id="menu">
                <ul>
                    <li><NavLink to="/cats">Cats</NavLink></li>
                    <li><NavLink to="/dogs">Dogs</NavLink></li>
                    <li><NavLink to="/birds">Birds</NavLink></li>
                </ul>
            </div>
        </header>
    );
}

export default Header;
