import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ArticleList from "../components/ArticleList";
export default function ArticlePage() {
  return (
    <div>
      <Navbar />

      <h1>กำลังพัฒนา</h1>
      <ArticleList />
      <Footer />
    </div>
  );
}
