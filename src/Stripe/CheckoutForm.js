import React from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import axios from "axios";

import AuthService from "../services/auth.service";

export const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    const currentUser = AuthService.getCurrentUser();
    event.preventDefault();
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });

    if (!error) {
      try {
        const { id } = paymentMethod;
        const response = await axios.post(
          "http://localhost:4545/stripe/charge",
          {
            amount: 100,
            id: id,
          }
        );
        if (response.data.success) {
          const result = await axios.post(
            "http://localhost:4545/stripe/charge/buy/user",
            {
              user_id: currentUser.id,
              buy: true
            }
          );
          if (result.data.success) { 
              alert('ok')
          }
        }
      } catch (error){}
    } else {}
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: 400 }}>
      <CardElement />
      <button>Pay</button>
    </form>
  );
};