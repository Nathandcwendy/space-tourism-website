import { Link } from "react-router-dom";

const HomePage = () => {
  // const [setNavState] = useOutletContext();
  return (
    <main className="flex flex-col items-center">
      <article className="md:w-[450px] mb-20 md:mb-[156px] flex flex-col gap-4 md:gap-6">
        <span className="nate_text-heading-5-mobile md:nate_text-heading-5-tablet block">
          SO, YOU WANT TO TRAVEL TO
        </span>
        <h1 className="nate_text-heading-1-mobile md:nate_text-heading-1-tablet">
          SPACE
        </h1>
        <p className="nate_text-body-mobile md:nate_text-body-tablet md:px-1">
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </article>

      <Link to={"/destination/moon"} className="md:mb-20 z-10">
        <button className="nate_btn-home-mobile md:nate_btn-home-tablet md:hover:nate_btn-home-hover active:nate_btn-home-hover">
          EXPLORE
        </button>
      </Link>
    </main>
  );
};

export default HomePage;
