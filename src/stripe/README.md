# Stripe Payment Integration - Professional Module

A complete, reusable Stripe payment solution that can be used anywhere in your application.

## 📁 Structure

```
src/stripe/
├── services/
│   └── stripeService.js      # API service layer
├── hooks/
│   └── useStripeCheckout.js   # React hook for checkout flow
├── components/
│   ├── StripeProvider.jsx     # Stripe Elements wrapper
│   ├── StripeCheckoutForm.jsx # Reusable payment form
│   └── StripeProductDisplay.jsx # Product display component
├── config.js                  # Configuration
└── index.js                   # Main exports
```

## 🚀 Quick Start

### Basic Usage - Single Product Checkout

```jsx
import { StripeProvider, useStripeCheckout, StripeCheckoutForm, StripeProductDisplay } from '@/stripe';

function MyCheckoutPage() {
  const { stripeProduct, totals, processPayment } = useStripeCheckout({
    productId: 'prod_ThiK10GH8xLyCD',
    onSuccess: (paymentIntent) => {
      console.log('Payment successful!', paymentIntent);
      // Redirect or show success message
    },
    onError: (error) => {
      console.error('Payment failed:', error);
    },
  });

  return (
    <StripeProvider>
      <div>
        {/* Display Product */}
        {stripeProduct && (
          <StripeProductDisplay 
            product={stripeProduct} 
            quantity={1}
          />
        )}

        {/* Payment Form */}
        <StripeCheckoutForm
          amount={totals.total}
          onSuccess={(paymentIntent) => console.log('Success!', paymentIntent)}
          onError={(error) => console.error('Error:', error)}
          onCreatePaymentIntent={processPayment}
        />
      </div>
    </StripeProvider>
  );
}
```

### Usage - Multiple Products

```jsx
import { useStripeCheckout, StripeProductDisplay } from '@/stripe';

function CartPage() {
  const products = [
    { priceId: 'price_123', quantity: 2 },
    { priceId: 'price_456', quantity: 1 },
  ];

  const { totals, redirectToCheckout } = useStripeCheckout({
    products: products,
  });

  const handleCheckout = async () => {
    await redirectToCheckout({
      products: products,
      email: 'customer@example.com',
      successUrl: window.location.origin + '/success',
      cancelUrl: window.location.origin + '/cart',
    });
  };

  return (
    <div>
      <div>Total: ${totals.total}</div>
      <button onClick={handleCheckout}>Checkout</button>
    </div>
  );
}
```

### Usage - Custom Product List

```jsx
import { useStripeCheckout, StripeProductDisplay } from '@/stripe';

function ProductListPage() {
  const { stripePrices, loadPrices } = useStripeCheckout();

  useEffect(() => {
    loadPrices();
  }, []);

  return (
    <div>
      {stripePrices.map((product) => (
        <StripeProductDisplay 
          key={product.productId}
          product={product}
          size="lg"
        />
      ))}
    </div>
  );
}
```

## 📚 API Reference

### `useStripeCheckout` Hook

**Parameters:**
- `productId` (string, optional) - Specific Stripe product ID to fetch
- `products` (array, optional) - Array of products for checkout
- `onSuccess` (function, optional) - Success callback
- `onError` (function, optional) - Error callback

**Returns:**
- `loading` (boolean) - Loading state
- `error` (string|null) - Error message
- `stripeProduct` (object|null) - Single product data
- `stripePrices` (array) - All available prices
- `totals` (object) - { subtotal, total, itemCount }
- `loadProduct(id)` (function) - Load specific product
- `loadPrices()` (function) - Load all prices
- `processPayment(amount, currency)` (function) - Create payment intent
- `redirectToCheckout(options)` (function) - Redirect to Stripe Checkout
- `updateTotals(products)` (function) - Calculate totals
- `clearError()` (function) - Clear error state

### `StripeCheckoutForm` Component

**Props:**
- `amount` (number, required) - Payment amount
- `onSuccess` (function, required) - Success callback
- `onError` (function, required) - Error callback
- `formData` (object) - Customer form data
- `useShippingAsBilling` (boolean) - Use shipping as billing
- `setUseShippingAsBilling` (function) - Setter for billing option
- `clientSecret` (string, optional) - Pre-created client secret
- `onCreatePaymentIntent` (function, optional) - Create payment intent callback

### `StripeProductDisplay` Component

**Props:**
- `product` (object, required) - Stripe product object
- `quantity` (number, default: 1) - Product quantity
- `showImage` (boolean, default: true) - Show product image
- `showDescription` (boolean, default: true) - Show description
- `showPrice` (boolean, default: true) - Show price
- `showProductId` (boolean, default: false) - Show product ID
- `size` (string, default: "md") - Size variant: "sm" | "md" | "lg"

### Service Functions

```javascript
import {
  fetchStripePrices,
  fetchStripeProductById,
  createPaymentIntent,
  createCheckoutSession,
  calculateTotals,
} from '@/stripe';
```

## 💡 Examples

### Example 1: Simple Product Page

```jsx
function ProductPage({ productId }) {
  const { stripeProduct, totals, redirectToCheckout } = useStripeCheckout({
    productId,
  });

  return (
    <StripeProvider>
      <StripeProductDisplay product={stripeProduct} />
      <StripeCheckoutForm
        amount={totals.total}
        onSuccess={() => alert('Success!')}
        onError={(err) => alert(err.message)}
      />
    </StripeProvider>
  );
}
```

### Example 2: Mini Cart Component

```jsx
function MiniCart() {
  const cartItems = [
    { priceId: 'price_123', quantity: 1 },
  ];

  const { totals, redirectToCheckout } = useStripeCheckout({
    products: cartItems,
  });

  return (
    <div>
      <div>Total: ${totals.total}</div>
      <button onClick={() => redirectToCheckout({ products: cartItems })}>
        Checkout
      </button>
    </div>
  );
}
```

## ✅ Benefits

1. **Reusable** - Use anywhere in your app
2. **Professional** - Clean separation of concerns
3. **Type-safe** - Well-documented API
4. **Flexible** - Supports multiple use cases
5. **Maintainable** - Easy to update and extend
