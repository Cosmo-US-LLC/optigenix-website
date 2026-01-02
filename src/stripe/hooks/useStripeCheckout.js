import { useState, useEffect, useCallback } from "react";
import {
  fetchStripePrices,
  fetchStripeProductById,
  createPaymentIntent,
  createCheckoutSession,
  calculateTotals,
} from "../services/stripeService";

/**
 * useStripeCheckout Hook
 * 
 * Professional React hook for managing Stripe checkout flow
 * Handles product fetching, payment processing, and state management
 * 
 * @param {Object} options - Hook options
 * @param {string} options.productId - Specific product ID to fetch (optional)
 * @param {Array} options.products - Products array (optional, for direct product list)
 * @param {Function} options.onSuccess - Success callback
 * @param {Function} options.onError - Error callback
 * @returns {Object} Checkout state and methods
 */
export const useStripeCheckout = ({
  productId = null,
  products = null,
  onSuccess = null,
  onError = null,
} = {}) => {
  // State
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [stripeProduct, setStripeProduct] = useState(null);
  const [stripePrices, setStripePrices] = useState([]);
  const [totals, setTotals] = useState({ subtotal: 0, total: 0, itemCount: 0 });

  /**
   * Fetch Stripe product by ID
   */
  const loadProduct = useCallback(async (id) => {
    if (!id) return;

    try {
      setLoading(true);
      setError(null);

      const product = await fetchStripeProductById(id);

      if (product) {
        setStripeProduct(product);
        const calculatedTotals = calculateTotals([
          {
            price: product.amount,
            quantity: 1,
          },
        ]);
        setTotals(calculatedTotals);
        
        // Console log pricing for quiz product
        if (id === "prod_SY2K6QwnWgLby1") {
          console.log("💰 Pricing on QUIZ_PRODUCT:", {
            productId: product.productId,
            productName: product.productName,
            amount: product.amount,
            currency: product.currency || "USD",
            prices: product.prices || [],
            totals: calculatedTotals,
          });
        }
      } else {
        throw new Error(`Product ${id} not found`);
      }
    } catch (err) {
      const errorMessage = err.message || "Failed to load product";
      setError(errorMessage);
      if (onError) onError(err);
    } finally {
      setLoading(false);
    }
  }, [onError]);

  /**
   * Fetch all Stripe prices
   */
  const loadPrices = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);

      const response = await fetchStripePrices();

      if (response.success) {
        setStripePrices(response.prices);
        return response.prices;
      }
    } catch (err) {
      const errorMessage = err.message || "Failed to load prices";
      setError(errorMessage);
      if (onError) onError(err);
    } finally {
      setLoading(false);
    }
  }, [onError]);

  /**
   * Process payment using Payment Intent
   */
  const processPayment = useCallback(
    async (amount, currency = "usd") => {
      try {
        setLoading(true);
        setError(null);

        const response = await createPaymentIntent(amount, currency);

        if (response.success) {
          return response.clientSecret;
        }
      } catch (err) {
        const errorMessage = err.message || "Payment processing failed";
        setError(errorMessage);
        if (onError) onError(err);
        throw err;
      } finally {
        setLoading(false);
      }
    },
    [onError]
  );

  /**
   * Create checkout session and redirect
   */
  const redirectToCheckout = useCallback(
    async ({
      priceId = null,
      products = null,
      email = null,
      metadata = {},
      successUrl = null,
      cancelUrl = null,
    }) => {
      try {
        setLoading(true);
        setError(null);

        const response = await createCheckoutSession({
          priceId,
          products,
          email,
          metadata,
          successUrl,
          cancelUrl,
        });

        if (response.success && response.url) {
          window.location.href = response.url;
        } else {
          throw new Error("Failed to create checkout session");
        }
      } catch (err) {
        const errorMessage = err.message || "Checkout failed";
        setError(errorMessage);
        if (onError) onError(err);
        throw err;
      } finally {
        setLoading(false);
      }
    },
    [onError]
  );

  /**
   * Update totals from products
   */
  const updateTotals = useCallback((productList) => {
    if (!productList || productList.length === 0) {
      setTotals({ subtotal: 0, total: 0, itemCount: 0 });
      return;
    }

    const calculated = calculateTotals(productList);
    setTotals(calculated);
  }, []);

  // Auto-load product if productId is provided
  useEffect(() => {
    if (productId) {
      loadProduct(productId);
    }
  }, [productId, loadProduct]);

  // Auto-calculate totals if products are provided
  useEffect(() => {
    if (products && products.length > 0) {
      updateTotals(products);
    }
  }, [products, updateTotals]);

  return {
    // State
    loading,
    error,
    stripeProduct,
    stripePrices,
    totals,

    // Methods
    loadProduct,
    loadPrices,
    processPayment,
    redirectToCheckout,
    updateTotals,
    clearError: () => setError(null),
  };
};

