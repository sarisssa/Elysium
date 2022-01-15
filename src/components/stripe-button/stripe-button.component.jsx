import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStrip = price * 100;
    const publishableKey = 'pk_test_Vxiv5prmmrFF3JiM8hLtFcfi00iWXo8hou'

    const onToken = token => {
        console.log(token);
        alert('Success!')
    } 

    return (
        <StripeCheckout
            label='Pay Now'
            name='ELYSM Clothing'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={priceForStrip}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    );
};

export default StripeCheckoutButton;
