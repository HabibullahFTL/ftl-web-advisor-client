import React, { useMemo, useState } from "react";
import {
  useStripe,
  useElements,
  CardNumberElement,
  CardCvcElement,
  CardExpiryElement
} from "@stripe/react-stripe-js";


const useOptions = () => {
  const options = useMemo(
    () => ({
      style: {
        base: {
          fontSize: "16px",
          color: "#424770",
          letterSpacing: "0.025em",
          padding: "10px",
          fontFamily: "Source Code Pro, monospace",
          "::placeholder": {
            color: "#aab7c4"
          }
        },
        invalid: {
          color: "#9e2146"
        }
      }
    })
  );

  return options;
};

const StripeCardForm = ({ handleBooking }) => {
  const stripe = useStripe();
  const elements = useElements();
  const options = useOptions();
  const [bookingDetails, setBookingDetails] = handleBooking;

  const handleSubmit = async event => {
    event.preventDefault();
    console.log(bookingDetails);
    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    const payload = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardNumberElement)
    });

    // For failed transaction
    if (payload.error) {
      const newBookingData = { ...bookingDetails };
      newBookingData.message = payload.error.message;
      setBookingDetails(newBookingData);
    }
    // For successful transaction
    if (payload.paymentMethod) {
      const newBookingData = { ...bookingDetails };
      newBookingData.isSuccess = true;
      newBookingData.message = '';
      newBookingData.paymentDetails = payload.paymentMethod;

      // Sending data to DataBase
      fetch('https://nameless-fjord-98328.herokuapp.com/place-order', {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(newBookingData)
      })
        .then(response => response.json())
        .then(data=>{
          if (data) {
            setBookingDetails(newBookingData);
          }
        })
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Card number
        <CardNumberElement
          options={options}
        />
      </label>
      <div className="row">
        <div className="col-6">
          <label>
            Expiration date
            <CardExpiryElement
              options={options}
            />
          </label>
        </div>
        <div className="col-6">
          <label>
            CVC
            <CardCvcElement
              options={options}
            />
          </label>
        </div>
      </div>
      <h6 className="mt-2">Your Service  charged will be <span className="text-warning">${bookingDetails.serviceDetails.serviceFee}</span> </h6>
      <button type="submit" className="btn btn-purple px-4" disabled={!stripe}>
        Pay
      </button>
    </form>
  );
};

export default StripeCardForm;
