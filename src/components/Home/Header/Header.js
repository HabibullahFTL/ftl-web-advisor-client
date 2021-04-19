import React from 'react';
import device from '../../../img/device.gif';
import NavBar from '../NavBar/NavBar';
import { Link } from "react-router-dom";
import './Header.css';

const Header = () => {
    return (
        <>
        <NavBar></NavBar>
        <section className="home-section">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 section-child d-flex justify-content-center flex-column">
                        <h1>
                            Welcome To
                        <span className="brand-name">FTL Web Advisor</span>
                        </h1>
                        <p>We are always ready to give our best to our client.</p>
                        <Link to="/contact" className="btn btn-purple btn-contact">Get in Contact</Link>
                    </div>
                    <div className="col-md-6 d-none section-child  d-md-block text-center">
                        <img src={device} className="img-fluid" alt="" />
                    </div>
                </div>
            </div>
        </section>
        </>
    );
};

export default Header;