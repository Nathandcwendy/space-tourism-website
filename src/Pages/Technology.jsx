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
        <main className="flex flex-col text-primaryWhite items-center -mt-6">
          <h1 className="sr-only">{technology.name}</h1>
          <div className="flex gap-4 mb-8">
            <span className="nate_text-heading-number-mobile">03</span>
            <h2 className="nate_text-heading-5-mobile text-primaryWhite">
              SPACE LAUNCH 101
            </h2>
          </div>
          <div className="relative w-screen max-w-[1440px] bg-blue-600 left-0 right-0 mb-8">
            <img
              src={technology.images.landscape}
              className="w-full"
              alt={`${technology.name} Image`}
            />
          </div>
          <ul className="flex items-center justify-center gap-4 mb-[26px]">
            {types.map((type, index) =>
              type == technology.name ? (
                <Link
                  key={index}
                  to={`/technology/${type.replace(" ", "").toLowerCase()}`}
                >
                  <li className="nate_slider-2-mobile nate_text-slider-2-mobile nate_slider-2-active">
                    {index + 1}
                  </li>
                </Link>
              ) : (
                <Link
                  key={index}
                  to={`/technology/${type.replace(" ", "").toLowerCase()}`}
                >
                  <li className="nate_slider-2-mobile nate_text-slider-2-mobile ">
                    {index + 1}
                  </li>
                </Link>
              )
            )}
          </ul>
          <div className="flex flex-col gap-2 items-center mb-4">
            <h3 className="nate_text-heading-technology-term-mobile">
              THE TERMINOLOGY…
            </h3>
            <h4 className="nate_text-heading-technology-name-mobile">
              {technology.name}
            </h4>
          </div>
          <p className="nate_text-body-mobile mb-20">
            {technology.description}
          </p>
        </main>
      )}
    </>
  );
};

export default Technology;
