var stripe = Stripe("INSERT YOUR STRIPE KEY HERE");

var checkoutButton = document.querySelector('#checkout-button');
checkoutButton.addEventListener('click', function () {
  stripe.redirectToCheckout({
    items: [{
      // Define the product and SKU in the Dashboard first, and use the SKU
      // ID in your client-side code.
      sku: 'sku_H3RjDxCUYaKPxg',
      quantity: 1
    }],
    successUrl: 'http://localhost:3000/index',
    cancelUrl: 'http://localhost:3000/index'
  });
});
