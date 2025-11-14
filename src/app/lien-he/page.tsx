import { Button } from "@/components/ui/button";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaTiktok,
  FaInstagram,
  FaFacebook,
  FaYoutube,
} from "react-icons/fa";
import Link from "next/link";
import { Slide } from "react-awesome-reveal";

const ContactPage = () => {
  return (
    <div className="bg-white min-h-screen p-4 max-w-5xl mx-auto">
      <Slide direction="down" triggerOnce>
        <h1 className="text-4xl font-bold text-center text-primary mb-12">
          LIÊN HỆ VỚI CHÚNG TÔI
        </h1>
      </Slide>

      {/* Container chính */}
      <div className=" grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Form */}
        <Slide direction="left" triggerOnce>
          <div>
            <form className="space-y-6 p-8">
              <div className="grid grid-cols-1 ">
                <label className="block text-sm font-medium text-primary mb-1">
                  Họ và tên
                </label>
                <input
                  type="text"
                  placeholder="Họ và tên"
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-secondary"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-primary mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-secondary"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-primary mb-1">
                    Số điện thoại
                  </label>
                  <input
                    type="text"
                    placeholder="Số điện thoại"
                    className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-secondary"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-primary mb-1">
                  Bạn muốn gửi lời nhắn gì?
                </label>
                <textarea
                  placeholder="Vui lòng nhập..."
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-secondary"
                ></textarea>
              </div>

              <Button
                type="submit"
                className="w-full bg-secondary text-white font-semibold py-3 rounded hover:bg-secondary-light transition-colors cursor-pointer"
              >
                Gửi
              </Button>
            </form>
          </div>
        </Slide>

        {/* Sidebar thông tin liên hệ */}
        <Slide direction="right" triggerOnce>
          <div className="space-y-6 border-l-0 lg:border-l pl-0 lg:pl-8">
            <div className="bg-white p-8  space-y-4">
              <h2 className="text-2xl font-bold text-primary mb-4">
                Thông tin liên hệ
              </h2>
              <p className="text-primary">
                Nếu bạn có bất kỳ câu hỏi hoặc cần hỗ trợ, đừng ngần ngại liên
                hệ với chúng tôi qua các phương thức dưới đây.
              </p>

              <div className="flex items-center space-x-3 text-primary">
                <FaPhoneAlt className="text-lg" />
                <span>+1258 3258 5679</span>
              </div>
              <div className="flex items-center space-x-3 text-primary">
                <FaEnvelope className="text-lg" />
                <span>hello@workik.com</span>
              </div>
              <div className="flex items-center space-x-3 text-primary">
                <FaMapMarkerAlt className="text-lg" />
                <span>123 Đường ABC, Quận 1, TP. HCM</span>
              </div>

              <div className="mt-6">
                <h2 className="text-xl font-bold text-primary mb-6">
                  Mạng xã hội
                </h2>
                <div className="flex items-center space-x-4 text-secondary">
                  <Link href="https://facebook.com" target="_blank">
                    <FaFacebook className="w-5 h-5 hover:text-blue-600" />
                  </Link>
                  <Link href="https://youtube.com" target="_blank">
                    <FaYoutube className="w-5 h-5 hover:text-red-600" />
                  </Link>
                  <Link href="https://tiktok.com" target="_blank">
                    <FaTiktok className="w-5 h-5 hover:text-black" />
                  </Link>
                  <Link href="https://instagram.com" target="_blank">
                    <FaInstagram className="w-5 h-5 hover:text-pink-500" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Slide>
      </div>

      {/* Bản đồ phía dưới */}
      <Slide direction="up" triggerOnce>
        <div className="w-full h-[450px] rounded-lg overflow-hidden shadow-md mt-12">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.10923756953!2d106.72707367373147!3d10.802944889347451!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3175274bf7d06a09%3A0x724cfb57e29907b5!2zQ8OgIHBow6ogVGjhuqNvIMSQaeG7gW4gLSBDaGlsbOKAmXMgSG91c2U!5e0!3m2!1svi!2s!4v1758788463974!5m2!1svi!2s"
            width="600"
            height="450"
            style={{ border: 0, width: "100%", height: "100%" }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </Slide>
    </div>
  );
};

export default ContactPage;
