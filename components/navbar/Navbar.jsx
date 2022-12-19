import Image from "next/image";
import { useEffect, useState } from "react";
import Logo from '../../public/images/expense/logo.png'
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import NextLink from 'next/link'

export default function Home() {
  const [navbar, setNavbar] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const showNavbar = () => {
    if (window.scrollY >= 80) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", showNavbar);
  }, []);
  return (
    <nav
      className={`w-full fixed z-30 ${
        scrolled ? "bg-white " : " bg-transparent"
      } `}
    >
      <div className="justify-between px-4 2xl:px-0 mx-auto lg:max-w-7xl md:items-center md:flex">
        <div>
          <div className="flex items-center justify-between py-1 md:py-5 2xl:py-7 md:block">
            <NextLink href="/">
              <Image className="h-12 md:h-auto" src={Logo} alt="logo" />
            </NextLink>
            <div className="md:hidden">
              <button
                className="p-1 md:p-2 text-gray-700 rounded-md outline-none border-none focus:border-none focus:outline-none"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`flex-1 justify-self-center pb-3 md:block md:pb-0 md:mt-0 ${
              navbar
                ? "block absolute top-[54px] left-0 z-10 w-full bg-white mx-0 shadow-md"
                : "hidden"
            }`}
          >
            <ul className="items-center justify-center md:flex pg-bold list-none pl-0">
              {[
                ["Home", "home"],
                ["Features", "features"],
                ["Team", "team"],
                ["About Us", "about"],
                ["Pricing", "pricing"],
              ].map(([title, url]) => (
                <li key={url} onClick={() => setNavbar(false)}>
                   <Link
                    className={`cursor-pointer mx-3 lg:mx-6 py-2 inline-flex hover:text-[var(--color-primary)] duration-300 heading-6 `}
                    to={`${url}`}
                    spy={true}
                    smooth={true}
                    hashSpy={true}
                    offset={-110}
                    duration={300}
                    isDynamic={true}
                  >
                    {title}
                  </Link>
                </li>
              ))}
              <li className="block md:hidden lg:block">
                <NextLink
                  href="#"
                  className="btn btn-primary ml-3 md:ml-6 sheen"
                >
                  Get Started
                </NextLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
