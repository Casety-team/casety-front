import React, { useState, useEffect, useRef } from "react";
import { loadStripe } from "@stripe/stripe-js";
import "./app.css";
import axios from "axios";

const stripePromise = loadStripe(
  "pk_test_51I6xfpGWsM2bVeof75ZGYq7KXzLoNhta0xQFMtwbOZTz6sQKE2200cc7J8QoeGXkILPAve6Wl1zdLRL1TBFaGaQZ00k7zmJZhm"
);

const ProductDisplay = ({ handleClick }) => (
  <section>
    <div className="product">
      <h1>Product 1 </h1>
    </div>
    <button
      type="button"
      id="checkout-button"
      role="link"
      onClick={handleClick}
    >
      Checkout
    </button>
  </section>
);

const Message = ({ message }) => (
  <section>
    <p>{message}</p>
  </section>
);

export default function Stripe() {
  const [message, setMessage] = useState("");

  //form
  const [nameProduct, setNameProduct] = useState("Product 1");
  const [unitAmount, setUnitAmount] = useState(300);
  const [quantity, setQuantity] = useState(3);

  useEffect(() => {
    // Check to see if this is a redirect back from Checkout
    const query = new URLSearchParams(window.location.search);

    if (query.get("success")) {
      setMessage("Order placed! You will receive an email confirmation.");
    }

    if (query.get("canceled")) {
      setMessage(
        "Order canceled -- continue to shop around and checkout when you're ready."
      );
    }
  }, []);

  const handleClick = async (event) => {
    const stripe = await stripePromise;
    const response = await axios.post("http://localhost:4545/stripe/charge", {
      nameProduct: nameProduct,
      unitAmount: unitAmount,
      quantity: quantity,
      reservationId: 1,
      idUser: 1, //change get Location
    });
    const session = await response;
    // When the customer clicks on the button, redirect them to Checkout.
    const result = await stripe.redirectToCheckout({
      sessionId: session.data.id,
    });

    if (result.error) {
      // If `redirectToCheckout` fails due to a browser or network
      // error, display the localized error message to your customer
      // using `result.error.message`.
    }
  };

  return message ? (
    <Message message={message} />
  ) : (
    <ProductDisplay handleClick={handleClick} />
  );
}
