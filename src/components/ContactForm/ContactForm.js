import React from 'react';
import './ContactForm.css';

const ContactForm = () => {
    return (
        <section className="contact-section container p-5 mb-3">
            <h2 className="text-center">Let us handle your project, professionally.</h2>
            <div className="row">
                <div className="col-md-6 p-2">
                    <div className="mb-3">
                        <input type="email" className="form-control" placeholder="First Name"/>
                    </div>
                </div>
                <div className="col-md-6 p-2">
                    <div className="mb-3">
                        <input type="email" className="form-control" placeholder="Last Name"/>
                    </div>
                </div>
                <div className="col-md-6 p-2">
                    <div className="mb-3">
                        <input type="email" className="form-control" placeholder="Email Address"/>
                    </div>
                </div>
                <div className="col-md-6 p-2">
                    <div className="mb-3">
                        <input type="email" className="form-control" placeholder="Mobile Number"/>
                    </div>
                </div>
                <div className="col-md-12 p-2">
                    <div className="mb-3">
                        <textarea type="email" className="form-control" placeholder="Your Message"></textarea>
                    </div>
                </div>
                <div className="col-md-12 text-center">
                    <input type="submit" value="Send Your Message" className="btn btn-purple"/>
                </div>
            </div>
        </section>
    );
};

export default ContactForm;