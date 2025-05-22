import { useEffect, useState } from "react";
import { RotateCw } from "lucide-react";
import { FaCoins } from "react-icons/fa";

interface PriceBoxProps {
  title: string;
  buyPrice: number;
  sellPrice: number;
  bgColor?: string;
}

function PriceBox({
  title,
  buyPrice,
  sellPrice,
  bgColor = "bg-yellow-50",
}: PriceBoxProps) {
  return (
    <div className={`flex-1  border rounded-xl shadow-md overflow-hidden`}>
      {/* หัวเรื่องบนพื้นสี */}
      <div className={`${bgColor} px-6 py-4`}>
        <h2 className="text-2xl font-extrabold text-gray-800 flex items-center justify-between">
          <span>{title}</span>
          <FaCoins className="text-yellow-500 w-7 h-7" />
        </h2>
      </div>

      {/* ตารางราคา */}
      <div className="grid grid-cols-2 text-center text-base font-semibold border-t">
        <div className="py-3 border-r text-gray-600 bg-gray-50">
          ราคารับซื้อ
        </div>
        <div className="py-3 text-gray-600 bg-gray-50">ราคาขายออก</div>

        <div className="py-6 text-3xl font-bold text-green-700 border-r bg-white">
          {buyPrice.toLocaleString("th-TH", { minimumFractionDigits: 2 })}
        </div>
        <div className="py-6 text-3xl font-bold text-red-700 bg-white">
          {sellPrice.toLocaleString("th-TH", { minimumFractionDigits: 2 })}
        </div>
      </div>
    </div>
  );
}

interface GoldPriceData {
  barBuy: number;
  barSell: number;
  jewelryBuy: number;
  jewelrySell: number;
}

export default function GoldPricePanel() {
  const [goldData, setGoldData] = useState<GoldPriceData | null>(null);
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null);
  const [loading, setLoading] = useState(false);

  const fetchGoldPrice = async () => {
    try {
      setLoading(true);
      const res = await fetch("http://localhost:8080/api/gold-price");
      const data = await res.json();
      setGoldData(data);
      setLastUpdated(new Date());
    } catch (err) {
      console.error("ไม่สามารถโหลดราคาทองได้:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchGoldPrice();
    const interval = setInterval(fetchGoldPrice, 5 * 60 * 1000); // ทุก 5 นาที
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-yellow-200 py-6 px-4 rounded-lg shadow-inner">
      <div className="flex items-center justify-between max-w-4xl mx-auto mb-4">
        <div>
          <h2 className="text-2xl md:text-3xl font-extrabold text-red-800 tracking-wide">
            ราคาทองคำวันนี้
          </h2>
          <p className="text-sm text-gray-500">
            {lastUpdated
              ? `อัปเดตล่าสุด จากสมาคมทองคำประเทศไทย: ${lastUpdated.toLocaleString(
                  "th-TH"
                )}`
              : "กำลังโหลดข้อมูล..."}
          </p>
        </div>
        <button
          onClick={fetchGoldPrice}
          disabled={loading}
          className="flex items-center gap-1 bg-yellow-400 hover:bg-yellow-500 text-white font-semibold px-4 py-2 rounded shadow"
        >
          <RotateCw className={`w-5 h-5 ${loading ? "animate-spin" : ""}`} />
          รีเฟรช
        </button>
      </div>

      <div className="flex flex-col md:flex-row gap-4 max-w-4xl mx-auto">
        <PriceBox
          title="ทองคำแท่ง 96.5%"
          buyPrice={goldData?.barBuy ?? 0}
          sellPrice={goldData?.barSell ?? 0}
          bgColor="bg-yellow-50"
        />
        <PriceBox
          title="ทองรูปพรรณ 96.5%"
          buyPrice={goldData?.jewelryBuy ?? 0}
          sellPrice={goldData?.jewelrySell ?? 0}
          bgColor="bg-blue-50"
        />
      </div>
    </div>
  );
}
