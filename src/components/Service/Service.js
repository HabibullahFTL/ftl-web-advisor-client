import React from 'react';
import product from '../../img/product.jpg';
import './Service.css';

const Service = () => {
    return (
        <div className="col-md-6 col-lg-4">
            <div className="m-2 shadow bg-white service">
                <img src={product} alt="" className="img-fluid rounded"/>
                <div className="service-details">
                    <h2 className="service-title">Web Development</h2>
                    <p className="service-description">We are giving best website developmnet service in bangladesh.</p>
                    <a href="#" className="btn btn-purple">More about the service</a>
                </div>
            </div>
        </div>
    );
};

export default Service;