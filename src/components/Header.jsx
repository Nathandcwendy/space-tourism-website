/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from "react";

import { Link, useLocation } from "react-router-dom";

const home = {
  text: "HOME",
  number: "00",
  link: "home",
};
const destination = {
  text: "DESTINATION",
  number: "01",
  link: "destination",
  place: "moon",
};
const crew = {
  text: "CREW",
  number: "02",
  link: "crew",
  place: "commander",
};
const technology = {
  text: "TECHNOLOGY",
  number: "03",
  link: "technology",
  place: "launchVehicle",
};

const Header = () => {
  const pages = [home, destination, crew, technology];
  const [navState, setNavState] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const navMobileRef = useRef();
  const location = useLocation();

  useEffect(() => {
    const locations = location.pathname.split("/");
    switch (locations[1]) {
      case "":
        setNavState("home");
        break;
      case "destination":
        setNavState("destination");
        break;
      case "crew":
        setNavState("crew");
        break;
      case "technology":
        setNavState("technology");
        break;
      case "missing":
        setNavState("missing");
        break;
      default:
        setNavState("missing");
        break;
    }
  }, [location, setNavState]);

  useEffect(() => {
    const handleClick = (e) => {
      if (e.target == navMobileRef.current) {
        setMenuOpen(false);
      }
    };
    if (menuOpen) {
      window.addEventListener("click", handleClick);
    } else {
      window.removeEventListener("click", handleClick);
    }
    return () => window.removeEventListener("click", handleClick);
  }, [menuOpen, setMenuOpen]);
  return (
    <>
      {menuOpen && (
        <div
          ref={navMobileRef}
          className="md:hidden fixed inset-0 flex justify-end z-50"
        >
          <nav
            id="Nav-Mobile"
            className="sticky top-0 min-h-[667px] h-screen min-w-[254px] bg-primaryWhite bg-opacity-[0.04] backdrop-blur-2xl bg-no-repeat pl-8 pr-7 pt-[34px] flex flex-col gap-16"
          >
            <img
              src="/assets/shared/icon-close.svg"
              className="w-5 h-5 self-end hover:cursor-pointer"
              alt=""
              onClick={() => setMenuOpen(false)}
            />
            <ul className="flex flex-col gap-7">
              {pages.map((page, index) =>
                page.link == navState ? (
                  <li key={index}>
                    <Link
                      to={`/${
                        page.link == "home" ? "" : `${page.link}/${page.place}`
                      }`}
                      onClick={() => setNavState(`${page.link}/${page.place}`)}
                      href="#"
                      className="nate_text-nav-mobile nate_nav-active"
                    >
                      <span className="mr-3 font-bold">{page.number}</span>
                      {page.text}
                    </Link>
                  </li>
                ) : (
                  <li key={index}>
                    <Link
                      to={`/${
                        page.link == "home" ? "" : `${page.link}/${page.place}`
                      }`}
                      onClick={() => setNavState(`${page.link}/${page.place}`)}
                      href="#"
                      className="nate_text-nav-mobile"
                    >
                      <span className="mr-3 font-bold">{page.number}</span>
                      {page.text}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </nav>
        </div>
      )}
      <header className="flex justify-between items-center w-full relative">
        <div>
          <Link to={"/"}>
            <img
              src="/assets/shared/logo.svg"
              className="w-10 h-10 md:w-12 md:h-12"
              alt=""
            />
          </Link>
        </div>
        <div
          id="nate_nav-line"
          className="h-[1px] hidden xl:block bg-primaryWhite bg-opacity-25 w-[473px] absolute z-10 left-[112px]"
        ></div>
        <nav className="hidden relative md:block min-w-[450px] xl:w-[760px] 2xl:w-[830px] md:-right-10 2xl:-right-[55px]">
          <ul className="h-[96px] bg-primaryWhite bg-opacity-5 backdrop-blur-2xl flex justify-center items-center gap-9 lg:gap-11 2xl:gap-[50px] lg:pl-[100px] lg:pr-[120px] 2xl:pl-[123px] 2xl:pr-[167px]">
            {pages.map((page, index) =>
              page.link == navState ? (
                <li className="h-full" key={index}>
                  <Link
                    to={`/${
                      page.link == "home" ? "" : `${page.link}/${page.place}`
                    }`}
                    href="#"
                    className="nate_text-nav-mobile md:nate_text-nav-tablet lg:nate_text-nav-desktop h-full hover:cursor-pointer hover:nate_nav-hover nate_nav-active"
                  >
                    <span className="mr-3 2xl:mr-[14px] font-bold hidden lg:inline-block">
                      {page.number}
                    </span>
                    {page.text}
                  </Link>
                </li>
              ) : (
                <li className="h-full" key={index}>
                  <Link
                    to={`/${
                      page.link == "home" ? "" : `${page.link}/${page.place}`
                    }`}
                    href="#"
                    className="nate_text-nav-mobile md:nate_text-nav-tablet h-full hover:cursor-pointer hover:nate_nav-hover"
                  >
                    <span className="mr-3 2xl:mr-[14px] font-bold hidden lg:inline-block">
                      {page.number}
                    </span>
                    {page.text}
                  </Link>
                </li>
              )
            )}
          </ul>
        </nav>
        {!menuOpen && (
          <div className="MenuIcon-Container md:hidden hover:cursor-pointer">
            <img
              src="/assets/shared/icon-hamburger.svg"
              className="h-[21px] w-6"
              alt=""
              onClick={() => setMenuOpen(true)}
            />
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
