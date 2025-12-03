import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Quiz from "./pages/Quiz";
import AllCategory from "./pages/AllCategory";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import ScrollToTop from "./components/ScrollToTop";
import "./App.css";

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/all-category" element={<AllCategory />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
