import { connect } from 'react-redux';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

import { clearAllFromCart } from '../../redux/cart/cart.actions';

const StripeCheckoutButton = ({ price, clearAllFromCart }) => {

    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_Vxiv5prmmrFF3JiM8hLtFcfi00iWXo8hou'

    const onToken = token => {
        // const stripeLoad = {
        //     amount: priceForStripe,
        //     token: token
        // }
        // axios.post(`payment`, stripeLoad)
        //     .then(response => {
        clearAllFromCart();
        alert('Payment Success!');
        // })
        // .catch(error => {
        //     console.log('Error: ', error);
        //     alert(
        //         'There was an issue with your payment.'
        //     );
        // });
    }

    return (
        <StripeCheckout
            label='Pay Now'
            name='ELYSM Clothing'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    );
};

const mapDispatchToProps = dispatch => ({
    clearAllFromCart: () => dispatch(clearAllFromCart())
});

export default connect(null, mapDispatchToProps)(StripeCheckoutButton);

