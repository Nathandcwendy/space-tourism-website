import { useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";

const data = [
  {
    name: "Launch vehicle",
    images: {
      portrait: "../assets/technology/image-launch-vehicle-portrait.jpg",
      landscape:
        "../assets/technology/image-launch-vehicle-landscape-bitmap.png",
    },
    description:
      "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
  },
  {
    name: "Spaceport",
    images: {
      portrait: "../assets/technology/image-spaceport-portrait.jpg",
      landscape: "../assets/technology/image-spaceport-landscape-bitmap.png",
    },
    description:
      "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.",
  },
  {
    name: "Space capsule",
    images: {
      portrait: "../assets/technology/image-space-capsule-portrait.jpg",
      landscape:
        "../assets/technology/image-space-capsule-landscape-bitmap.png",
    },
    description:
      "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
  },
];
const types = data.map((item) => item.name);

const Technology = () => {
  const { type } = useParams();
  const navigate = useNavigate();
  const technology = data.find(
    (item) =>
      item.name.replace(" ", "").toLowerCase() ==
      type.replace(" ", "").toLowerCase()
  );

  useEffect(() => {
    !technology && navigate("/missing", { replace: true });
  });
  return (
    <>
      {technology && (
        <main className="flex flex-col text-primaryWhite items-center -mt-6 md:mt-0">
          <h1 className="sr-only">{technology.name}</h1>
          <div className="flex gap-[18px] md:gap-[19px] mb-8 md:mb-[60px] md:self-start">
            <span className="nate_text-heading-number-mobile md:nate_text-heading-number-tablet">
              03
            </span>
            <h2 className="nate_text-heading-5-mobile md:nate_text-heading-5-tablet text-primaryWhite">
              SPACE LAUNCH 101
            </h2>
          </div>
          <div className="relative w-screen max-w-[1440px] left-0 right-0 mb-8 md:mb-14 md:h-[310px] md:overflow-y-hidden">
            <img
              src={technology.images.landscape}
              className="w-full h-full"
              alt={`${technology.name} Image`}
            />
          </div>
          <ul className="flex items-center justify-center gap-4 mb-[26px] md:mb-11">
            {types.map((type, index) =>
              type == technology.name ? (
                <Link
                  key={index}
                  to={`/technology/${type.replace(" ", "").toLowerCase()}`}
                >
                  <li className="nate_slider-2-mobile md:nate_slider-2-tablet nate_text-slider-2-mobile md:nate_text-slider-2-tablet nate_slider-2-active">
                    {index + 1}
                  </li>
                </Link>
              ) : (
                <Link
                  key={index}
                  to={`/technology/${type.replace(" ", "").toLowerCase()}`}
                >
                  <li className="nate_slider-2-mobile md:nate_slider-2-tablet nate_text-slider-2-mobile md:nate_text-slider-2-tablet">
                    {index + 1}
                  </li>
                </Link>
              )
            )}
          </ul>
          <div className="flex flex-col gap-2 md:gap-4 items-center mb-4">
            <h3 className="nate_text-heading-technology-term-mobile nate_text-heading-technology-term-tablet">
              THE TERMINOLOGY…
            </h3>
            <h4 className="nate_text-heading-technology-name-mobile nate_text-heading-technology-name-tablet">
              {technology.name}
            </h4>
          </div>
          <p className="nate_text-body-mobile md:nate_text-body-tablet mb-20 md:mb[97.3px] md:w-[458px]">
            {technology.description}
          </p>
        </main>
      )}
    </>
  );
};

export default Technology;
