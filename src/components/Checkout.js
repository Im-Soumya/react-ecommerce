import React, { useState, useEffect } from "react";
import { commerce } from "../lib/commerce";
import { loadStripe } from "@stripe/stripe-js";
import Review from "./Review";
import { Elements, CardElement, ElementsConsumer, useStripe, useElements } from "@stripe/react-stripe-js";

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY)

export default function Checkout({ cart, onCaptureCheckout }) {
  const [checkoutToken, setCheckoutToken] = useState(null)

  const stripe = useStripe()
  const elements = useElements()

  useEffect(() => {
    const generateToken = async () => {
      try {
        const token = await commerce.checkout.generateToken(cart.id, { type: "cart" })
        setCheckoutToken(token)
      } catch (e) {
        console.log(e.message)
      }
    }

    generateToken();
  }, [cart])

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!stripe || !elements) return;

    const cardElement = elements.getElement(CardElement)

    const { error, paymentMethod } = await stripe.createPaymentMethod({ type: "cart", card: cardElement })

    if (error) {
      console.log(error.message)
    } else {
      const order = {
        payment: {
          gateway: "stripe",
          stripe: {
            payment_method_id: paymentMethod.id,
          }
        }
      }
      onCaptureCheckout(checkoutToken.id, order)
    }

  }

  const Payment = () => {
    <div className=" mx-7 text-lg border-1 border-slate-800 px-3 py-4 rounded-lg">
      <Elements stripe={stripePromise}>
        <ElementsConsumer>
          {() => (
            <form onSubmit={(e) => handleSubmit(e)}>
              {/* <CardElement>
                  <br /><br />
                  <button>Pay</button>
                </CardElement> */}
            </form>
          )}
        </ElementsConsumer>
      </Elements>
    </div>
  }

  return (
    <>
      <Review checkoutToken={checkoutToken} handleSubmit />
      <h3
        className="text-xl my-5 mx-7"
      >Subtotal ({cart.total_items} items): <strong>{cart.subtotal.formatted_with_symbol}</strong></h3>
      <Payment />
    </>
  )
}