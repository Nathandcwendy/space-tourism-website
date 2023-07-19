// import { useEffect } from "react";
// import { useEffect, useState } from "react";
import { useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
// import Missing from "./Missing";

const Destination = () => {
  const tabs = ["moon", "mars", "europa", "titan"];

  const { place } = useParams();
  const navigate = useNavigate();

  const data = [
    {
      name: "Moon",
      images: {
        png: "./assets/destination/image-moon.png",
        webp: "./assets/destination/image-moon.webp",
      },
      description:
        "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
      distance: "384,400 km",
      travel: "3 days",
    },
    {
      name: "Mars",
      images: {
        png: "./assets/destination/image-mars.png",
        webp: "./assets/destination/image-mars.webp",
      },
      description:
        "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
      distance: "225 mil. km",
      travel: "9 months",
    },
    {
      name: "Europa",
      images: {
        png: "./assets/destination/image-europa.png",
        webp: "./assets/destination/image-europa.webp",
      },
      description:
        "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
      distance: "628 mil. km",
      travel: "3 years",
    },
    {
      name: "Titan",
      images: {
        png: "./assets/destination/image-titan.png",
        webp: "./assets/destination/image-titan.webp",
      },
      description:
        "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
      distance: "1.6 bil. km",
      travel: "7 years",
    },
  ];
  const planet = data.find(
    (item) => item.name.toLowerCase() === place.toLowerCase()
  );

  useEffect(() => {
    !planet && navigate("/missing", { replace: true });
  });

  return (
    <>
      {/* {console.log(
        data.find((item) => item.name.toLowerCase() === place.toLowerCase())
      )} */}
      {planet ? (
        <main className="text-primaryWhite flex lg:flex-row flex-col items-center lg:justify-between lg:px-[60px] xl:px-[90px] 2xl:px-[111px] mt-6 md:mt-[40px] lg:mt-[76px] mb-20 md:mb-[62px] lg:mb-[80px] xl:mb-[90px] 2xl:mb-[118px]">
          <h1 className="sr-only">{planet.name}</h1>
          <div className="flex flex-col items-center w-full lg:w-auto">
            <div className="flex gap-[18px] md:gap-[19px] mb-8 md:mb-[60px] lg:mb-[75px] xl:mb-[97px] md:self-start">
              <span className="nate_text-heading-number-mobile md:nate_text-heading-number-tablet lg:nate_text-heading-number-desktop">
                01
              </span>
              <h2 className="nate_text-heading-5-mobile md:nate_text-heading-5-tablet lg:nate_text-heading-5-desktop text-primaryWhite">
                PICK YOUR DESTINATION
              </h2>
            </div>
            <div className="lg:self-start lg:pl-[10px] xl:pl-[20px] 2xl:pl-[37.5px]">
              <img
                src={`../${planet.images.webp}`}
                className="h-[170px] w-[170px] md:h-[300px] md:w-[300px] lg:h-[375px] lg:w-[375px] xl:h-[445px] xl:w-[445px] mb-5 md:mb-[54px]"
                alt={`${planet.name} image`}
              />
            </div>
          </div>
          <div className="flex flex-col items-center lg:items-start lg:justify-end">
            <ul className="flex gap-[26px] md:gap-9 mb-5 md:mb-8 box-border">
              {tabs.map((tab, index) =>
                tab == planet.name.toLowerCase() ? (
                  <li key={index}>
                    <Link to={`/destination/${tab}`}>
                      <h3 className="nate_text-tab-mobile md:nate_text-tab-tablet nate_tab-active lg:hover:nate_tab-hover box-border">
                        {tab}
                      </h3>
                    </Link>
                  </li>
                ) : (
                  <li key={index}>
                    <Link to={`/destination/${tab}`}>
                      <h3 className="nate_text-tab-mobile md:nate_text-tab-tablet lg:hover:nate_tab-hover box-border">
                        {tab}
                      </h3>
                    </Link>
                  </li>
                )
              )}
            </ul>

            <h4 className="nate_text-heading-2-mobile md:nate_text-heading-2-tablet lg:nate_text-heading-2-desktop xl:text-[100px] md:mb-2">
              {planet.name}
            </h4>
            <p className="nate_text-body-mobile md:nate_text-body-tablet lg:nate_text-body-desktop mb-8 md:mb-[50px] lg:mb-[54px] max-w-[535px] md:w-[574px] lg:w-[350px] xl:w-[400px] 2xl:w-[444px]">
              {planet.description}
            </p>
            <div className="h-[1px] w-full md:w-[574px] lg:w-[350px] xl:w-[400px] 2xl:w-[444px] bg-primaryLight mb-8 md:mb-7"></div>
            <div className="flex flex-col md:w-[574px] lg:w-[350px] xl:w-[400px] 2xl:w-[444px] md:justify-center md:flex-row gap-8 md:gap-3 lg:gap-[40px] xl:gap-[50px] ">
              <div className="md:flex md:justify-end md:w-full lg:justify-start">
                <div className="flex flex-col gap-3 md:w-[216px] lg:w-auto">
                  <span className="nate_text-subheading-2-mobile md:mb-3 lg:text-start">
                    AVG. DISTANCE
                  </span>
                  <p className="nate_text-subheading-1-mobile lg:text-start">
                    {planet.distance}
                  </p>
                </div>
              </div>
              <div className="md:flex md:justify-start md:w-full">
                <div className="flex flex-col gap-3 md:w-[216px] lg:w-auto">
                  <span className="nate_text-subheading-2-mobile md:mb-3 lg:text-start">
                    Est. travel time
                  </span>
                  <p className="nate_text-subheading-1-mobile lg:text-start">
                    {planet.travel}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </main>
      ) : null}
    </>
  );
};

export default Destination;
