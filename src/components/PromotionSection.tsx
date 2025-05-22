const promotions = [
  {
    imageUrl: "/promo1.jpg",
    alt: "ซื้อครบ 1000 บาท แถมร่ม",
  },
  {
    imageUrl: "/promo2.jpg",
    alt: "ทายเลขถูก รับฟรีแก้วน้ำ",
  },
];

export default function PromotionSection() {
  return (
    <div className="max-w-6xl mx-auto px-4">
      <h2 className="text-red-700 font-bold text-xl mb-6 text-center">
        โปรโมชั่น
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {promotions.map((promo, idx) => (
          <div
            key={idx}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition flex flex-col"
          >
            <img
              src={promo.imageUrl}
              alt={promo.alt}
              className="w-full h-80 object-cover"
            />
            <div className="p-4 flex flex-col flex-1 justify-between">
              <p className="text-red-800 font-semibold text-sm mb-2 text-center">
                {promo.alt}
              </p>
              <button
                className="mt-auto bg-red-700 text-white text-sm py-2 rounded hover:bg-red-800 transition"
                onClick={() => alert(`อ่านเพิ่มเติม: ${promo.alt}`)} // ใส่ลิงก์
              >
                อ่านเพิ่มเติม
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
