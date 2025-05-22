import { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "./ProductCard";

interface Product {
  id: number;
  name: string;
  priceEstimate: number;
  type: string;
  weight: number;
  imageUrl?: string;
}

export default function RecommendedList() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get<Product[]>("http://localhost:8080/api/products/recommended")
      .then((res) => {
        setProducts(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching recommended products:", err);
        setLoading(false);
      });
  }, []);

  if (loading)
    return <div className="text-center py-8">กำลังโหลดสินค้าแนะนำ...</div>;

  return (
    <div className="bg-red-200 py-6">
      <h2 className="text-2xl font-bold text-red-800 mb-6 text-center   pb-1">
        สินค้าแนะนำ
      </h2>
      <div
        className="grid gap-6 max-w-6xl mx-auto px-4"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
        }}
      >
        {products.map((p) => (
          <ProductCard
            key={p.id}
            name={p.name}
            price={p.priceEstimate}
            imageUrl={p.imageUrl}
          />
        ))}
      </div>
    </div>
  );
}
