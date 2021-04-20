import React, { useContext, useEffect, useState } from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import StripeCardForm from './StripeCardForm';
import './BookingService.css';
import { UserContext } from '../../App';
import { useParams } from 'react-router';

const BookingService = () => {
    const stripePromise = loadStripe('pk_test_51If81hJIyoGkNEYC7X8C3XORjIqnREXSVdODZhuLiuVJb24t5gDua1t3J40YyyLJ0SHZ3GYPHRNdsW80uLXSxud800YSZLGvDo');

    const { serviceId } = useParams();
    const [loginUserDetails, setLoginUserDetails] = useContext(UserContext);
    const [bookingDetails, setBookingDetails] = useState({
        isSuccess: false,
        customerName: loginUserDetails.name,
        email: loginUserDetails.email,
        serviceDetails: {},
        message: ''
    })

    useEffect(() => {
        fetch('https://nameless-fjord-98328.herokuapp.com/service/?service_id=' + serviceId)
            .then(res => res.json())
            .then(data => {
                const newBookingData = { ...bookingDetails };
                newBookingData.serviceDetails = data;
                setBookingDetails(newBookingData);
            })
    }, [serviceId])

    const handleBookingDataChange = (e) => {
        if (e.target.id === 'customerName') {
            const newBookingData = { ...bookingDetails };
            newBookingData.customerName = e.target.value;
            setBookingDetails(newBookingData)
        }
        if (e.target.id === 'email') {
            const newBookingData = { ...bookingDetails };
            newBookingData.email = e.target.value;
            setBookingDetails(newBookingData)
        }
    }
    return (
        <div className="container booking-service">
            <h4 className="text-center">Booking A Service</h4>
            <div className="row">
                <div className="col-12">
                    {
                        bookingDetails.message && !bookingDetails.isSuccess &&
                        <div className="alert alert-danger alert-dismissible fade show" role="alert">
                            {bookingDetails.message}
                        </div>
                    }
                    {
                        bookingDetails.isSuccess &&
                        <div className="alert alert-success alert-dismissible fade show" role="alert">
                            Service created successfully!
                    </div>
                    }
                </div>
                <div className="col-md-6">
                    <div className="mb-3">
                        <label htmlFor="customerName" className="form-label">Customer Name</label>
                        <input type="text" className="form-control" id="customerName" onChange={handleBookingDataChange} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label"  >Email Address</label>
                        <input type="email" className="form-control" id="email" onChange={handleBookingDataChange} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="serviceTitle" className="form-label">Booking For</label>
                        <input type="text" className="form-control" id="serviceTitle" value={bookingDetails.serviceDetails.serviceTitle} disabled />
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="mb-3">
                        <label htmlFor="creditCard"><input type="radio" id="creditCard" checked /> Credit Card</label>
                        <Elements stripe={stripePromise}>
                            <StripeCardForm handleBooking={[bookingDetails, setBookingDetails]} />
                        </Elements>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookingService;