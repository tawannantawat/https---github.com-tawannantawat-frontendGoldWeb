import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

function ServiceSection({
  title,
  description,
  steps,
  conditions,
}: {
  title: string;
  description: string;
  steps: string[];
  conditions: string[];
}) {
  return (
    <div className="bg-white rounded-3xl shadow-xl p-8 mb-12 border border-yellow-300">
      <h3 className="text-2xl font-bold text-red-800 mb-4 border-b pb-2 border-yellow-400">
        {title}
      </h3>
      <p className="text-gray-700 text-base mb-4 leading-relaxed">
        {description}
      </p>
      <h4 className="text-lg font-semibold text-yellow-700 mb-2">
        ขั้นตอนการใช้บริการ
      </h4>
      <ol className="list-decimal ml-6 text-gray-800 mb-4 space-y-1">
        {steps.map((step, i) => (
          <li key={i}>{step}</li>
        ))}
      </ol>
      <h4 className="text-lg font-semibold text-yellow-700 mb-2">
        เงื่อนไขการใช้บริการ
      </h4>
      <ul className="list-disc ml-6 text-gray-800 space-y-1">
        {conditions.map((c, i) => (
          <li key={i}>{c}</li>
        ))}
      </ul>
    </div>
  );
}

export default function ServicePage() {
  type ServiceKey = "pawn" | "rent" | "saving";
  const [activeTab, setActiveTab] = useState<ServiceKey>("pawn");
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const tabParam = searchParams.get("p");
    if (tabParam === "pawn" || tabParam === "rent" || tabParam === "saving") {
      setActiveTab(tabParam);
    }
  }, [searchParams]);

  const services = {
    pawn: {
      title: "จำนำทอง",
      description:
        "บริการรับจำนำทองคำแท้ ให้ราคาสูง ดอกเบี้ยต่ำ ปลอดภัย และเป็นความลับ มั่นใจได้ด้วยประสบการณ์ยาวนานของห้างทองมณีลักษณ์",
      steps: [
        "เตรียมบัตรประชาชนและทองคำแท้ที่ต้องการจำนำ",
        "นำทองมาติดต่อที่หน้าร้านเพื่อประเมินมูลค่า",
        "ตกลงราคาและทำสัญญาจำนำ",
        "รับเงินสดทันที พร้อมตั๋วจำนำ",
        "ชำระเงินต้นและดอกเบี้ยภายในเวลาที่กำหนดเพื่อรับทองคืน",
      ],
      conditions: [
        "รับเฉพาะทองแท้ 96.5% ทั้งทองแท่งและรูปพรรณ",
        "วงเงินสูงสุด 100,000 บาทต่อคน",
        "ดอกเบี้ย 1.25% ต่อเดือน",
        "ระยะเวลาจำนำ 4 เดือน 30 วัน",
        "สามารถต่ออายุสัญญาได้โดยชำระดอกเบี้ยก่อนครบกำหนด",
      ],
    },
    rent: {
      title: "เช่าสินสอด",
      description:
        "บริการเช่าสินสอดทองคำแท้ สำหรับพิธีมงคลสมรส ช่วยประหยัดงบประมาณแต่ยังคงความสง่างาม มีใบรับรองจากร้านทองคุณภาพ",
      steps: [
        "ติดต่อเพื่อแจ้งวันจัดงานและจำนวนสินสอดที่ต้องการ",
        "เลือกแพ็กเกจเช่าทองตามงบประมาณ",
        "ชำระเงินมัดจำตามข้อตกลง",
        "ทำสัญญาและรับใบเสร็จ",
        "รับสินสอดก่อนวันงาน และคืนหลังเสร็จพิธีเพื่อรับมัดจำคืน",
      ],
      conditions: [
        "เช่าขั้นต่ำ 2 บาททอง",
        "วางเงินประกันเต็มจำนวน",
        "คืนสินสอดภายใน 3 วันหลังงาน",
        "ตรวจสอบความเรียบร้อยก่อนคืนเงินประกัน",
        "ต้องทำสัญญาเพื่อความถูกต้องตามกฎหมาย",
      ],
    },
    saving: {
      title: "ออมทอง",
      description:
        "บริการออมทองคำแท้สำหรับผู้ที่ต้องการสะสมทองอย่างเป็นระบบ เริ่มต้นเพียง 500 บาทต่อเดือน ควบคุมได้ ปลอดภัยทุกขั้นตอน",
      steps: [
        "สมัครเปิดบัญชีออมทองกับทางร้าน",
        "กำหนดจำนวนเงินที่ต้องการออมในแต่ละเดือน",
        "โอนเงินเข้าบัญชีออมทองตามรอบ",
        "ติดตามยอดสะสมผ่านระบบของเรา",
        "สามารถแลกเป็นทองจริงได้เมื่อสะสมครบ 1 บาททอง",
      ],
      conditions: [
        "ออมขั้นต่ำ 500 บาทต่อครั้ง",
        "สามารถหยุดออมชั่วคราวหรือถอนออกได้",
        "ไม่มีค่าธรรมเนียมในการเปิดบัญชี",
        "มีระบบแจ้งเตือนและอัปเดตยอดแบบเรียลไทม์",
        "ราคาทองอ้างอิงจากสมาคมค้าทองคำในแต่ละวัน",
      ],
    },
  };

  const tabs = [
    { id: "pawn", name: "จำนำทอง" },
    { id: "rent", name: "เช่าสินสอด" },
    { id: "saving", name: "ออมทอง" },
  ];

  return (
    <div>
      <Navbar />

      <section className="bg-gradient-to-r from-red-800 to-yellow-700 py-16 shadow-inner">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-extrabold drop-shadow-md mb-4">
            บริการจากห้างทองมณีลักษณ์
          </h1>
          <p className="text-lg md:text-xl font-light opacity-90">
            ครบครันทุกบริการทองคำ เพื่อชีวิตทางการเงินที่มั่นคงและสง่างาม
          </p>
        </div>
      </section>

      <section className="bg-[#fefefe] py-12">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex justify-center gap-4 flex-wrap mb-10">
            {tabs.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as ServiceKey)}
                  className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 shadow-md text-base border-2
          ${
            isActive
              ? "bg-red-700 text-white border-red-800 scale-105"
              : "bg-white text-red-800 border-yellow-400 hover:bg-yellow-50 hover:scale-105"
          }`}
                >
                  {tab.name}
                </button>
              );
            })}
          </div>

          <ServiceSection
            title={services[activeTab].title}
            description={services[activeTab].description}
            steps={services[activeTab].steps}
            conditions={services[activeTab].conditions}
          />
        </div>
      </section>

      <Footer />
    </div>
  );
}
