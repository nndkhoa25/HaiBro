"use client";

import Link from "next/link";
import Image from "next/image";
import { Facebook, Youtube, Instagram } from "lucide-react";
import { FaTiktok } from "react-icons/fa";
import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full bg-gray-100 border-t mt-10">
      <div className="max-w-5xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-4 md:gap-20 gap-10">
        {/* Logo */}
        <div className="flex flex-col gap-2">
          <Link href="/">
            <Image src="/logo.png" alt="Logo" width={100} height={100} />
          </Link>
          <p className="text-primary text-xl font-bold">HAI BRO</p>
          <p className="text-sm text-primary">
            Quán cà phê của bạn - Nơi thưởng thức & kết nối.
          </p>
        </div>

        {/* Về chúng tôi */}
        <div>
          <h4 className="font-semibold text-primary mb-3">VỀ CHÚNG TÔI</h4>
          <ul className="flex flex-col gap-2 text-sm text-primary">
            <li>
              <Link className="hover:text-secondary" href="/gioi-thieu">
                Giới thiệu
              </Link>
            </li>
            <li>
              <Link className="hover:text-secondary" href="/lien-he">
                Liên hệ
              </Link>
            </li>
            <li>
              <Link className="hover:text-secondary" href="/thuc-don">
                Thực đơn
              </Link>
            </li>
          </ul>
        </div>

        {/* Liên hệ */}
        <div>
          <h4 className="font-semibold text-primary mb-3">LIÊN HỆ</h4>
          <ul className="flex flex-col gap-3 text-sm text-primary">
            <li className="flex items-center gap-2">
              <Phone className="w-4 h-4 flex-shrink-0" />
              <span>0123 456 789</span>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="w-4 h-4 flex-shrink-0" />
              <span>haibrocoffee@gmail.com</span>
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="w-4 h-4 flex-shrink-0" />
              <span>123 Đường Quán Cà Phê, TP.HCM</span>
            </li>
          </ul>
        </div>

        {/* Theo dõi chúng tôi */}
        <div>
          <h4 className="font-semibold text-gray-800 mb-3">
            THEO DÕI CHÚNG TÔI
          </h4>
          <div className="flex gap-4 text-gray-600">
            <Link href="https://facebook.com" target="_blank">
              <Facebook className="w-5 h-5 hover:text-blue-600" />
            </Link>
            <Link href="https://youtube.com" target="_blank">
              <Youtube className="w-5 h-5 hover:text-red-600" />
            </Link>
            <Link href="https://tiktok.com" target="_blank">
              <FaTiktok className="w-5 h-5 hover:text-black" />
            </Link>
            <Link href="https://instagram.com" target="_blank">
              <Instagram className="w-5 h-5 hover:text-pink-500" />
            </Link>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t py-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} HAI BRO COFFEE & BEER. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
