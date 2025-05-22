import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import TradingChart from "../components/TradingChart";
import FullPricePanel from "../components/FullPricePanel";
export default function GoldPricePage() {
  return (
    <div>
      <Navbar />
      <section className="bg-gradient-to-r from-red-800 to-yellow-700 py-12 shadow-inner">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <h1 className="text-3xl md:text-4xl font-extrabold drop-shadow-md tracking-wide mb-4">
            ราคาทองคำวันนี้
          </h1>
          <p className="text-lg font-medium opacity-90">
            อัปเดตราคาทองคำแท่งและรูปพรรณจากสมาคมค้าทองคำแห่งประเทศไทย
            <br className="hidden md:block" />
            เปิดบริการซื้อขายตั้งแต่เวลา 08:00 น. ถึง 20:00 น.
          </p>
        </div>
      </section>

      <section className="bg-gray-100 py-6">
        <FullPricePanel />
      </section>
      <section className="bg-white py-10">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-center text-2xl md:text-3xl font-bold text-gray-800 mb-6">
            กราฟราคาทองคำ (Gold(Oz)/THB)
          </h2>
          <div className="bg-gray-100 border border-gray-300 rounded-xl shadow overflow-hidden">
            <TradingChart />
          </div>
          <p className="text-center text-sm text-gray-600 mb-4">
            * ราคาทองคำในกราฟนี้แสดงเป็น{" "}
            <strong>1 ออนซ์ทองคำ (31.1035 กรัม) ต่อ บาทไทย </strong>
            <br />
            ซึ่งเทียบเท่าประมาณ <strong>
              2.04 บาททองคำไทย (15.244 กรัม)
            </strong>{" "}
            ต่อ 1 ออนซ์
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
