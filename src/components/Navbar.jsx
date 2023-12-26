import React from 'react';
import { Link } from 'react-router-dom';

export const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">

            <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className="nav-link" to="/">
                            Home
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/about">
                            About
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/clist">
                            Clist
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/alumni">
                            Alumni
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/faculty">
                            Faculty
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

