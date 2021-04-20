import React, { useEffect, useState } from 'react';

const ViewReviews = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('https://nameless-fjord-98328.herokuapp.com/all-review')
            .then(res => res.json())
            .then(data => {
                setReviews(data)
            })
    }, [])
    return (
        <table className="table">
            <thead>
                <tr>
                    <th scope="col">User Details</th>
                    <th scope="col">Review</th>
                    <th scope="col">Reviewed At</th>
                    <th scope="col">Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    reviews.map(reviewData => {
                        return (
                            <tr key={reviewData._id}>
                                <td>
                                    <p>{reviewData.addedBy?.name}</p>
                                    <p>{reviewData.position}</p>
                                </td>
                                <td>
                                    {reviewData.review}
                                </td>
                                <td>
                                    {reviewData.addedAt}
                                </td>
                                <td>
                                    <button className="btn btn-danger"><i className="fas fa-trash"></i></button>
                                </td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    );
};

export default ViewReviews;