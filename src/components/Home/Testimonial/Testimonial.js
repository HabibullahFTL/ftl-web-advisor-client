import React from 'react';
import reviewer from '../../../img/logo-circle.png';
import './Testimonial.css';

const Testimonial = () => {
    return (
        <div className="col-lg-3 col md-4 col-sm-6">
            <div className="testimonial bg-white m-2">
                <div className="reviewer-details ">
                    <img src={reviewer} alt="" className="img-thumbnail rounded-circle reviewer-photo" />
                    <div className="ms-1">
                        <h6>habibullah Bahar Piash</h6>
                        <p>CEO, Find To Learn</p>
                    </div>
                </div>
                <div className="review-message">
                    Lorem ipsu m, dolo r sit amet consec tetur adip isicing elit. Recusandae quos laboriosam autem error delectus commodi quia impedit itaque debitis suscipit?
                </div>
            </div>
        </div>
    );
};

export default Testimonial;