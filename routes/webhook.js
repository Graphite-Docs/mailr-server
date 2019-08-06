var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
const stripe = require('stripe')('');
const endpointSecret = '';

function handleCheckoutSession(session) {
    console.log(session)
}

router.post('/stripe', (request, response) => {
const sig = request.headers['stripe-signature'];

let event;

try {
    event = stripe.webhooks.constructEvent(request.body, sig, endpointSecret);
} catch (err) {
    console.log(err);
    return response.status(400).send(`Webhook Error: ${err.message}`);
}

// Handle the checkout.session.completed event
if (event.type === 'checkout.session.completed') {
    const session = event.data.object;

    // Fulfill the purchase...
    handleCheckoutSession(session);
}

// Return a response to acknowledge receipt of the event
response.json({received: true});
});
  

module.exports = router;
