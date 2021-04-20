import React, { useEffect, useState } from 'react';
import './TestimonialList.css';
import Testimonial from '../Testimonial/Testimonial';

const TestimonialList = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('https://nameless-fjord-98328.herokuapp.com/all-review')
            .then(res => res.json())
            .then(data => {
                setReviews(data)
            })
    }, [])
    return (
        <section className="testimonial-section">
            <div className="container py-3">
                <h2 className="section-title text-center"></h2>
                <div className="row">
                    {reviews.map(review=><Testimonial review={review}></Testimonial>)}
                </div>
            </div>
        </section>
    );
};

export default TestimonialList;