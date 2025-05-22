// Banner.tsx
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";

export default function Banner() {
  return (
    <div className="relative">
      <Swiper
        modules={[Autoplay, Pagination, Navigation, EffectFade]}
        autoplay={{ delay: 4000 }}
        loop={true}
        effect="fade"
        pagination={{ clickable: true }}
        navigation={true}
        className="w-full h-[700px]"
      >
        <SwiperSlide>
          <div className="relative w-full h-full">
            <img
              src="/fbbanner.png"
              alt="1"
              className="w-full h-full object-cover"
            />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="relative w-full h-full">
            <img
              src="/banner1.jpg"
              alt="2"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-20 right-10 transform -translate-x-1/2 bg-yellow-200/70 text-red-800 p-6 rounded-xl max-w-xl shadow-md">
              <h2 className="text-3xl font-bold mb-2">
                เลือกทองแท้...เลือกมณีลักษณ์
              </h2>
              <p className="text-lg">เพราะค่าของคุณคู่ควรกับทองที่ดีที่สุด</p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="relative w-full h-full">
            <img
              src="/banner2.jpg"
              alt="3"
              className="w-full h-full object-cover"
            />

            <div className="absolute top-1/4 left-3/5 bg-white/70 text-red-900 p-6 rounded-xl max-w-xl shadow-lg">
              <h2 className="text-3xl font-bold mb-2">โปรโมชั่นพิเศษ</h2>
              <p className="text-lg">ลดค่ากำเหน็จทันที เมื่อซื้อทองวันนี้!</p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
