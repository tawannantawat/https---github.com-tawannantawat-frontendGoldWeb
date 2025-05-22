import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

interface Product {
  id: number;
  name: string;
  priceEstimate: number;
  type: string;
  weight: number;
  imageUrl: string;
}

export default function ProductPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [search, setSearch] = useState("");
  const [type, setType] = useState("");
  const [maxPrice, setMaxPrice] = useState(100000);
  const [searchParams] = useSearchParams();
  const [useMaxPrice, setUseMaxPrice] = useState(false);

  useEffect(() => {
    const typeParam = searchParams.get("type");
    if (typeParam) {
      setType(typeParam);
    }
  }, [searchParams]);

  useEffect(() => {
    const fetchFilteredProducts = async () => {
      const params = new URLSearchParams();
      if (search) params.append("name", search);
      if (type) params.append("type", type);
      if (useMaxPrice) params.append("maxPrice", maxPrice.toString());

      const res = await fetch(
        `http://localhost:8080/api/products/filter?${params.toString()}`
      );
      const data = await res.json();
      setProducts(data);
    };

    fetchFilteredProducts();
  }, [search, type, maxPrice, useMaxPrice]);

  return (
    <div>
      <Navbar />

      <section className="bg-gradient-to-r from-red-800 to-yellow-700 py-20 shadow-inner relative">
        <div className="max-w-5xl mx-auto px-6 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-extrabold drop-shadow-md tracking-wide mb-4">
            สินค้า
          </h1>
          <p className="text-lg font-light opacity-90">
            เลือกชมสินค้าทองคำแท้ จากห้างทองมณีลักษณ์
            พร้อมบริการจัดส่งและรับประกันคุณภาพ
          </p>
        </div>
      </section>

      <div className="flex flex-col md:flex-row bg-[#f9f9f9] min-h-screen">
        {/* Sidebar filter */}
        <aside className="w-full md:w-1/4 bg-white p-6 border-r">
          <h2 className="text-2xl font-bold mb-6 text-red-700">ค้นหาสินค้า</h2>
          <input
            type="text"
            placeholder="ค้นหาชื่อสินค้า..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full p-3 mb-6 border border-gray-300 rounded focus:outline-red-600"
          />

          <label className="block mb-2 font-medium text-gray-700">
            ราคาสูงสุด (บาท)
          </label>

          <input
            type="number"
            value={maxPrice}
            onChange={(e) => setMaxPrice(Number(e.target.value))}
            disabled={!useMaxPrice}
            className={`w-full p-3 mb-6 border border-gray-300 rounded ${
              !useMaxPrice ? "bg-gray-100 cursor-not-allowed" : ""
            }`}
          />
          <label className="flex items-center gap-2 mb-4">
            <input
              type="checkbox"
              checked={useMaxPrice}
              onChange={() => setUseMaxPrice((prev) => !prev)}
              className="w-4 h-4"
            />
            <span className="text-gray-700 font-medium">
              เปิดการกรองราคาสูงสุด
            </span>
          </label>

          <label className="block mb-2 font-medium text-gray-700">
            หมวดหมู่
          </label>
          <select
            className="w-full p-3 border border-gray-300 rounded"
            value={type}
            onChange={(e) => setType(e.target.value)}
          >
            <option value="">ทั้งหมด</option>
            <option value="สร้อย">สร้อย</option>
            <option value="แหวน">แหวน</option>
            <option value="กำไลข้อมือ">กำไลข้อมือ</option>
          </select>
        </aside>

        {/* Product Grid */}
        <main className="flex-1 p-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white p-4 rounded-2xl shadow-md hover:shadow-xl transition duration-300 border border-yellow-300"
            >
              <img
                src={product.imageUrl || "/placeholder.png"}
                alt={product.name}
                className="w-full h-48 object-cover rounded mb-3"
              />
              <h3 className="font-semibold text-lg text-gray-800 mb-1">
                {product.name}
              </h3>
              <p className="text-sm text-gray-500 mb-1">
                {product.type} — {product.weight} กรัม
              </p>
              <p className="text-xl font-bold text-red-600 mb-3">
                ฿{product.priceEstimate.toLocaleString()}
              </p>
              <button className="w-full bg-gradient-to-r from-yellow-400 to-yellow-500 text-red-900 font-semibold py-2 rounded-lg shadow hover:from-yellow-500 hover:to-yellow-600 transition">
                หยิบใส่ตะกร้า
              </button>
            </div>
          ))}
        </main>
      </div>

      <Footer />
    </div>
  );
}
