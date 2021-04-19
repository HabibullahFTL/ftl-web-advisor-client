import React from 'react';
import product from '../../../img/product.jpg';
import './Service.css';

const Service = () => {
    return (
        <div className="col-md-6 col-lg-4">
            <div className="m-2 shadow bg-white service">
                <img src={product} alt="" className="img-fluid rounded"/>
                <div className="service-details">
                    <h2 className="service-title">Web Development</h2>
                    
                    <div className="service-description">
                        <h5>$150</h5>
                        <p>We are giving best website developmnet...</p></div>
                    <a href="#" className="btn btn-purple d-block"><i className="fas fa-shopping-cart"></i> Take our service</a>
                </div>
            </div>
        </div>
    );
};

export default Service;