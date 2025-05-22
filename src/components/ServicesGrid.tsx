const services = [
  { name: "ทองรูปพรรณ", imageUrl: "/services/service1.jpg" },
  { name: "ทองคำแท่ง", imageUrl: "/services/service2.jpg" },
  { name: "รับซื้อทอง", imageUrl: "/services/service3.jpg" },
  { name: "ขายฝากทอง", imageUrl: "/services/service4.jpg" },
  { name: "เช่าสินสอด", imageUrl: "/services/service5.jpg" },
  { name: "ออมทอง", imageUrl: "/services/service6.jpg" },
];

export default function ServicesGrid() {
  return (
    <div className="max-w-6xl mx-auto px-4">
      <h2 className="text-red-700 font-bold text-xl mb-6 text-center">
        สินค้าและบริการ
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {services.map((service, idx) => (
          <div
            key={idx}
            className="relative h-40 rounded-xl overflow-hidden cursor-pointer group"
            onClick={() => alert(`จะไปหน้า: ${service.name}`)}
          >
            <img
              src={service.imageUrl}
              alt={service.name}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-200 group-hover:scale-105 z-0"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />

            <div className="absolute bottom-2 w-full text-center z-20">
              <span className="text-yellow-50 text-lg font-semibold drop-shadow-[0_0_4px_black]">
                {service.name}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
