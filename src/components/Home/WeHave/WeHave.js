import React from 'react';
import './WeHave.css';

const WeHave = () => {
    return (
        <section className="wehave-section">
            <div className="container py-3">
                <h2 className="section-title text-center"></h2>
                <div className="row">
                    <div className="col-md-4">
                        <div className="p-3 m-2 shadow rounded highlighted-text">
                            <div className="custom-iconbox">
                                <i className="fas fa-users"></i>
                            </div>
                            <h4 className="my-2 text-center">350+ Happy Customer</h4>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="p-3 m-2 shadow rounded highlighted-text">
                            <div className="custom-iconbox">
                                <i className="fas fa-headset"></i>
                            </div>
                            <h4 className="my-2 text-center">24/7 Customer Care</h4>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="p-3 m-2 shadow rounded highlighted-text">
                            <div className="custom-iconbox">
                                <i className="fas fa-user-tie"></i>
                            </div>
                            <h4 className="my-2 text-center">10+ Skilled Team Member</h4>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WeHave;