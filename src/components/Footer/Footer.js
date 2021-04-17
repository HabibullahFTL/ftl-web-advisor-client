import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-md-3 col-sm-6 p-3">
                        <h5>Address</h5>
                        <i className="fas fa-map-marker-alt"></i> H#000 (0th Floor), Road #00,<br/>
                                        New DOHS, Mohakhali, Dhaka, Bangladesh

                    </div>
                    <div className="col-md-3 col-sm-6 p-3 company-links">
                        <h5>Company</h5>
                        <ul>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Project</a></li>
                            <li><a href="#">Our Team</a></li>
                            <li><a href="#">Term & Conditions</a></li>
                        </ul>
                    </div>
                    <div className="col-md-3 col-sm-6 p-3 company-links">
                        <h5>Quick Links</h5>
                        <ul>
                            <li><a href="#">Contact</a></li>
                            <li><a href="#">Our Blog</a></li>
                        </ul>
                    </div>
                    <div className="col-md-3 col-sm-6 p-3">
                        <h5>Company</h5>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur eos totam culpa autem consectetur minima asperiores, officia rerum voluptates reiciendis.</p>
                        <ul className="social-media">
                            <li><a href="#"><i className="fab fa-facebook-square"></i></a></li>
                            <li><a href="#"><i className="fab fa-twitter-square"></i></a></li>
                            <li><a href="#"><i className="fab fa-linkedin"></i></a></li>
                            <li><a href="#"><i className="fab fa-youtube"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;