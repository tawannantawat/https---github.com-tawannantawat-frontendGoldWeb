// src/App.tsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import GoldPricePage from "./pages/GoldPricePage";
import ProductPage from "./pages/ProductPage";
import ServicePage from "./pages/ServicePage";
import PromotionPage from "./pages/PromotionPage";
import ArticlePage from "./pages/ArticlePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/gold-price" element={<GoldPricePage />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/services" element={<ServicePage />} />
        <Route path="/promotions" element={<PromotionPage />} />
        <Route path="/articles" element={<ArticlePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
