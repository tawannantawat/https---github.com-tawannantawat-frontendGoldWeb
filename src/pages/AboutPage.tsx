import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import About from "../components/AboutSection";
export default function AboutPage() {
  return (
    <div>
      <Navbar />

      <About />
      <Footer />
    </div>
  );
}

// export default function DashboardPage() {
//   return (
//     <div className="p-6 space-y-6">
//       <h1 className="text-3xl font-bold">แดชบอร์ดร้านทอง</h1>

//       {/* ช่องค้นหา */}
//       <input
//         type="text"
//         placeholder="ค้นหาสินค้า..."
//         className="w-full p-2 border rounded-md"
//       />

//       {/* สรุปข้อมูลรวม */}
//       <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//         <div className="bg-white p-4 rounded-lg shadow">
//           สินค้าทั้งหมด: 312 ชิ้น
//         </div>
//         <div className="bg-white p-4 rounded-lg shadow">แหวน: 120 ชิ้น</div>
//         <div className="bg-white p-4 rounded-lg shadow">สร้อยคอ: 100 ชิ้น</div>
//         <div className="bg-white p-4 rounded-lg shadow">กำไล: 92 ชิ้น</div>
//         <div className="bg-white p-4 rounded-lg shadow col-span-2">
//           น้ำหนักทองรวม: 152.3 บาท
//         </div>
//       </div>

//       {/* ราคาทองปัจจุบัน */}
//       <div className="bg-white p-4 rounded-lg shadow">
//         <h2 className="text-lg font-semibold mb-2">ราคาทองคำวันนี้</h2>
//         <p>รับซื้อ: 32,000 บาท | ขายออก: 32,500 บาท</p>
//       </div>

//       {/* รายการล่าสุดที่ทำกับ stock */}
//       <div className="bg-white p-4 rounded-lg shadow">
//         <h2 className="text-lg font-semibold mb-2">รายการล่าสุด</h2>
//         <ul className="list-disc list-inside text-sm">
//           <li>เพิ่ม แหวน 1 บาท - 3 ชิ้น</li>
//           <li>ขาย สร้อยคอ 2 บาท - 1 ชิ้น</li>
//           <li>แก้ไขข้อมูลกำไล 1 สลึง</li>
//         </ul>
//       </div>

//       {/* กราฟต่าง ๆ (mock) */}
//       <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
//         <div className="bg-white p-4 rounded-lg shadow h-64 flex items-center justify-center text-gray-400">
//           [Line Chart ยอดขายรายวัน]
//         </div>
//         <div className="bg-white p-4 rounded-lg shadow h-64 flex items-center justify-center text-gray-400">
//           [Pie Chart สัดส่วนประเภท]
//         </div>
//         <div className="bg-white p-4 rounded-lg shadow h-64 flex items-center justify-center text-gray-400">
//           [Bar Chart การเข้า-ออกสินค้า]
//         </div>
//       </div>

//       {/* ปุ่มลัด */}
//       <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//         <button className="bg-yellow-500 text-white py-2 rounded">
//           ➕ เพิ่มสินค้า
//         </button>
//         <button className="bg-yellow-500 text-white py-2 rounded">
//           📦 รายการสินค้า
//         </button>
//         <button className="bg-yellow-500 text-white py-2 rounded">
//           👥 ลูกค้า
//         </button>
//         <button className="bg-yellow-500 text-white py-2 rounded">
//           💰 จำนำ
//         </button>
//       </div>
//     </div>
//   );
// }
