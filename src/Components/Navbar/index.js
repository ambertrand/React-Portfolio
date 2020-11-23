import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return(
        <nav className="navbar navbar-expand-lg bg-light">
            <Link to="/" className="item navbar-brand m-3">Home</Link>
            <Link to="/about" className="item navbar-brand m-3">About Me</Link>
            <Link to="/portfolio" className="item navbar-brand m-3">Projects</Link>
            <Link to="/contact" className="item navbar-brand m-3">Contact</Link>
        </nav>
    )
}

export default Navbar;