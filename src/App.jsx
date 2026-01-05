import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout";
import Home from "./pages/Home";
import About from "./pages/About";
import AllCategory from "./pages/AllCategory";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import ScrollToTop from "./components/ScrollToTop";
import "./App.css";
import Athletes from "./pages/Athletes";
import SingleTest from "./pages/SingleTest";
import QuizSecond from "./pages/QuizSecond";
import Waitlist from "./pages/Waitlist";
import Recovery from "./pages/Recovery";
import PhysicalPerformance from "./pages/PhysicalPerformance";
import MentalPerformance from "./pages/MentalPerformance";
import SingleProduct from "./pages/SingleProduct";
import Cart from "./pages/Cart";
import { CartProvider } from "./context/CartContext";
import Checkout from "./pages/Checkout";
import PaymentSuccess from "./pages/PaymentSuccess";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <CartProvider>
      <ScrollToTop />
      <Routes>
        {/* Checkout pages have their own header, so they're outside Layout */}
        <Route path="checkout" element={<Checkout />} />
        <Route path="gene-test/checkout" element={<Checkout />} />
        <Route path="quiz/checkout" element={<Checkout />} />
        <Route path="thank-you" element={<PaymentSuccess />} />
        <Route path="gene-test/thank-you" element={<PaymentSuccess />} />
        <Route path="quiz/thank-you" element={<PaymentSuccess />} />

        {/* All other pages use the Layout */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about-us" element={<About />} />
          <Route path="/quiz" element={<QuizSecond />} />
          {/* <Route path="/quiz" element={<Quiz />} /> */}
          <Route path="all-category" element={<AllCategory />} />
          <Route path="athletes" element={<Athletes />} />
          <Route path="gene-test" element={<SingleTest />} />
          <Route path="recovery" element={<Recovery />} />
          <Route
            path="physical-performance"
            element={<PhysicalPerformance />}
          />
          <Route path="mental-performance" element={<MentalPerformance />} />
          <Route path="product/:productId" element={<SingleProduct />} />
          <Route path="cart" element={<Cart />} />
          <Route path="privacy-policy" element={<PrivacyPolicy />} />
          <Route path="terms-and-conditions" element={<TermsOfService />} />
          <Route path="join-wait-list" element={<Waitlist />} />
        </Route>
        {/* 404 Page - Standalone page matching Figma design (no header/footer) */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </CartProvider>
  );
}

export default App;
