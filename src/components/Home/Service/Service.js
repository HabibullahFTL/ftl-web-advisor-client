import React from 'react';
import './Service.css';

const Service = ({service}) => {
    const {_id,serviceTitle,serviceDescription,serviceFee,photo} = service;
    return (
        <div className="col-md-6 col-lg-4">
            <div className="m-2 shadow bg-white service">
                <img src={photo} alt="" className="img-fluid rounded"/>
                <div className="service-details">
                    <h2 className="service-title">{serviceTitle}</h2>
                    
                    <div className="service-description">
                        <h5>${serviceFee}</h5>
                        <p>{serviceDescription}</p></div>
                    <a href={"/booking/service/"+_id} className="btn btn-purple d-block"><i className="fas fa-shopping-cart"></i> Take the service</a>
                </div>
            </div>
        </div>
    );
};

export default Service;