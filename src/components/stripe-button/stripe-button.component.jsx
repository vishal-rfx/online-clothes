import React from 'react'
import StripeCheckout from 'react-stripe-checkout'

function StripeCheckoutButton({price}) {
    const priceForStripe = price*100;
    const PUBLISHABLE_KEY = "pk_test_51K3NjaSBgEBqCbZQ25GcBvA9b7Z7LpT1N2EtatQA9tljAyD9CJZDB86nsfiI8YN6PhhR34iWa1caoT5tc82fWH8Y00RqUy5DU8"

    const onToken = (token) => {
        console.log(token)
        alert(`Payment is successfult for a total price of $${price}`)
    }

    return (
        <div>
            <StripeCheckout
                label='Pay Now'
                name='CLoTh Mart'
                billingAddress
                shippingAddress
                description={`Total Price is $${price}`}
                amount = {priceForStripe}
                panelLabel='Pay Now'
                token={onToken}
                stripeKey = {PUBLISHABLE_KEY}
            />
        </div>
    )
}

export default StripeCheckoutButton
