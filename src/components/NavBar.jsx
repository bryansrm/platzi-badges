import React from 'react';

import './styles/Navbar.css';
import logo from '../assets/images/badge-header.svg';

const NavBar = () => (

    <div className="Navbar">
        <div className="container-fluid">
            <a className="Navbar__brand" href="/">
                <img className="Navbar__brand-logo" src={logo} alt="Logo" />
                <span className="font-weight-light">Conference&nbsp;</span>
                <span className="font-weight-bold">Badges</span>
            </a>
        </div>
    </div>

);

export default NavBar;