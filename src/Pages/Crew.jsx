import { useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";

const data = [
  {
    name: "Douglas Hurley",
    images: {
      png: {
        mobile: "./assets/crew/image-douglas-hurley-bitmap-mobile.png",
        tablet: "./assets/crew/image-douglas-hurley-bitmap-tablet.png",
      },
      webp: "./assets/crew/image-douglas-hurley.webp",
    },
    role: "Commander",
    bio: "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
  },
  {
    name: "Mark Shuttleworth",
    images: {
      png: {
        mobile: "./assets/crew/image-mark-shuttleworth-bitmap-mobile.png",
        tablet: "./assets/crew/image-mark-shuttleworth-bitmap-tablet.png",
      },
      webp: "./assets/crew/image-mark-shuttleworth.webp",
    },
    role: "Mission Specialist",
    bio: "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
  },
  {
    name: "Victor Glover",
    images: {
      png: {
        mobile: "./assets/crew/image-victor-glover-bitmap-mobile.png",
        tablet: "./assets/crew/image-victor-glover-bitmap-tablet.png",
      },
      webp: "./assets/crew/image-victor-glover.webp",
    },
    role: "Pilot",
    bio: "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.",
  },
  {
    name: "Anousheh Ansari",
    images: {
      png: {
        mobile: "./assets/crew/image-anousheh-ansari-bitmap-mobile.png",
        tablet: "./assets/crew/image-anousheh-ansari-bitmap-tablet.png",
      },
      webp: "./assets/crew/image-anousheh-ansari.webp",
    },
    role: "Flight Engineer",
    bio: "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.",
  },
];
const roles = data.map((item) => item.role);
const Crew = () => {
  const { role } = useParams();
  const navigate = useNavigate();
  const person = data.find(
    (item) =>
      item.role.replace(" ", "").toLowerCase() ==
      role.replace(" ", "").toLowerCase()
  );

  useEffect(() => {
    if (!person) {
      navigate("/missing", { replace: true });
    }
    console.log(person);
  });
  return (
    <>
      {person && (
        <main className="flex flex-col text-primaryWhite items-center -mt-6 md:mt-0">
          <h1 className="sr-only uppercase">{`${person.role} ${person.name}`}</h1>
          <div className="flex gap-[18px] md:gap-[19px] mb-8 md:mb-[60px] md:self-start">
            <span className="nate_text-heading-number-mobile md:nate_text-heading-number-tablet">
              02
            </span>
            <h2 className="nate_text-heading-5-mobile md:nate_text-heading-5-tablet text-primaryWhite">
              Meet Your Crew
            </h2>
          </div>
          {person.name == "Douglas Hurley" ? (
            <picture className="flex items-center justify-center border-b-[1px] md:border-0 border-primaryLight w-full mb-8 md:mb-0 md:order-last md:h-[532px] md:overflow-y-hidden">
              <source
                srcSet={`../${person.images.png.tablet}`}
                media="(min-width: 768px)"
              />
              <img
                src={`../${person.images.png.mobile}`}
                alt={`${person.name} Image`}
                className="md:mt-[137px]"
              />
            </picture>
          ) : (
            <picture className="flex items-center justify-center border-b-[1px] md:border-0 border-primaryLight w-full mb-8 md:mb-0 md:order-last md:h-[532px] md:overflow-y-hidden ">
              <source
                srcSet={`../${person.images.png.tablet}`}
                media="(min-width: 768px)"
              />
              <img
                src={`../${person.images.png.mobile}`}
                alt={`${person.name} Image`}
              />
            </picture>
          )}
          <ul className="flex justify-center items-center gap-3 mb-8 md:order-8 md:mb-10">
            {roles.map((role, index) =>
              role == person.role ? (
                <Link
                  key={index}
                  to={`/crew/${role.replace(" ", "").toLowerCase()}`}
                >
                  <li className="nate_slider-1-mobile nate_slider-1-active-mobile"></li>
                </Link>
              ) : (
                <Link
                  key={index}
                  to={`/crew/${role.replace(" ", "").toLowerCase()}`}
                >
                  <li className="nate_slider-1-mobile"></li>
                </Link>
              )
            )}
          </ul>
          <div className="flex flex-col gap-2 items-center mb-4">
            <h3 className="nate_text-heading-crew-role-mobile md:nate_text-heading-crew-role-tablet">
              {person.role}
            </h3>
            <h4 className="nate_text-heading-crew-name-mobile md:nate_text-heading-crew-name-tablet">
              {person.name}
            </h4>
          </div>
          <p className="nate_text-body-mobile md:nate_text-body-tablet max-w-[535px] md:h-[84px] md:min-w-[458px] md:max-w-[592px] mb-20 md:mb-10">
            {person.bio}
          </p>
        </main>
      )}
    </>
  );
};

export default Crew;
