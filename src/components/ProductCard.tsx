import { useState } from "react";

interface ProductCardProps {
  name: string;
  price: number;
  imageUrl?: string;
  oldPrice?: number;
}

export default function ProductCard({
  name,
  price,
  oldPrice,
  imageUrl,
}: ProductCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="bg-white shadow-md rounded-xl p-4 text-center  transition-shadow flex flex-col items-center">
      <div
        className="w-full h-68 mb-3 overflow-hidden cursor-pointer group"
        onClick={() => setIsModalOpen(true)}
      >
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={name}
            className="h-full w-full object-contain transition-transform duration-200 ease-in-out group-hover:scale-120"
          />
        ) : (
          "🖼"
        )}
      </div>

      <div className="text-sm mb-1">{name}</div>
      {oldPrice && (
        <div className="text-red-400 line-through text-xs">
          ฿{oldPrice.toLocaleString()}
        </div>
      )}
      <div className="text-orange-600 font-semibold mb-2">
        ฿{price.toLocaleString()}
      </div>
      <button className="bg-red-700 text-white px-4 py-1 text-sm rounded hover:bg-red-800">
        หยิบใส่ตะกร้า
      </button>

      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
          onClick={() => setIsModalOpen(false)}
        >
          <img
            src={imageUrl}
            alt={name}
            className="max-w-[90%] max-h-[90%] rounded-lg shadow-lg"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
}
