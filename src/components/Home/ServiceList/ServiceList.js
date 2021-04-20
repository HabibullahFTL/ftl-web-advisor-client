import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './ServiceList.css';

const ServiceList = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('https://nameless-fjord-98328.herokuapp.com/all-services')
            .then(res => res.json())
            .then(data => {
                if (data.length > 3) {
                    const newData = [data[0], data[1], data[2]];
                    setServices(newData);
                } else {
                    setServices(data)
                }
            })
    }, [])
    return (
        <section className="services-section">
            <div className="container py-3">
                <h2 className="section-title text-center"></h2>
                <div className="row">
                    {
                        services.map(service => <Service key={service._id} service={service}></Service>)
                    }
                </div>
                <a href="#" className="btn btn-purple m-auto my-3 d-block btn-contact">Explore More...</a>
            </div>
        </section>
    );
};

export default ServiceList;