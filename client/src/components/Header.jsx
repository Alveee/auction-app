import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <nav className="navbar navbar-expand-md navbar-light">
            <div className="container">
                <Link to="/" className="navbar-brand">
                    <img src="images/logo.svg" className="mr-3" alt="" width="30" height="24" /> Auction App
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <ul className="navbar-nav ms-auto mb-2 mb-md-0">
                        <li className="nav-item">
                            <a className="nav-link">
                                <span className="me-3">User Name</span>
                                <img className="rounded-circle" src="images/default-user-image.png" alt="user name" width="32" height="32"/>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Header;