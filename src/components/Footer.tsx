export default function Footer() {
  return (
    <footer className="bg-[#c7b26b] py-8 text-sm text-gray-900">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
        {/* ซ้าย: โลโก้ + ชื่อร้าน */}
        <div className="flex flex-col items-start gap-2">
          <div className="flex items-center gap-3">
            <img
              src="/logonb.png"
              alt="Maneelak Logo"
              className="w-14 h-14 rounded-full object-cover"
            />
            <div>
              <div className="text-xl font-bold text-red-700">
                ห้างทองมณีลักษณ์
              </div>
              <div className="text-lg font-light">Maneelak Gold</div>
            </div>
          </div>
          <div className="text-xs text-gray-800 mt-2">
            จำหน่ายและรับซื้อ เครื่องประดับทุกชนิด ทอง นาก เงิน เพชรแท้ พลอยแท้
            รับ ทำสี ซ่อม เครื่องประดับ เลี่ยมกรอบกันน้ำ กรอบพระ รอรับได้เลย
          </div>
        </div>

        {/* กลาง: ติดต่อเรา */}
        <div className="space-y-2">
          <div className="font-bold">ติดต่อเรา</div>
          <div className="flex items-center gap-2">
            <img src="/linelogo.webp" alt="line" className="w-5 h-5" />
            @maneelakgold
          </div>
          <div className="flex items-center gap-2">
            <img src="/facebooklogo.png" alt="fb" className="w-5 h-5" />
            Maneelak Gold
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xl">📞</span>
            099-126-6599
          </div>
        </div>

        {/* ขวา: ใบรับรอง + ช่องทางชำระเงิน */}
        <div className="space-y-2">
          <div className="font-bold">เครื่องหมายรับรอง</div>
          <img src="/samakom.png" alt="certified" className="w-20" />
          <div className="font-bold mt-2">ช่องทางการชำระเงิน</div>
          <div className="flex items-center gap-2 flex-wrap">
            <img src="/visa.png" alt="visa" className="w-10" />
            <img src="/mastercard.png" alt="mc" className="w-10" />
            <img src="/promptpay.webp" alt="pp" className="w-10" />
          </div>
        </div>
      </div>

      {/* ลิขสิทธิ์ล่าง */}
      <div className="text-center text-xs mt-6 text-gray-800">
        © 2025 Maneelak Gold. All rights reserved.
      </div>
    </footer>
  );
}
