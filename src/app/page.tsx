"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import Link from "next/link";
import { Zoom, Slide } from "react-awesome-reveal";
import { Button } from "@/components/ui/button";

const HomePage = () => {
  return (
    <div className="space-y-16 overflow-hidden">
      <section className="w-full relative">
        <Zoom triggerOnce>
          <Carousel className="w-full" opts={{ loop: true }}>
            <CarouselContent>
              {Array.from({ length: 4 }).map((_, index) => (
                <CarouselItem key={index}>
                  <div className="w-full h-[500px] relative">
                    <Image
                      src={`/slider/${index + 1}.jpg`}
                      alt={`Slide ${index + 1}`}
                      fill
                      className="object-fill"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Nút điều hướng */}
            <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 text-white rounded-full w-10 h-10 flex items-center justify-center" />
            <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 text-white rounded-full w-10 h-10 flex items-center justify-center" />
          </Carousel>
        </Zoom>
      </section>

      <section className="max-w-5xl mx-auto px-4 md:py-16 py-8 grid md:grid-cols-2 gap-8 items-center">
        {/* Text */}
        <div>
          <Slide triggerOnce>
            <h2 className="text-3xl font-bold mb-4 text-primary">
              Chào mừng đến với HAI BRO
            </h2>
          </Slide>
          <Slide direction="left" triggerOnce>
            <p className="mb-6 text-primary leading-relaxed">
              Tại HAI BRO, chúng tôi không chỉ phục vụ thức uống – chúng tôi tạo
              ra trải nghiệm. Hãy đến và thưởng thức những ly nước tuyệt hảo
              trong không gian ấm cúng và thân thiện của chúng tôi.
            </p>
          </Slide>
          <Slide direction="up" triggerOnce>
            <Link
              href="/gioi-thieu"
              className="inline-block px-6 py-3 text-secondary bg-primary font-medium rounded-xl shadow hover:bg-primary/90 transition"
            >
              Tìm hiểu về chúng tôi
            </Link>
          </Slide>
        </div>

        <Slide direction="right" triggerOnce>
          <div className="relative w-full h-64 md:h-80 rounded-xl overflow-hidden shadow">
            <Image
              src="/home/gioithieu/khong-gian-quan.jpeg"
              alt="HAI BRO Coffee"
              fill
              className="object-cover"
            />
          </div>
        </Slide>
      </section>

      <section className="max-w-5xl mx-auto px-4 md:py-16 py-8 ">
        <div className="relative h-[500px] rounded-xl overflow-hidden shadow">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/home/lienhe/nhan-vien.jpg')" }}
          ></div>
          <div className="absolute inset-0 bg-[#311b0ecf]"></div>
          <div className="absolute z-10 flex flex-col items-center justify-center text-center text-secondary w-full top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 px-4">
            <Slide triggerOnce>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Nếu bạn có thắc mắc, cần hỗ trợ
              </h1>
            </Slide>
            <Slide triggerOnce>
              <p className="text-lg md:text-xl mb-6 text-white">
                Hãy liên hệ với chúng tôi!
              </p>
            </Slide>
            <Slide direction="right" triggerOnce>
              <Link href={"/lien-he"} className="w-fit">
                <Button className="bg-secondary text-primary px-6 py-3 rounded-lg hover:bg-chart-4 transition cursor-pointer">
                  Liên hệ chúng tôi
                </Button>
              </Link>
            </Slide>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
