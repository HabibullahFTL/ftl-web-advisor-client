import React, { useContext, useState } from 'react';
import { UserContext } from '../../../App';
import { Redirect } from 'react-router-dom';

const CreateReview = () => {
    const [loginUserDetails, setLoginUserDetails] = useContext(UserContext);
    const [errMessage, setErrMessage] = useState("");
    const [isAddedReview, setIsAddedReview] = useState(false);
    const [reviewDetails, setReviewDetails] = useState({
        position: '',
        ratings: 5,
        review: '',
        addedBy: loginUserDetails
    })

    const handleReviewSubmit = () => {
        if (reviewDetails.position && reviewDetails.ratings && reviewDetails.review) {
            setErrMessage("");

            fetch('https://nameless-fjord-98328.herokuapp.com/add-review', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(reviewDetails)
            })
                .then(response => response.json())
                .then(data => {
                    if (!data.message) {
                        setErrMessage("");
                        setIsAddedReview(true)
                    } else {
                        setErrMessage(data.message);
                    }
                })
        } else {
            setErrMessage("Any field must not empty");
        }

    }

    const handleReviewChange = (e) => {
        const dataTarget = e.target;
        if (dataTarget.id === 'position') {
            const newReviewData = { ...reviewDetails };
            newReviewData.position = dataTarget.value;
            newReviewData.addedBy = loginUserDetails;
            // For Deleting some unnesseserry info
            delete newReviewData.addedBy.isSignIn;
            delete newReviewData.addedBy.errMessage;

            // Updating Review Data
            setReviewDetails(newReviewData);
        }

        if (dataTarget.id === 'ratings') {
            const newReviewData = { ...reviewDetails };
            newReviewData.ratings = dataTarget.value;
            newReviewData.addedBy = loginUserDetails;
            // For Deleting some unnesseserry info
            delete newReviewData.addedBy.isSignIn;
            delete newReviewData.addedBy.errMessage;

            // Updating Review Data
            setReviewDetails(newReviewData);
        }

        if (dataTarget.id === 'review') {
            const newReviewData = { ...reviewDetails };
            newReviewData.review = dataTarget.value;
            newReviewData.addedBy = loginUserDetails;
            // For Deleting some unnesseserry info
            delete newReviewData.addedBy.isSignIn;
            delete newReviewData.addedBy.errMessage;

            // Updating Review Data
            setReviewDetails(newReviewData);
        }
    }
    return (
        <div className="row">
            <div className="col-md-6 m-auto">
                <div className="mb-3">
                    {
                        isAddedReview && <Redirect to="/" />
                    }
                    {
                        errMessage &&
                        <div className="alert alert-danger alert-dismissible fade show" role="alert">
                            {errMessage}
                        </div>
                    }
                </div>
                <div className="mb-3">
                    <label htmlFor="position" className="form-label">Your Position(Example- CEO, XYZ Ltd.)</label>
                    <input type="text" className="form-control" id="position" onChange={handleReviewChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="ratings" className="form-label">Give Ratings </label>
                    <select id="ratings" onChange={handleReviewChange}>
                        <option value="5">5 Star</option>
                        <option value="4">4 Star</option>
                        <option value="3">3 Star</option>
                        <option value="2">2 Star</option>
                        <option value="1">1 Star</option>
                    </select>
                </div>
                <div className="mb-3">
                    <label htmlFor="review" className="form-label">Your Review</label>
                    <textarea className="form-control" id="review" onChange={handleReviewChange}></textarea>
                </div>
                <div className="text-center">
                    <button className="btn btn-purple px-5 btn-md" onClick={handleReviewSubmit}>Submit Review</button>
                </div>
            </div>
        </div>
    );
};

export default CreateReview;