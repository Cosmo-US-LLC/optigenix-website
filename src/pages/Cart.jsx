import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { benefitIcons } from "../data/categoryData.jsx";
import MetaTags from "../components/PageComponents/MetaTags/MetaTags";

const Cart = () => {
  const navigate = useNavigate();
  const { cartItems, removeFromCart, updateQuantity, getCartTotal } = useCart();
  const [specialInstructions, setSpecialInstructions] = useState("");

  const handleQuantityChange = (productId, type) => {
    const item = cartItems.find((item) => item.id === productId);
    if (!item) return;

    if (type === "increase") {
      updateQuantity(productId, item.quantity + 1);
    } else if (type === "decrease") {
      updateQuantity(productId, item.quantity - 1);
    }
  };

  const handleCheckout = () => {
    // TODO: Implement checkout functionality
    console.log("Proceeding to checkout...", {
      items: cartItems,
      total: getCartTotal(),
      specialInstructions,
    });
    alert("Checkout functionality coming soon!");
  };

  const subtotal = getCartTotal();
  const shipping = subtotal > 0 ? 0 : 0; // Free shipping for now
  const tax = subtotal * 0.08; // 8% tax
  const total = subtotal + shipping + tax;

  return (
    <>
      <MetaTags
        title="Shopping Cart | OptiGenix"
        description="Review your cart and checkout"
      />
      <div className="min-h-screen bg-white">
        <div className="max-w-[1320px] mx-auto px-5 py-16">
          <h1 className="font-funnel font-bold text-5xl text-[#010907] mb-8">
            Your cart
          </h1>

          {cartItems.length === 0 ? (
            // Empty Cart State
            <div className="text-center py-20">
              <h2 className="font-funnel font-semibold text-2xl text-[#010907] mb-4">
                Your cart is empty
              </h2>
              <button
                onClick={() => navigate("/all-category")}
                className="bg-[#0d8360] text-white font-funnel font-semibold text-base py-3 px-8 rounded-full border-none cursor-pointer transition-colors duration-300 hover:bg-[#0a6b50] mt-4"
              >
                Continue shopping
              </button>
            </div>
          ) : (
            // Cart with Items
            <div className="grid lg:grid-cols-3 grid-cols-1 gap-12">
              {/* Cart Items - Left Side */}
              <div className="lg:col-span-2">
                <div className="flex flex-col gap-6">
                  {cartItems.map((item) => (
                    <div
                      key={item.id}
                      className="flex gap-6 p-6 bg-[#f7f7f7] rounded-2xl"
                    >
                      {/* Product Image */}
                      <div
                        className="w-32 h-32 rounded-xl overflow-hidden bg-gradient-to-br from-[#0d8360] to-[#042b24] flex-shrink-0 cursor-pointer"
                        onClick={() => navigate(`/product/${item.id}`)}
                      >
                        <div className="w-full h-full flex items-center justify-center text-5xl text-white/30 font-bold font-funnel">
                          {item.title.charAt(0)}
                        </div>
                      </div>

                      {/* Product Details */}
                      <div className="flex-1 flex flex-col gap-3">
                        <div className="flex justify-between items-start">
                          <div>
                            <h3
                              className="font-funnel font-semibold text-xl text-[#010907] mb-1 cursor-pointer hover:text-[#0d8360] transition-colors"
                              onClick={() => navigate(`/product/${item.id}`)}
                            >
                              {item.title}
                            </h3>
                            <p className="font-inter text-sm text-[rgba(1,9,7,0.75)]">
                              {item.description}
                            </p>
                          </div>
                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="text-[rgba(1,9,7,0.5)] hover:text-red-600 transition-colors cursor-pointer font-inter text-sm underline"
                          >
                            Remove
                          </button>
                        </div>

                        {/* Benefits */}
                        <div className="flex flex-wrap gap-3">
                          {item.benefits.slice(0, 3).map((benefit, index) => (
                            <div
                              key={index}
                              className="flex items-center gap-1 text-xs"
                            >
                              <span className="text-base">
                                {benefitIcons[benefit.icon] || "•"}
                              </span>
                              <span className="font-inter text-[rgba(1,9,7,0.75)]">
                                {benefit.text}
                              </span>
                            </div>
                          ))}
                        </div>

                        {/* Quantity and Price */}
                        <div className="flex justify-between items-center mt-2">
                          <div className="flex items-center gap-0 border-2 border-[#e5e5e5] rounded-lg overflow-hidden">
                            <button
                              onClick={() =>
                                handleQuantityChange(item.id, "decrease")
                              }
                              className="w-8 h-8 bg-white border-none cursor-pointer text-lg text-[#010907] hover:bg-gray-100 transition-colors duration-300"
                            >
                              −
                            </button>
                            <input
                              type="number"
                              value={item.quantity}
                              readOnly
                              className="w-12 h-8 border-none text-center font-inter text-sm font-semibold"
                            />
                            <button
                              onClick={() =>
                                handleQuantityChange(item.id, "increase")
                              }
                              className="w-8 h-8 bg-white border-none cursor-pointer text-lg text-[#010907] hover:bg-gray-100 transition-colors duration-300"
                            >
                              +
                            </button>
                          </div>

                          <div className="font-funnel font-bold text-xl text-[#010907]">
                            ${(item.price * item.quantity).toFixed(2)}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Special Instructions */}
                <div className="mt-8">
                  <label className="font-funnel font-semibold text-base text-[#010907] mb-2 block">
                    Order special instructions
                  </label>
                  <textarea
                    value={specialInstructions}
                    onChange={(e) => setSpecialInstructions(e.target.value)}
                    placeholder="Add any special instructions for your order..."
                    className="w-full h-24 p-4 border-2 border-[#e5e5e5] rounded-lg font-inter text-sm resize-none focus:outline-none focus:border-[#0d8360] transition-colors"
                  />
                </div>
              </div>

              {/* Order Summary - Right Side */}
              <div className="lg:col-span-1">
                <div className="sticky top-24">
                  <div className="bg-[#f7f7f7] rounded-2xl p-6">
                    <h2 className="font-funnel font-bold text-2xl text-[#010907] mb-6">
                      Order Summary
                    </h2>

                    <div className="flex flex-col gap-4 mb-6">
                      <div className="flex justify-between font-inter text-base">
                        <span className="text-[rgba(1,9,7,0.75)]">
                          Subtotal
                        </span>
                        <span className="font-semibold text-[#010907]">
                          ${subtotal.toFixed(2)}
                        </span>
                      </div>
                      <div className="flex justify-between font-inter text-base">
                        <span className="text-[rgba(1,9,7,0.75)]">
                          Shipping
                        </span>
                        <span className="font-semibold text-[#010907]">
                          {shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}
                        </span>
                      </div>
                      <div className="flex justify-between font-inter text-base">
                        <span className="text-[rgba(1,9,7,0.75)]">
                          Estimated Tax
                        </span>
                        <span className="font-semibold text-[#010907]">
                          ${tax.toFixed(2)}
                        </span>
                      </div>
                      <div className="h-px bg-[rgba(0,0,0,0.1)]" />
                      <div className="flex justify-between font-funnel text-xl">
                        <span className="font-semibold text-[#010907]">
                          Total
                        </span>
                        <span className="font-bold text-[#0d8360]">
                          ${total.toFixed(2)} USD
                        </span>
                      </div>
                    </div>

                    <p className="font-inter text-xs text-[rgba(1,9,7,0.6)] mb-4">
                      Taxes, discounts and shipping calculated at checkout.
                    </p>

                    <button
                      onClick={handleCheckout}
                      className="w-full bg-[#0d8360] text-white font-funnel font-semibold text-lg py-4 px-6 rounded-full border-none cursor-pointer transition-colors duration-300 hover:bg-[#0a6b50] mb-4"
                    >
                      Check out
                    </button>

                    {/* Login Prompt */}
                    <div className="text-center mb-4">
                      <p className="font-inter text-sm text-[rgba(1,9,7,0.75)]">
                        Have an account?{" "}
                        <button
                          onClick={() => navigate("/login")}
                          className="text-[#0d8360] underline hover:text-[#0a6b50] transition-colors cursor-pointer bg-transparent border-none font-semibold"
                        >
                          Log in
                        </button>{" "}
                        to check out faster.
                      </p>
                    </div>

                    {/* Recurring Purchase Notice */}
                    <div className="text-xs text-[rgba(1,9,7,0.6)] leading-relaxed font-inter">
                      One or more of the items in your cart is a recurring or
                      deferred purchase. By continuing, I agree to the
                      cancellation policy and authorize you to charge my payment
                      method at the prices, frequency and dates listed on this
                      page until my order is fulfilled or I cancel, if
                      permitted.
                    </div>
                  </div>

                  {/* Continue Shopping Link */}
                  <button
                    onClick={() => navigate("/all-category")}
                    className="w-full mt-4 text-[#0d8360] font-funnel font-semibold text-base underline hover:text-[#0a6b50] transition-colors bg-transparent border-none cursor-pointer py-2"
                  >
                    ← Continue shopping
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Cart;

