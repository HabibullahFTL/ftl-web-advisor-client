import React from 'react';
import './TestimonialList.css';
import Testimonial from '../Testimonial/Testimonial';

const TestimonialList = () => {
    return (
        <section className="testimonial-section">
            <div className="container py-3">
                <h2 className="section-title text-center"></h2>
                <div className="row">
                    <Testimonial></Testimonial>
                    <Testimonial></Testimonial>
                    <Testimonial></Testimonial>
                    <Testimonial></Testimonial>
                </div>
            </div>
        </section>
    );
};

export default TestimonialList;