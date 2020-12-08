import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import StripeCheckout from "../components/StripeCheckout";
import "../stripe.css";

// load stripe outside of components
const promise = loadStripe(
  "pk_test_51HiatODQf8KGCCucnmhDalmETu8Bt1KfmqpAhDCg8AecDLwLxXHLy3AN4nrBwS9CATdv0dcNpr9WBuPGqH7f3Xvd00LrVHipa4"
);

const Payment = () => {
  return (
    <div className="container p-5 text-center">
      <h4>Complete your purchase</h4>
      <Elements stripe={promise}>
        <div className="col-md-8 offset-md-2">
          <StripeCheckout />
        </div>
      </Elements>
    </div>
  );
};

export default Payment;
