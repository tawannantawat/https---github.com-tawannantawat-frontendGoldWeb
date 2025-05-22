const articles = [
  {
    title: "ทำไมต้องใช้ทอง",
    excerpt: "เหตุผลที่ควรเลือกใช้ทองในโอกาสต่าง ๆ...",
  },
  {
    title: "เหตุผลสุดง่ายที่ทำให้คุณอยากซื้อทอง",
    excerpt: "บทความน่าสนใจเกี่ยวกับการลงทุนทองคำ...",
  },
];

export default function ArticleList() {
  return (
    <div className="max-w-6xl mx-auto px-4">
      <h2 className="text-red-700 font-bold text-lg mb-4">บทความ</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {articles.map((a, i) => (
          <div key={i} className="bg-rose-200 p-4 rounded-md shadow">
            <h3 className="font-bold mb-2">{a.title}</h3>
            <p className="text-sm text-gray-700 mb-2">{a.excerpt}</p>
            <button className="bg-red-800 text-white px-4 py-1 text-sm rounded hover:bg-red-900">
              อ่านต่อ
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
