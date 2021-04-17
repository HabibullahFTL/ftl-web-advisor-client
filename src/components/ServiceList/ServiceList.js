import React from 'react';
import Service from '../Service/Service';
import './ServiceList.css';

const Services = () => {
    return (
        <section className="services-section">
            <div className="container py-3">
                <h2 className="section-title text-center"></h2>
                <div className="row">
                    <Service/>
                    <Service/>
                    <Service/>
                </div>
                    <a href="#" className="btn btn-purple m-auto my-3 d-block btn-contact">Explore More...</a>
            </div>
        </section>
    );
};

export default Services;