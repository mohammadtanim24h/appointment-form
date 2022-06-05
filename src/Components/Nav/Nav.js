import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container">
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarTogglerDemo01"
                        aria-controls="navbarTogglerDemo01"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div
                        className="collapse navbar-collapse"
                        id="navbarTogglerDemo01"
                    >
                        <a className="navbar-brand">KnockOnce</a>
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <span className="nav-link">
                                    <Link
                                        className="text-decoration-none"
                                        to="/"
                                    >
                                        Home
                                    </Link>
                                </span>
                            </li>
                            <li className="nav-item">
                                <span className="nav-link">
                                    <Link
                                        className="text-decoration-none"
                                        to="/appointment"
                                    >
                                        Make Appointment
                                    </Link>
                                </span>
                            </li>
                            <li className="nav-item">
                                <span className="nav-link">Link</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Nav;
