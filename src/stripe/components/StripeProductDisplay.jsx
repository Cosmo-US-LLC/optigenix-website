/**
 * StripeProductDisplay Component
 *
 * Reusable component for displaying Stripe product information
 * Can be used in checkout, cart, product pages, etc.
 *
 * @param {Object} props
 * @param {Object} props.product - Stripe product object
 * @param {number} props.quantity - Product quantity (default: 1)
 * @param {boolean} props.showImage - Show product image (default: true)
 * @param {boolean} props.showDescription - Show product description (default: true)
 * @param {boolean} props.showPrice - Show product price (default: true)
 * @param {boolean} props.showProductId - Show product ID (default: false)
 * @param {string} props.size - Size variant: "sm" | "md" | "lg" (default: "md")
 */
const StripeProductDisplay = ({
  product,
  quantity = 1,
  showImage = true,
  showDescription = true,
  showPrice = true,
  showProductId = false,
  size = "md",
}) => {
  console.log(product);

  if (!product) {
    return (
      <div className="py-4 text-center">
        <p className="text-inter text-[14px] text-[rgba(0,0,0,0.56)]">
          No product information available
        </p>
      </div>
    );
  }

  // Size variants
  const sizeClasses = {
    sm: {
      container: "gap-2",
      image: "w-12 h-12",
      title: "text-[12px]",
      description: "text-[11px]",
      price: "text-[12px]",
      badge: "w-5 h-5 text-[10px]",
    },
    md: {
      container: "gap-4",
      image: "w-16 h-16",
      title: "text-[14px]",
      description: "text-[12px]",
      price: "text-[14px]",
      badge: "w-6 h-6 text-xs",
    },
    lg: {
      container: "gap-6",
      image: "w-20 h-20",
      title: "text-[16px]",
      description: "text-[14px]",
      price: "text-[16px]",
      badge: "w-8 h-8 text-sm",
    },
  };

  const classes = sizeClasses[size];

  return (
    <div className="flex justify-between items-center">
      <div className={`flex flex-1 items-center ${classes.container}`}>
        {showImage && (
          <div
            className={`relative ${classes.image} w-[80px] h-[80px] rounded-xl bg-[#eeece4] shadow-sm shrink-0`}
          >
            {product.images && product.images.length > 0 ? (
              <img
                src={product.images[0]}
                alt={product.productName}
                className="object-cover w-full h-full rounded-xl border-2 border-white"
                onError={(e) => {
                  e.target.style.display = "none";
                  const fallback = e.target.nextElementSibling;
                  if (fallback) fallback.style.display = "flex";
                }}
              />
            ) : null}
            <div
              className={`w-full h-full rounded-xl border-2 border-white bg-[#eeece4] flex items-center justify-center ${
                product.images && product.images.length > 0 ? "hidden" : ""
              }`}
            >
              <span className="text-2xl">📦</span>
            </div>
            {quantity > 1 && (
              <div
                className={`absolute -top-1 -right-1 bg-[#010907] border-2 border-white rounded-lg ${classes.badge} flex items-center justify-center`}
              >
                <span className="font-semibold text-white">{quantity}</span>
              </div>
            )}
          </div>
        )}
        <div className="flex-1 min-w-0">
          <div
            className={`font-funnel font-medium ${classes.title} text-[#010907] leading-[21px] mb-1`}
          >
            {product.productName}
          </div>
          {showDescription && (
            <div
              className={`text-inter ${classes.description} text-[rgba(0,0,0,0.56)] leading-[18px] line-clamp-2`}
            >
              {product.description || "Product from Stripe"}
            </div>
          )}
          {product.recurring && (
            <div
              className={`text-inter text-[11px] text-[rgba(0,0,0,0.4)] mt-1`}
            >
              {product.recurring.interval} subscription
            </div>
          )}
          {showProductId && (
            <div
              className={`text-inter text-[10px] text-[rgba(0,0,0,0.3)] mt-1`}
            >
              Product ID: {product.productId}
            </div>
          )}
        </div>
      </div>
      {showPrice && (
        <div className="flex flex-col items-end ml-4 text-right">
          <div
            className={`font-inter font-bold ${classes.price} text-[#010907] uppercase`}
          >
            ${product.amount.toFixed(2)}
          </div>
          {product.currency && product.currency !== "USD" && (
            <div className={`text-inter text-[10px] text-[rgba(0,0,0,0.4)]`}>
              {product.currency}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default StripeProductDisplay;
