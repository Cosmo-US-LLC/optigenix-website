import { BACKEND_URL } from "../config";

/**
 * Stripe Service
 *
 * Professional service layer for all Stripe API interactions
 * This service handles all communication with the backend Stripe endpoints
 */

/**
 * Fetch all active Stripe prices with product details
 * @returns {Promise<Object>} Response with prices array
 */
export const fetchStripePrices = async () => {
  try {
    const response = await fetch(`${BACKEND_URL}/api/prices`);

    if (!response.ok) {
      throw new Error(`Failed to fetch prices: ${response.status}`);
    }

    const data = await response.json();

    if (!data.success) {
      throw new Error(data.error || "Failed to fetch prices");
    }

    return {
      success: true,
      prices: data.prices,
      count: data.count,
    };
  } catch (error) {
    console.error("Stripe Service - fetchStripePrices error:", error);
    throw error;
  }
};

/**
 * Fetch a specific Stripe product by product ID
 * @param {string} productId - Stripe product ID (e.g., "prod_ThiK10GH8xLyCD")
 * @returns {Promise<Object|null>} Product data or null if not found
 */
export const fetchStripeProductById = async (productId) => {
  try {
    const response = await fetchStripePrices();

    if (!response.success) {
      return null;
    }

    const product = response.prices.find(
      (price) => price.productId === productId
    );

    return product || null;
  } catch (error) {
    console.error("Stripe Service - fetchStripeProductById error:", error);
    return null;
  }
};

/**
 * Create a Stripe Payment Intent
 * @param {number} amount - Amount in dollars
 * @param {string} currency - Currency code (default: "usd")
 * @returns {Promise<Object>} Payment intent with client secret
 */
export const createPaymentIntent = async (amount, currency = "usd") => {
  try {
    const response = await fetch(`${BACKEND_URL}/api/create-payment-intent`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        amount,
        currency,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || "Failed to create payment intent");
    }

    const data = await response.json();

    return {
      success: true,
      clientSecret: data.clientSecret,
    };
  } catch (error) {
    console.error("Stripe Service - createPaymentIntent error:", error);
    throw error;
  }
};

/**
 * Create a Stripe Checkout Session
 * @param {Object} options - Checkout session options
 * @param {string|Array} options.priceId - Single price ID or array of price IDs
 * @param {Array} options.products - Array of products (alternative to priceId)
 * @param {string} options.email - Customer email
 * @param {Object} options.metadata - Additional metadata
 * @param {string} options.successUrl - Success redirect URL
 * @param {string} options.cancelUrl - Cancel redirect URL
 * @returns {Promise<Object>} Checkout session with URL
 */
export const createCheckoutSession = async ({
  priceId,
  products,
  email,
  metadata = {},
  successUrl,
  cancelUrl,
}) => {
  try {
    const response = await fetch(`${BACKEND_URL}/api/create-checkout-session`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        priceId,
        products,
        email,
        metadata,
        successUrl,
        cancelUrl,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || "Failed to create checkout session");
    }

    const data = await response.json();

    if (!data.success) {
      throw new Error(data.error || "Failed to create checkout session");
    }

    return {
      success: true,
      sessionId: data.sessionId,
      url: data.url,
    };
  } catch (error) {
    console.error("Stripe Service - createCheckoutSession error:", error);
    throw error;
  }
};

/**
 * Retrieve checkout session details
 * @param {string} sessionId - Stripe checkout session ID
 * @returns {Promise<Object>} Session details with products and order info
 */
export const fetchCheckoutSession = async (sessionId) => {
  try {
    const response = await fetch(
      `${BACKEND_URL}/api/checkout-session/${sessionId}`
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch session: ${response.status}`);
    }

    const data = await response.json();

    if (!data.success) {
      throw new Error(data.error || "Failed to fetch session details");
    }

    return {
      success: true,
      session: data.session,
      products: data.products,
    };
  } catch (error) {
    console.error("Stripe Service - fetchCheckoutSession error:", error);
    throw error;
  }
};

/**
 * Calculate totals from products
 * @param {Array} products - Array of products with price and quantity
 * @returns {Object} Totals object with subtotal and total
 */
export const calculateTotals = (products) => {
  if (!products || products.length === 0) {
    return { subtotal: 0, total: 0, itemCount: 0 };
  }

  const subtotal = products.reduce((sum, product) => {
    const price = product.price || 0;
    const quantity = product.quantity || 1;
    return sum + price * quantity;
  }, 0);

  return {
    subtotal,
    total: subtotal, // Add shipping/taxes here if needed
    itemCount: products.reduce((sum, p) => sum + (p.quantity || 1), 0),
  };
};
