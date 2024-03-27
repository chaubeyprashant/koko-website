import React from 'react';
import './header.css'
import Logo from '../../assets/logo.png.png'

const Header = () => {
    return (
        <header className="header">
            <div className="row">
                <div className="logo">
                    <img src={Logo} alt="Logo" />
                </div>
            </div>
            <nav className="nav-links">
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Shop</a></li>
                    <li><a href="#">Training</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
