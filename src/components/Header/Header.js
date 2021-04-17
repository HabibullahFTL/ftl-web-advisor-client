import React from 'react';
import logo from '../../img/logo.png';
import './Header.css';

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <a className="navbar-brand" href="#">
                    <img src={logo} alt="FTL WEB ADVISOR" style={{height:"45px"}} />
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Our Portfolio</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Out Team</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Contact us</a>
                        </li>
                        <li className="nav-item">
                            <a className="btn btn-purple px-5" href="/Login">Login</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Header;