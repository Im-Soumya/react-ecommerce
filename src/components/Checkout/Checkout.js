import React, { useState, useEffect } from "react";
import { Paper, Stepper, Step, StepLabel, Typography, CircularProgress, Divider, Button } from "@mui/material";
import AddressForm from "./AddressForm";
import PaymentForm from "./PaymentForm";
import { Link, useNavigate } from "react-router-dom";

import { commerce } from "../../lib/commerce";

const steps = ['Shipping Address', 'Payment details']

export default function Checkout({ cart, order, onCaptureCheckout, error }) {
  const [activeStep, setActiveStep] = useState(0)
  const [checkoutToken, setCheckoutToken] = useState(null)
  const [shippingData, setShippingData] = useState({})
  const [isFinished, setIsFinished] = useState(false)

  let navigate = useNavigate()

  useEffect(() => {
    const generateToken = async () => {
      try {
        const token = await commerce.checkout.generateToken(cart.id, { type: 'cart' })
        console.log(token)
        setCheckoutToken(token)
      } catch {
        if (activeStep !== steps.length) navigate("/")
      }
    }

    generateToken()
  }, [cart])

  const nextStep = () => setActiveStep(prevState => prevState + 1)
  const backStep = () => setActiveStep(prevState => prevState - 1)

  const next = (data) => {
    setShippingData(data)
    nextStep()
  }

  const Form = () => activeStep === 0
    ? <AddressForm checkoutToken={checkoutToken} next={next} />
    : <PaymentForm shippingData={shippingData} checkoutToken={checkoutToken} backStep={backStep} onCaptureCheckout={onCaptureCheckout} nextStep={nextStep} timeout={timeout} />

  let Confirmation = () => order.customer ? (
    <>
      <div>
        <Typography variant="h5">Thank you for your purchase, {order.customer.firstName} {order.customer.lastName}</Typography>
        <Divider />
        <Typography variant="subtitle2">Order ref: {order.customer.reference}</Typography>
      </div>
      <br />
      <Button variant="outlined" type="button" component={Link} to="/">Back to Home</Button>
    </>
  ) : isFinished ? (
    <>
      <div>
        <Typography variant="h5">Thank you for your purchase</Typography>
        <Divider />
      </div>
      <br />
      <Button variant="outlined" type="button" component={Link} to="/">Back to Home</Button>
    </>
  ) : (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <CircularProgress />
    </div>
  )

  if (error) {
    <>
      <Typography variant="h5">Error: {error}</Typography>
      <br />
      <Button component={Link} variant="outlined" type="button">Back to Home</Button>
    </>
  }

  const timeout = () => {
    setTimeout(() => {
      setIsFinished(true)
    }, 3000)
  }

  return (
    <>
      <main className="flex h-screen">
        <Paper sx={{ padding: "20px", margin: "auto", width: "800px" }}>
          <Typography variant="h4" align="center" sx={{ marginBottom: "20px" }}>Checkout</Typography>
          <Stepper active={activeStep}>
            {steps.map((step) => (
              <Step key={step} sx={{ marginBottom: "20px" }}>
                <StepLabel>{step}</StepLabel>
              </Step>
            ))}
          </Stepper>
          {activeStep === steps.length ? <Confirmation /> : checkoutToken && <Form />}
        </Paper>
      </main>
    </>
  )
}