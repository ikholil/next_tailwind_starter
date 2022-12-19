import Image from "next/image";
import Link from "next/link";
import hex from "../../public/images/expense/hex.png";
import hex2 from "../../public/images/expense/hex2.png";
import BannerImg from "../../public/images/expense/banner_img.png";
import traffic from "../../public/images/expense/traffic.png";
import chart from "../../public/images/expense/chart.png";
import { BsPlayCircleFill } from "react-icons/bs";
import ModalVideo from "react-modal-video";
import { useState } from "react";

const Banner = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <section
      className="lg:bg-[url('/images/expense/banner_bg.png')] bg-no-repeat bg-cover relative bg-[#E8EFFF]"
      id="home"
    >
      <Image
        className="hidden lg:block absolute top-56 left-16 hex1"
        src={hex}
        alt="shape 1"
      />
      <Image
        className="hidden lg:block absolute bottom-20 right-[800px] hex2"
        src={hex2}
        alt="shape 2"
      />
      <div className="max-w-[1296px] mx-auto flex flex-col lg:flex-row items-center pt-32 md:pt-20">
        <div className="w-full lg:w-7/12 px-3 2xl:px-0">
          <h1 className="heading-1 color-black mb-[2px]">
            Take your expenses under control
          </h1>
          <p className="pg-large mb-6 md:mb-8">
            Suspendisse varius enim in eros elementum tristique. Duis cursus, mi
            quis viverra ornare, eros dolor interdum nulla, ut commodo diam
            libero vitae erat.
          </p>
          <div className="flex gap-6 items-start relative">
            <Link className="btn btn-primary self-start sheen" href="#">
              Get Started
            </Link>
            <button onClick={() => setOpen(true)}>
              <span className="relative">
                <span className="center absolute playbutton bg-white rounded-full z-30">
                  <BsPlayCircleFill className="text-[#9349EC] bg-white rounded-full border-none text-[42px] cursor-pointer" />
                </span>
              </span>
            </button>
          </div>
          <ModalVideo
              channel="youtube"
              autoplay
              isOpen={isOpen}
              videoId="y0oMPjoCLD0"
              onClose={() => setOpen(false)}
            />
        </div>
        <div className="w-full lg:w-5/12 pt-5">
          <div className="xl:left-[200px] relative">
            <Image
              className="hidden lg:block absolute top-[105px] -left-28 traffic"
              src={traffic}
              alt="traffic"
            />
            <Image
              className="hidden lg:block absolute right-4 top-[250px] z-10 chart"
              src={chart}
              alt="chart"
            />
            <Image
              className=" relative max-w-[300px] max-h-[500px] md:max-h-max md:max-w-max mx-auto"
              src={BannerImg}
              alt="banner img"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
