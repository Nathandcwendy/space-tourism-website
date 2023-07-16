import { useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";

const data = [
  {
    name: "Douglas Hurley",
    images: {
      png: "./assets/crew/image-douglas-hurley-bitmap.png",
      webp: "./assets/crew/image-douglas-hurley.webp",
    },
    role: "Commander",
    bio: "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
  },
  {
    name: "Mark Shuttleworth",
    images: {
      png: "./assets/crew/image-mark-shuttleworth-bitmap.png",
      webp: "./assets/crew/image-mark-shuttleworth.webp",
    },
    role: "Mission Specialist",
    bio: "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
  },
  {
    name: "Victor Glover",
    images: {
      png: "./assets/crew/image-victor-glover-bitmap.png",
      webp: "./assets/crew/image-victor-glover.webp",
    },
    role: "Pilot",
    bio: "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.",
  },
  {
    name: "Anousheh Ansari",
    images: {
      png: "./assets/crew/image-anousheh-ansari-bitmap.png",
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
    (item) => item.role.replace(" ", "").toLowerCase() == role.toLowerCase()
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
        <main className="flex flex-col text-primaryWhite items-center -mt-6">
          <h1 className="sr-only uppercase">{`${person.role} ${person.name}`}</h1>
          <div className="flex gap-4 mb-8">
            <span className="nate_text-heading-number-mobile">02</span>
            <h2 className="nate_text-heading-5-mobile text-primaryWhite">
              Meet Your Crew
            </h2>
          </div>
          <div className="flex items-center justify-center border-b-[1px] border-primaryLight w-full mb-8">
            <img src={`../${person.images.png}`} alt={`${person.name} Image`} />
          </div>
          <ul className="flex justify-center items-center gap-3 mb-8">
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
            <h3 className="nate_text-heading-crew-role-mobile">
              {person.role}
            </h3>
            <h4 className="nate_text-heading-crew-name-mobile">
              {person.name}
            </h4>
          </div>
          <p className="nate_text-body-mobile mb-20">{person.bio}</p>
        </main>
      )}
    </>
  );
};

export default Crew;
