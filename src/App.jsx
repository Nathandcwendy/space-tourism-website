import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

function App() {
  // const home = {
  //   text: "HOME",
  //   number: "00",
  //   link: "home",
  // };
  // const destination = {
  //   text: "DESTINATION",
  //   number: "01",
  //   link: "destination",
  //   place: "moon",
  // };
  // const crew = {
  //   text: "CREW",
  //   number: "02",
  //   link: "crew",
  //   place: "commander",
  // };
  // const technology = {
  //   text: "TECHNOLOGY",
  //   number: "03",
  //   link: "technology",
  //   place: "launchVehicle",
  // };
  // const pages = [home, destination, crew, technology];
  const [navState, setNavState] = useState("home");
  // const [menuOpen, setMenuOpen] = useState(false);
  // const navMobileRef = useRef(null);

  // let classes = {
  //   home: "bg-home-desktop bg-no-repeat bg-center bg-primaryBlack bg-[length:1440px_100%] min-h-max max-w-[1440px] mx-auto text-primaryWhite pt-10 pb-32 pl-14",
  //   destination: `bg-destination-desktop bg-no-repeat bg-center bg-primaryBlack bg-[length:1440px_100%] min-h-max max-w-[1440px] mx-auto text-primaryWhite pt-10 pb-32 pl-14`,
  //   crew: `bg-crew-desktop bg-no-repeat bg-center bg-primaryBlack bg-[length:1440px_100%] min-h-max max-w-[1440px] mx-auto text-primaryWhite pt-10 pb-32 pl-14`,
  //   technology: `bg-technology-desktop bg-no-repeat bg-center bg-primaryBlack bg-[length:1440px_100%] min-h-max max-w-[1440px] mx-auto text-primaryWhite pt-10 pb-32 pl-14`,
  // };

  let classes = {
    home: "relative w-screen max-w-[1440px] min-h-[667px] h-auto mx-auto overflow-x-hidden px-6 pt-6 bg-home-mobile md:bg-home-tablet lg:bg-home-desktop bg-no-repeat bg-cover box-border bg-primaryBlack",
    missing:
      "relative w-screen max-w-[1440px] min-h-[667px] h-auto mx-auto overflow-x-hidden px-6 pt-6 bg-home-mobile md:bg-home-tablet lg:bg-home-desktop bg-no-repeat bg-cover box-border bg-primaryBlack",
    destination:
      "relative w-screen max-w-[1440px] min-h-[667px] h-auto mx-auto overflow-x-hidden px-6 pt-6 bg-destination-mobile md:bg-destination-tablet lg:bg-destination-desktop bg-no-repeat bg-cover box-border bg-primaryBlack",
    crew: "relative w-screen max-w-[1440px] min-h-[667px] h-auto mx-auto overflow-x-hidden px-6 pt-6 bg-crew-mobile md:bg-crew-tablet lg:bg-crew-desktop bg-no-repeat bg-cover box-border bg-primaryBlack",
    technology:
      "relative w-screen max-w-[1440px] min-h-[667px] h-auto mx-auto overflow-x-hidden px-6 pt-6 bg-technology-mobile md:bg-technology-tablet lg:bg-technology-desktop bg-no-repeat bg-cover box-border bg-primaryBlack",
  };
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
        setNavState("home");
        break;
    }
  }, [location]);

  // useEffect(() => {
  //   const handleClick = (e) => {
  //     if (e.target == navMobileRef.current) {
  //       setMenuOpen(false);
  //     }
  //   };
  //   if (menuOpen) {
  //     window.addEventListener("click", handleClick);
  //   } else {
  //     window.removeEventListener("click", handleClick);
  //   }
  //   return () => window.removeEventListener("click", handleClick);
  // }, [menuOpen]);

  return (
    // <div className={classes[navState]}>
    <>
      {/* {menuOpen && (
        <div
          ref={navMobileRef}
          className="md:hidden fixed inset-0 flex justify-end z-10"
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
      )} */}
      <div className={classes[navState]}>
        <Header />
        <Outlet />
      </div>
    </>
  );
}

export default App;
