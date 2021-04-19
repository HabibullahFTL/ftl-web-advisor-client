import React from 'react';

const CreateReview = () => {
    return (
        <div className="row">
            <div className="col-md-6 m-auto">
                <div class="mb-3">
                    <label htmlFor="position" class="form-label">Your Position(Example- CEO, XYZ Ltd.)</label>
                    <input type="text" class="form-control" id="position" />
                </div>
                <div class="mb-3">
                    <label htmlFor="ratings" class="form-label">Give Ratings </label>
                    <select id="ratings">
                        <option value="1">One Star</option>
                        <option value="2">Two Star</option>
                        <option value="3">Three Star</option>
                        <option value="4">Four Star</option>
                        <option value="5">Five Star</option>
                    </select>
                </div>
                <div class="mb-3">
                    <label htmlFor="review" class="form-label">Your Review</label>
                    <textarea class="form-control" id="review" ></textarea>
                </div>
                <div className="text-center">
                <button className="btn btn-purple px-5 btn-md">Submit Review</button>
                </div>
            </div>
        </div>
    );
};

export default CreateReview;