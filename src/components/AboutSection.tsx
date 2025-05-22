export default function AboutSection() {
  return (
    <div className="max-w-6xl mx-auto px-4 text-center">
      <h2 className="text-red-700 font-bold text-2xl mb-6">เกี่ยวกับเรา</h2>

      {/* วิดีโอ */}
      <div className="w-full h-64 md:h-80 rounded-xl overflow-hidden shadow-lg mb-6">
        <video controls className="w-full h-full object-cover">
          <source
            src="https://nrgerwjvlnqmivaopeax.supabase.co/storage/v1/object/public/vdo//sinsod.mp4"
            type="video/mp4"
          />
          เบราว์เซอร์ของคุณไม่รองรับวิดีโอ
        </video>
      </div>

      <div className="bg-white shadow rounded-xl p-6  mx-auto text-gray-800 text-base leading-relaxed font-light text-left  space-y-4">
        <p className="indent-8">
          <span className="font-bold"> ห้างทองมณีลักษณ์</span>{" "}
          ยินดีให้บริการลูกค้าทุกท่านด้วยความจริงใจและเป็นกันเอง
          เราเข้าใจความต้องการของลูกค้าในทุกสถานการณ์ ไม่ว่าจะ
          <span className="font-bold"> ซื้อ</span>,
          <span className="font-bold"> ขาย</span>,
          <span className="font-bold"> ฝาก</span> หรือ
          <span className="font-bold"> ออมทอง</span>{" "}
          เราเชื่อว่าความไว้วางใจคือหัวใจของบริการที่ยั่งยืน
        </p>
        <p>
          ทุกบริการของเราได้รับการออกแบบอย่างพิถีพิถัน เพื่อให้ลูกค้าได้รับ
          <span className="font-bold"> ความสบายใจ</span>,
          <span className="font-bold"> ความโปร่งใส</span> และ
          <span className="font-bold"> ความคุ้มค่า</span>ที่สุด
        </p>
        <p>
          พร้อมด้วย <span className="font-bold">ทีมงานคุณภาพ</span>{" "}
          ที่พร้อมให้คำปรึกษาอย่างมืออาชีพ
          เพื่อสร้างประสบการณ์ที่ดีที่สุดให้กับลูกค้าทุกท่าน
        </p>
      </div>
    </div>
  );
}
