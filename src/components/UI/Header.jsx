import React from 'react';
import './Header.css';
import { NavLink } from 'react-router-dom';

export const Header = () => {
    return (
        <div className="header-wrapper">
            <header className="custom-header">
                <div className="container text-center">
                    <div className="row row-cols-lg-3 row-cols-3 align-items-center py-3">
                        <div className="col-2 logo-content">
                            <NavLink to={"/"}>
                                <img src="https://clipart-library.com/3/tree-open-clipart-07022019-clipart-xl.png" alt="logo" style={{ width: "60px", height: "80px" }} />
                            </NavLink>
                        </div>
                        <div className="col-8 middle-content">
                            <div className="row row-cols-lg-4 row-cols-1">
                                <NavLink to={"/"}>
                                    <div className="col col-sm-12 col-lg-3">
                                        <span className='nav-link-custom' style={{ textDecoration: "none" }}>Home</span>
                                    </div>
                                </NavLink>
                                <NavLink to={"about"}>
                                    <div className="col col-sm-12 col-lg-3">
                                        <span className='nav-link-custom' style={{ textDecoration: "none" }}>Calculate</span>
                                    </div>
                                </NavLink>
                                <NavLink to={"contact"}>
                                    <div className="col col-sm-12 col-lg-3">
                                        <span className='nav-link-custom' style={{ textDecoration: "none" }}>Image</span>
                                    </div>
                                </NavLink>
                            </div>
                        </div>
                        <div className="col-2 last-content">
                            <NavLink to={"country"}>
                                <button className="login-button">Login</button>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
};