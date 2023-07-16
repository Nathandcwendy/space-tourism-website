import { Link } from "react-router-dom";

const HomePage = () => {
  // const [setNavState] = useOutletContext();
  return (
    <main className="flex flex-col items-center">
      <article className="mb-20 flex flex-col gap-4">
        <span className="nate_text-heading-5-mobile block">
          SO, YOU WANT TO TRAVEL TO
        </span>
        <h1 className="nate_text-heading-1-mobile">SPACE</h1>
        <p className="nate_text-body-mobile">
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </article>

      <Link to={"/destination/moon"} className="mb-20">
        <button className="nate_btn-home-mobile">EXPLORE</button>
      </Link>
    </main>
  );
};

export default HomePage;
