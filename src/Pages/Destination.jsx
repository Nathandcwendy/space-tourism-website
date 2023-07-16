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
      {console.log(
        data.find((item) => item.name.toLowerCase() === place.toLowerCase())
      )}
      {planet ? (
        <main className="text-primaryWhite flex flex-col items-center -mt-6 md:mt-0">
          <h1 className="sr-only">{planet.name}</h1>
          <div className="flex gap-[18px] md:gap-[19px] mb-8 md:mb-[60px] md:self-start">
            <span className="nate_text-heading-number-mobile md:nate_text-heading-number-tablet">
              01
            </span>
            <h2 className="nate_text-heading-5-mobile md:nate_text-heading-5-tablet text-primaryWhite">
              PICK YOUR DESTINATION
            </h2>
          </div>
          <div>
            <img
              src={`../${planet.images.webp}`}
              className="h-[170px] w-[170px] md:h-[300px] md:w-[300px] mb-5 md:mb-[54px]"
              alt={`${planet.name} image`}
            />
          </div>
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

          <h4 className="nate_text-heading-2-mobile md:nate_text-heading-2-tablet md:mb-2">
            {planet.name}
          </h4>
          <p className="nate_text-body-mobile md:nate_text-body-tablet mb-8 md:mb-[50px] max-w-[535px] md:w-[574px]">
            {planet.description}
          </p>
          <div className="h-[1px] w-full md:w-[574px] bg-primaryLight mb-8 md:mb-7"></div>
          <div className="flex flex-col md:w-[574px] md:justify-center md:flex-row md:mb-[62px] gap-8 md:gap-3 mb-20">
            <div className="md:flex md:justify-end md:w-full">
              <div className="flex flex-col gap-3 md:w-[216px]">
                <span className="nate_text-subheading-2-mobile md:mb-3">
                  AVG. DISTANCE
                </span>
                <p className="nate_text-subheading-1-mobile">
                  {planet.distance}
                </p>
              </div>
            </div>
            <div className="md:flex md:justify-start md:w-full">
              <div className="flex flex-col gap-3 md:w-[216px]">
                <span className="nate_text-subheading-2-mobile md:mb-3">
                  Est. travel time
                </span>
                <p className="nate_text-subheading-1-mobile">{planet.travel}</p>
              </div>
            </div>
          </div>
        </main>
      ) : null}
    </>
  );
};

export default Destination;
