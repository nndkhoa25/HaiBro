"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { Drink } from "@/types/drinktypes";
import Image from "next/image";
import { Button } from "@/components/ui/button";

// Dữ liệu mẫu thức uống
const DRINKS_DATA: Drink[] = [
  {
    id: 1,
    name: "Cà phê đen đá",
    category: "Cà phê truyền thống",
    ishaveM: true,
    price_m: 20000,
    price_l: 25000,
    image: "/products/ca-phe-den.jpg",
  },
  {
    id: 2,
    name: "Cà phê sữa đá",
    category: "Cà phê truyền thống",
    ishaveM: true,
    price_m: 22000,
    price_l: 27000,
    image: "/products/ca-phe-sua.jpg",
  },
  {
    id: 3,
    name: "Cà phê đen nóng",
    category: "Cà phê truyền thống",
    ishaveM: true,
    price_m: 20000,
    price_l: 25000,
    image: "/products/ca-phe-den-nong.jpg",
  },
  {
    id: 4,
    name: "Cà phê sữa nóng",
    category: "Cà phê truyền thống",
    ishaveM: true,
    price_m: 22000,
    price_l: 27000,
    image: "/products/ca-phe-sua-nong.jpg",
  },
  {
    id: 5,
    name: "Bạc xỉu",
    category: "Cà phê truyền thống",
    ishaveM: true,
    price_m: 25000,
    price_l: 30000,
    image: "/products/bac-xiu.jpg",
  },
  {
    id: 6,
    name: "Cà phê muối",
    category: "Cà phê truyền thống",
    ishaveM: true,
    price_m: 28000,
    price_l: 33000,
    image: "/products/ca-phe-muoi.jpg",
  },
  {
    id: 7,
    name: "Espresso",
    category: "Espresso",
    ishaveM: false,
    price_m: null,
    price_l: 30000,
    image: "/products/espresso.jpg",
  },
  {
    id: 8,
    name: "Americano",
    category: "Espresso",
    ishaveM: true,
    price_m: 32000,
    price_l: 37000,
    image: "/products/americano.jpg",
  },
  {
    id: 9,
    name: "Cappuccino",
    category: "Espresso",
    ishaveM: true,
    price_m: 35000,
    price_l: 40000,
    image: "/products/cappuccino.jpg",
  },
  {
    id: 10,
    name: "Latte",
    category: "Espresso",
    ishaveM: true,
    price_m: 35000,
    price_l: 40000,
    image: "/products/latte.jpg",
  },
  {
    id: 11,
    name: "Mocha",
    category: "Espresso",
    ishaveM: true,
    price_m: 38000,
    price_l: 43000,
    image: "/products/mocha.jpg",
  },
  {
    id: 12,
    name: "Macchiato",
    category: "Espresso",
    ishaveM: true,
    price_m: 36000,
    price_l: 41000,
    image: "/products/macchiato.jpg",
  },
  {
    id: 13,
    name: "Flat White",
    category: "Espresso",
    ishaveM: true,
    price_m: 37000,
    price_l: 42000,
    image: "/products/flat-white.jpg",
  },
  {
    id: 14,
    name: "Caramel Macchiato",
    category: "Espresso",
    ishaveM: true,
    price_m: 40000,
    price_l: 45000,
    image: "/products/caramel-macchiato.jpg",
  },
  {
    id: 15,
    name: "Trà đào cam sả",
    category: "Trà",
    ishaveM: true,
    price_m: 30000,
    price_l: 35000,
    image: "/products/tra-dao-cam-sa.jpg",
  },
  {
    id: 16,
    name: "Trà sữa truyền thống",
    category: "Trà",
    ishaveM: true,
    price_m: 28000,
    price_l: 33000,
    image: "/products/tra-sua-truyen-thong.jpg",
  },
  {
    id: 17,
    name: "Trà sữa trân châu đường đen",
    category: "Trà",
    ishaveM: true,
    price_m: 32000,
    price_l: 37000,
    image: "/products/tra-sua-tran-chau.jpg",
  },
  {
    id: 18,
    name: "Trà xanh",
    category: "Trà",
    ishaveM: true,
    price_m: 25000,
    price_l: 30000,
    image: "/products/tra-xanh.jpg",
  },
  {
    id: 19,
    name: "Trà ô long",
    category: "Trà",
    ishaveM: true,
    price_m: 25000,
    price_l: 30000,
    image: "/products/tra-o-long.jpg",
  },
  {
    id: 20,
    name: "Trà thảo mộc",
    category: "Trà",
    ishaveM: true,
    price_m: 27000,
    price_l: 32000,
    image: "/products/tra-thao-moc.jpg",
  },
  {
    id: 21,
    name: "Trà gừng mật ong",
    category: "Trà",
    ishaveM: true,
    price_m: 28000,
    price_l: 33000,
    image: "/products/tra-gung-mat-ong.jpg",
  },
  {
    id: 22,
    name: "Trà vải",
    category: "Trà",
    ishaveM: true,
    price_m: 30000,
    price_l: 35000,
    image: "/products/tra-vai.jpg",
  },
  {
    id: 23,
    name: "Sinh tố bơ",
    category: "Sinh tố",
    ishaveM: true,
    price_m: 35000,
    price_l: 40000,
    image: "/products/sinh-to-bo.jpg",
  },
  {
    id: 24,
    name: "Sinh tố xoài",
    category: "Sinh tố",
    ishaveM: true,
    price_m: 32000,
    price_l: 37000,
    image: "/products/sinh-to-xoai.jpg",
  },
  {
    id: 25,
    name: "Sinh tố dâu",
    category: "Sinh tố",
    ishaveM: true,
    price_m: 33000,
    price_l: 38000,
    image: "/products/sinh-to-dau.jpg",
  },
  {
    id: 26,
    name: "Sinh tố dưa hấu",
    category: "Sinh tố",
    ishaveM: true,
    price_m: 30000,
    price_l: 35000,
    image: "/products/sinh-to-dua-hau.jpg",
  },
  {
    id: 27,
    name: "Sinh tố chuối",
    category: "Sinh tố",
    ishaveM: true,
    price_m: 28000,
    price_l: 33000,
    image: "/products/sinh-to-chuoi.jpg",
  },
  {
    id: 28,
    name: "Smoothie berry",
    category: "Sinh tố",
    ishaveM: true,
    price_m: 35000,
    price_l: 40000,
    image: "/products/smoothie-berry.jpg",
  },
  {
    id: 29,
    name: "Nước ép cam",
    category: "Nước ép",
    ishaveM: true,
    price_m: 30000,
    price_l: 35000,
    image: "/products/nuoc-ep-cam.jpg",
  },
  {
    id: 30,
    name: "Nước ép dưa hấu",
    category: "Nước ép",
    ishaveM: true,
    price_m: 28000,
    price_l: 33000,
    image: "/products/nuoc-ep-dua-hau.jpg",
  },
  {
    id: 31,
    name: "Nước ép táo",
    category: "Nước ép",
    ishaveM: true,
    price_m: 30000,
    price_l: 35000,
    image: "/products/nuoc-ep-tao.jpg",
  },
  {
    id: 32,
    name: "Nước ép dứa",
    category: "Nước ép",
    ishaveM: true,
    price_m: 28000,
    price_l: 33000,
    image: "/products/nuoc-ep-dua.jpg",
  },
  {
    id: 33,
    name: "Nước ép cà rốt",
    category: "Nước ép",
    ishaveM: true,
    price_m: 27000,
    price_l: 32000,
    image: "/products/nuoc-ep-ca-rot.jpg",
  },
  {
    id: 34,
    name: "Nước ép thơm",
    category: "Nước ép",
    ishaveM: true,
    price_m: 28000,
    price_l: 33000,
    image: "/products/nuoc-ep-thom.jpg",
  },
  {
    id: 35,
    name: "Caramel Frappe",
    category: "Đá xay",
    ishaveM: true,
    price_m: 40000,
    price_l: 45000,
    image: "/products/caramel-frappe.jpg",
  },
  {
    id: 36,
    name: "Mocha Frappe",
    category: "Đá xay",
    ishaveM: true,
    price_m: 40000,
    price_l: 45000,
    image: "/products/mocha-frappe.jpg",
  },
  {
    id: 37,
    name: "Matcha Frappe",
    category: "Đá xay",
    ishaveM: true,
    price_m: 42000,
    price_l: 47000,
    image: "/products/matcha-frappe.jpg",
  },
  {
    id: 38,
    name: "Oreo Frappe",
    category: "Đá xay",
    ishaveM: true,
    price_m: 43000,
    price_l: 48000,
    image: "/products/oreo-frappe.jpg",
  },
  {
    id: 39,
    name: "Chocolate Frappe",
    category: "Đá xay",
    ishaveM: true,
    price_m: 40000,
    price_l: 45000,
    image: "/products/chocolate-frappe.jpg",
  },
  {
    id: 40,
    name: "Soda chanh",
    category: "Soda",
    ishaveM: true,
    price_m: 25000,
    price_l: 30000,
    image: "/products/soda-chanh.jpg",
  },
  {
    id: 41,
    name: "Soda việt quất",
    category: "Soda",
    ishaveM: true,
    price_m: 28000,
    price_l: 33000,
    image: "/products/soda-viet-quat.jpg",
  },
  {
    id: 42,
    name: "Soda blue ocean",
    category: "Soda",
    ishaveM: true,
    price_m: 30000,
    price_l: 35000,
    image: "/products/soda-blue-ocean.jpg",
  },
  {
    id: 43,
    name: "Soda bạc hà",
    category: "Soda",
    ishaveM: true,
    price_m: 27000,
    price_l: 32000,
    image: "/products/soda-bac-ha.jpg",
  },
  {
    id: 44,
    name: "Mojito không cồn",
    category: "Soda",
    ishaveM: true,
    price_m: 32000,
    price_l: 37000,
    image: "/products/mojito.jpg",
  },
  {
    id: 45,
    name: "Sunrise mocktail",
    category: "Soda",
    ishaveM: true,
    price_m: 35000,
    price_l: 40000,
    image: "/products/sunrise-mocktail.jpg",
  },
  {
    id: 46,
    name: "Matcha latte",
    category: "Đặc biệt",
    ishaveM: true,
    price_m: 40000,
    price_l: 45000,
    image: "/products/matcha-latte.jpg",
  },
  {
    id: 47,
    name: "Chocolate nóng",
    category: "Đặc biệt",
    ishaveM: true,
    price_m: 35000,
    price_l: 40000,
    image: "/products/chocolate-nong.jpg",
  },
  {
    id: 48,
    name: "Hồng trà sữa",
    category: "Đặc biệt",
    ishaveM: true,
    price_m: 32000,
    price_l: 37000,
    image: "/products/hong-tra-sua.jpg",
  },
  {
    id: 49,
    name: "Sữa tươi trân châu đường đen",
    category: "Đặc biệt",
    ishaveM: true,
    price_m: 35000,
    price_l: 40000,
    image: "/products/sua-tuoi-tran-chau.jpg",
  },
  {
    id: 50,
    name: "Yogurt trái cây",
    category: "Đặc biệt",
    ishaveM: true,
    price_m: 33000,
    price_l: 38000,
    image: "/products/yogurt-trai-cay.jpg",
  },
  {
    id: 51,
    name: "Trà sữa ô long",
    category: "Đặc biệt",
    ishaveM: true,
    price_m: 30000,
    price_l: 35000,
    image: "/products/tra-sua-o-long.jpg",
  },
  {
    id: 52,
    name: "Coca Cola",
    category: "Nước ngọt",
    ishaveM: false,
    price_m: null,
    price_l: 15000,
    image: "/products/coca-cola.jpg",
  },
  {
    id: 53,
    name: "Pepsi",
    category: "Nước ngọt",
    ishaveM: false,
    price_m: null,
    price_l: 15000,
    image: "/products/pepsi.jpg",
  },
  {
    id: 54,
    name: "7Up",
    category: "Nước ngọt",
    ishaveM: false,
    price_m: null,
    price_l: 15000,
    image: "/products/7up.jpg",
  },
  {
    id: 55,
    name: "Sting",
    category: "Nước ngọt",
    ishaveM: false,
    price_m: null,
    price_l: 12000,
    image: "/products/sting.jpg",
  },
  {
    id: 56,
    name: "Aquafina",
    category: "Nước ngọt",
    ishaveM: false,
    price_m: null,
    price_l: 10000,
    image: "/products/aquafina.jpg",
  },
  {
    id: 57,
    name: "Revive",
    category: "Nước ngọt",
    ishaveM: false,
    price_m: null,
    price_l: 12000,
    image: "/products/revive.jpg",
  },
];

export default function MenuPage() {
  const [items, setItems] = useState<Drink[]>([]);
  const [filteredItems, setFilteredItems] = useState<Drink[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("Tất cả");

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase.from("drinks").select("*");
      if (error) {
        console.error(error);
        // Nếu database chưa có dữ liệu, sử dụng dữ liệu mẫu
        setItems(DRINKS_DATA);
        setFilteredItems(DRINKS_DATA);
        const uniqueCategories = [
          "Tất cả",
          ...new Set(DRINKS_DATA.map((item) => item.category)),
        ];
        setCategories(uniqueCategories);
      } else {
        setItems(data as Drink[]);
        setFilteredItems(data as Drink[]);
        // Lấy danh sách category duy nhất
        const uniqueCategories = [
          "Tất cả",
          ...new Set((data as Drink[]).map((item) => item.category)),
        ];
        setCategories(uniqueCategories);
      }
    };

    fetchData();
  }, []);

  // Lọc theo category
  const handleFilter = (category: string) => {
    setSelectedCategory(category);
    if (category === "Tất cả") {
      setFilteredItems(items);
    } else {
      setFilteredItems(items.filter((item) => item.category === category));
    }
  };

  // Xử lý đặt món
  const handleOrder = (drink: Drink) => {
    alert(`Bạn đã đặt: ${drink.name}`);
  };

  return (
    <div className="max-w-6xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center text-primary">Menu</h1>

      <div className="flex flex-wrap justify-center gap-3 mb-8">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => handleFilter(cat)}
            className={`px-4 py-2 rounded-full border transition ${
              selectedCategory === cat
                ? "bg-primary text-secondary border-primary/90 hover:bg-primary/90"
                : "bg-white text-primary border-gray-300 hover:bg-gray-100"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid menu */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            className=" border rounded-xl shadow-sm flex flex-col items-center justify-between bg-white hover:shadow-md transition"
          >
            <div className="w-full h-48 overflow-hidden">
              <Image
                src={item.image || "/products/default drink.jpg"}
                alt={item.name}
                className="w-full h-full object-cover hover:scale-80 duration-300 rounded-t-xl hover:rounded-none"
                width={128}
                height={128}
              />
            </div>
            <div className="p-4 w-full text-center flex flex-col">
              <h2 className="font-semibold text-lg">{item.name}</h2>
              <p className="text-sm text-gray-500">{item.category}</p>
              <div className="mt-2 space-y-1 text-sm">
                <p>
                  {" "}
                  {item.ishaveM
                    ? item.price_m?.toLocaleString() + "₫"
                    : item.price_l?.toLocaleString() + "₫"}
                </p>
              </div>
              <Button
                onClick={() => handleOrder(item)}
                className="mt-4 px-4 py-2 bg-primary text-secondary rounded-lg hover:bg-gray-700 cursor-pointer transition align-self-end"
              >
                Đặt món
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
