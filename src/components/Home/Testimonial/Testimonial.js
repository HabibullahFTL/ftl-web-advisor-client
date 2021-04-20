import React from 'react';
import reviewer from '../../../img/logo-circle.png';
import './Testimonial.css';

const Testimonial = ({review}) => {
    return (
        <div className="col-lg-3 col md-4 col-sm-6">
            <div className="testimonial bg-white m-2">
                <div className="reviewer-details ">
                    <img src={review?.addedBy?.photo} alt="" className="img-thumbnail rounded-circle reviewer-photo" />
                    <div className="ms-1">
                        <h6>{review?.addedBy.name}h</h6>
                        <p>{review?.position}</p>
                    </div>
                </div>
                <div className="review-message">
                    {review?.review}
                </div>
            </div>
        </div>
    );
};

export default Testimonial;