import React from 'react';
import './Home.css';
import device from '../../img/device.gif';

const Home = () => {
    return (
        <section className="home-section">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 section-child d-flex justify-content-center flex-column">
                        <h1>
                            Welcome To
                            <span className="brand-name">FTL Web Advisor</span>
                        </h1>
                        <p>We are always ready to give our best to our client.</p>
                        <a href="#" className="btn btn-purple btn-contact">Get in Contact</a>
                    </div>
                    <div className="col-md-6 d-none section-child  d-md-block text-center">
                        <img src={device} className="img-fluid" alt=""/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home;