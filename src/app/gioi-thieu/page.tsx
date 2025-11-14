"use client";

import Image from "next/image";
import { Slide, Fade, Roll } from "react-awesome-reveal";
const AboutPage = () => {
  return (
    <section className="max-w-5xl mx-auto px-4 py-16 space-y-24 overflow-hidden">
      {/* Câu chuyện */}
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <Slide triggerOnce>
            <h2 className="text-3xl font-bold mb-4 text-primary">
              Chúng tôi là
            </h2>
          </Slide>
          <Fade triggerOnce delay={1e3} cascade damping={1e-1}>
            <p className="text-gray-700 leading-relaxed mb-4">
              <span className="font-bold">HAI BRO</span> ra đời
              từ niềm đam mê bất tận với cà phê và khát khao tạo nên một không
              gian ấm áp, nơi mọi người có thể kết nối, chia sẻ và lưu giữ những
              khoảnh khắc đáng nhớ.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Từ những hạt cà phê được chọn lọc kỹ càng cho đến từng chi tiết
              trong thiết kế, chúng tôi mong muốn mang đến cho bạn không chỉ là
              một ly cà phê, mà là một trải nghiệm gắn kết và truyền cảm hứng.
            </p>
          </Fade>
        </div>
        <Slide triggerOnce direction="right">
          <div className="relative w-full h-72 md:h-96 rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/gioi-thieu/cauchuyen.jpg"
              alt="Câu chuyện HAI BRO"
              fill
              className="object-cover"
            />
          </div>
        </Slide>
      </div>

      {/* Nhiệm vụ */}
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <Roll triggerOnce delay={1e3}>
          <div className="order-2 md:order-1 relative w-full h-72 md:h-96 rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/gioi-thieu/nhiemvu.webp"
              alt="Nhiệm vụ HAI BRO"
              fill
              className="object-cover"
            />
          </div>
        </Roll>
        <div className="order-1 md:order-2">
          <Slide triggerOnce direction="right">
            <h2 className="text-3xl font-bold mb-4 text-primary">Nhiệm vụ</h2>
          </Slide>
          <Fade triggerOnce delay={1e3} cascade damping={1e-1}>
            <p className="text-gray-700 leading-relaxed mb-4">
              Mang đến trải nghiệm thức uống chất lượng cao, dịch vụ tận tâm và
              một không gian thân thiện, thoải mái.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Mỗi tách cà phê tại HAI BRO là sự kết hợp giữa hương vị tinh tế,
              sự sáng tạo và niềm đam mê, với mong muốn mang lại cảm hứng và
              năng lượng tích cực cho khách hàng.
            </p>
          </Fade>
        </div>
      </div>

      {/* Giá trị */}
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <Slide triggerOnce>
            <h2 className="text-3xl font-bold mb-4 text-primary">
              Giá trị cốt lõi
            </h2>
          </Slide>
          <Fade triggerOnce delay={1e3} cascade damping={1e-1}>
            <ul className="list-disc pl-6 space-y-3 text-gray-700">
              <li>
                <span className="font-semibold">Chất lượng:</span> Mỗi hạt cà
                phê đều được chọn lọc kỹ lưỡng để mang đến hương vị tuyệt hảo.
              </li>
              <li>
                <span className="font-semibold">Khách hàng:</span> Luôn đặt trải
                nghiệm khách hàng làm trung tâm trong mọi hoạt động.
              </li>
              <li>
                <span className="font-semibold">Không gian:</span> Một nơi để
                gắn kết, sẻ chia và tìm thấy sự bình yên.
              </li>
              <li>
                <span className="font-semibold">Phát triển bền vững:</span> Thân
                thiện với môi trường và cộng đồng.
              </li>
            </ul>
          </Fade>
        </div>
        <Slide triggerOnce direction="right" delay={1e3}>
          <div className="relative w-full h-72 md:h-96 rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/gioi-thieu/giatri.jpg"
              alt="Giá trị HAI BRO"
              fill
              className="object-cover"
            />
          </div>
        </Slide>
      </div>

      {/* Không gian */}
      <div>
        <Slide triggerOnce>
          <h2 className="text-3xl font-bold mb-6 text-primary">
            Không gian quán
          </h2>
        </Slide>
        <Slide triggerOnce delay={1e3}>
          <p className="mb-6 text-gray-700 leading-relaxed">
            Tham quan không gian của chúng tôi qua bản thiết kế dưới đây:
          </p>
        </Slide>
        <div className="w-full h-[600px] border rounded-lg overflow-hidden shadow-lg">
          <iframe
            src="/docs/hibrothietke.pdf#toolbar=0&navpanes=0&scrollbar=0"
            width="100%"
            height="100%"
            style={{ border: "none" }}
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
