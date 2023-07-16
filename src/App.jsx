import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

function App() {
  const [navState, setNavState] = useState("home");

  let classes = {
    home: "w-screen max-w-[1440px] min-h-screen mx-auto overflow-x-hidden px-6 md:px-10 pt-6 md:pt-0 bg-home-mobile md:bg-home-tablet lg:bg-home-desktop bg-no-repeat bg-cover bg-primaryBlack box-border mix-blend-normal",
    missing:
      "w-screen max-w-[1440px] min-h-screen mx-auto overflow-x-hidden px-6 md:px-10 pt-6 md:pt-0 bg-home-mobile md:bg-home-tablet lg:bg-home-desktop bg-no-repeat bg-cover bg-primaryBlack box-border mix-blend-normal",
    destination:
      "w-screen max-w-[1440px] min-h-screen mx-auto overflow-x-hidden px-6 md:px-10 pt-6 md:pt-0 bg-destination-mobile md:bg-destination-tablet lg:bg-destination-desktop bg-no-repeat bg-cover bg-primaryBlack box-border mix-blend-normal",
    crew: "w-screen max-w-[1440px] min-h-screen mx-auto overflow-x-hidden px-6 md:px-10 pt-6 md:pt-0 bg-crew-mobile md:bg-crew-tablet lg:bg-crew-desktop bg-no-repeat bg-cover bg-primaryBlack box-border mix-blend-normal",
    technology:
      "w-screen max-w-[1440px] min-h-screen mx-auto overflow-x-hidden px-6 md:px-10 pt-6 md:pt-0 bg-technology-mobile md:bg-technology-tablet lg:bg-technology-desktop bg-no-repeat bg-cover bg-primaryBlack box-border mix-blend-normal",
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

  return (
    <div className={classes[navState]}>
      <Header />
      <Outlet />
    </div>
  );
}

export default App;
