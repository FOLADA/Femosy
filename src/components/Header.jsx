import React from 'react';
import { Link } from "react-router-dom";
import "./Header.css";
import Image from '../images/image.png';

const Header = () => {
    return (
        <header>
            <img src={Image} alt="Logo" className='img-first' />
            <div className="auth-buttons">
                <h2><Link className="link" to={'/'}>Home</Link></h2>
                <h2><Link className="link" to={'/Product'}>Product</Link></h2>
                <h2><Link className="link" to={'/aboutus'}>About Us</Link></h2>
                <h2>Login /</h2>
                <h2>Sign Up</h2>
            </div>
        </header>
    );
};

export default Header;
