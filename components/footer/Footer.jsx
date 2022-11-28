import Link from "next/link";
import { CgFacebook } from "react-icons/cg";
import { AiOutlineInstagram } from "react-icons/ai";
import { BsTwitter } from "react-icons/bs";
import { RiLinkedinFill } from "react-icons/ri";
import Image from "next/image";
import Logo from '../../public/images/expense/logo.png'

const socialData = [{ id: 1, icon: <CgFacebook className="social-icon" />, link: "" }, { id: 2, icon: <BsTwitter className="social-icon" />, link: "" }, { id: 3, icon: <RiLinkedinFill className="social-icon" />, link: "" }, { id: 4, icon: <AiOutlineInstagram className="social-icon"/>, link: "" }];
const Footer = () => {
  return (
    <footer className="bg-[#F5F6FC] relative px-2 2xl:px-0 pt-[70px] lg:pt-0">
      <div className="bg-white shadow-[0px_4px_18px_rgba(134,134,134,0.25)] py-5 md:pt-[67px] md:pb-[72px] px-5 md:px-[60px] flex flex-col md:flex-row gap-5 justify-between max-w-[1076px] rounded-[30px] mx-auto md:items-center lg:mt-[120px] lg:-translate-y-1/2">
        <h3 className="heading-3 color-black max-w-[477px]">
          Ready to superpower your business?
        </h3>
        <Link className="btn btn-primary self-start md:self-center sheen" href="/">
          Get Started
        </Link>
      </div>
      <div className="max-w-[1296px] mx-auto mt-[70px] lg:mt-0">
        <div className="flex flex-col md:flex-row justify-between items-center pb-7 border-b border-[#B0C3F0]">
          <Image className=" my-4 md:my-0" src={Logo} alt="logo" />
          <ul className="flex gap-3 md:gap-7">
            {[
              ["Home", "#home"],
              ["About", "#about"],
              ["Feature", "#feature"],
              ["Pricing", "#pricing"],
            ].map(([title, url]) => (
              <li key={title}>
                <Link className="heading-6 color-black" href={url}>
                  {title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="py-11 flex flex-col md:flex-row gap-5 justify-between">
          <p className="figure-caption flex flex-col md:flex-row gap-4">
            <span>Copyright © Content</span> <span className="hidden md:block">|</span>{" "}
            <span>
              {" "}
              Designed by{" "}
              <Link href="https://www.templatemonster.com/authors/softivus/">
                SOFTIVUS
              </Link>
            </span>
          </p>
          <div className="flex gap-3 text-4xl">
            {socialData.map((item) => (
              <Link key={item.id} href={item.link}>
                {item.icon}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
