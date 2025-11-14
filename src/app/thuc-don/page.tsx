"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { Drink } from "@/types/drinktypes";
import Image from "next/image";
import { Button } from "@/components/ui/button";

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
                src={"/products/default drink.jpg"}
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
