import {
  FaChevronDown,
  FaSearch,
  FaShoppingCart,
  FaUser,
} from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { useState, useRef } from "react";

export default function Navbar() {
  const location = useLocation();
  const [hoveredMenu, setHoveredMenu] = useState<string | null>(null);
  const hoverTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 bg-yellow-400 text-red-800 shadow px-6 py-3">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* โลโก้ */}
        <div className="flex items-center gap-4">
          <div className="rounded-full px-3 py-1">
            <img
              src="/logonb.png"
              alt="โลโก้ห้างทอง"
              className="h-14 w-auto sm:h-16 md:h-20"
            />
          </div>
          <h1 className="font-bold text-xl">
            ห้างทองมณีลักษณ์
            <span className="text-xs block">Maneelak Golds</span>
          </h1>
        </div>

        {/* เมนู */}
        <ul className="flex gap-2 text-base font-semibold relative">
          {[
            { name: "หน้าหลัก", path: "/" },
            { name: "ราคาทอง", path: "/gold-price" },
            {
              name: "สินค้า",
              path: "/products",
              hasDropdown: true,
              subItems: [
                { name: "สินค้าทั้งหมด", path: "/products" },
                { name: "สร้อยคอ", path: "/products?type=สร้อย" },
                { name: "สร้อยข้อมือ", path: "/products?type=กำไลข้อมือ" },
                { name: "แหวน", path: "/products?type=แหวน" },
              ],
            },
            {
              name: "บริการ",
              path: "/services",
              hasDropdown: true,
              subItems: [
                { name: "จำนำทอง", path: "/services?p=pawn" },
                { name: "เช่าสินสอด", path: "/services?p=rent" },
                { name: "ออมทอง", path: "/services?p=saving" },
              ],
            },
            { name: "โปรโมชั่น", path: "/promotions" },
            { name: "สาระน่ารู้", path: "/articles" },
            { name: "เกี่ยวกับเรา", path: "/about" },
            { name: "ติดต่อ", path: "/contact" },
          ].map(({ name, path, hasDropdown, subItems }) => (
            <li
              key={name}
              className="relative"
              onMouseEnter={() => {
                if (hasDropdown) {
                  if (hoverTimeout.current) clearTimeout(hoverTimeout.current);
                  setHoveredMenu(name);
                }
              }}
              onMouseLeave={() => {
                if (hasDropdown) {
                  hoverTimeout.current = setTimeout(() => {
                    setHoveredMenu(null);
                  }, 150);
                }
              }}
            >
              <Link
                to={path}
                className={`px-4 py-2 rounded-md block transition-colors duration-200 ${
                  isActive(path)
                    ? "bg-white text-red-900 font-bold border border-red-800"
                    : "bg-red-700 text-white hover:bg-yellow-200 hover:text-red-900"
                } flex items-center gap-2`}
              >
                {name}
                {hasDropdown && <FaChevronDown className="text-xs mt-1" />}
              </Link>

              {/* เมนูย่อยสินค้า */}
              {hasDropdown && hoveredMenu === name && (
                <ul className="absolute left-0 top-full mt-1 rounded-md overflow-hidden shadow-lg z-50 w-52">
                  {subItems!.map((item) => (
                    <li key={item.name}>
                      <Link
                        to={item.path}
                        className={`block px-4 py-2 ${
                          location.pathname === item.path
                            ? "bg-white text-red-800 font-semibold"
                            : "bg-red-600 text-white hover:bg-yellow-500"
                        } transition-colors`}
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>

        {/* ไอคอน */}
        <div className="flex gap-3 text-xl text-gray-800">
          <FaSearch className="cursor-pointer" />
          <FaUser className="cursor-pointer" />
          <FaShoppingCart className="cursor-pointer" />
        </div>
      </div>
    </nav>
  );
}
