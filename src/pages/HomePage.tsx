// src/pages/HomePage.tsx
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import GoldPricePanel from "../components/GoldPricePanel";
import RecommendedList from "../components/RecommendedList";
import PromotionSection from "../components/PromotionSection";
import ServicesGrid from "../components/ServicesGrid";
import AboutSection from "../components/AboutSection";
import ArticleList from "../components/ArticleList";
import Footer from "../components/Footer";

export default function HomePage() {
  return (
    <div>
      <Navbar />
      <Banner />
      <section className="bg-red-900 py-6">
        <GoldPricePanel />
      </section>
      <section className="bg-red-200 py-6">
        <RecommendedList />
      </section>
      <section className="bg-yellow-100 py-6">
        <PromotionSection />
      </section>
      <section className="bg-gray-100 py-6">
        <ServicesGrid />
      </section>
      <section className="bg-gray-100 py-6">
        <AboutSection />
      </section>
      <section className="bg-gray-100 py-6">
        <ArticleList />
      </section>
      <Footer />
    </div>
  );
}
