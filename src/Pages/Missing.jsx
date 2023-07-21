import { Link } from "react-router-dom";

function Missing() {
  return (
    <main className="text-primaryWhite flex flex-col items-center justify-center mt-20">
      <h1 className="text-3xl md:text-4xl xl:text-5xl mb-10 font-bellefair font-semibold">
        Page Not Found
      </h1>
      <Link to={"/"}>
        <button className="text-xl md:text-2xl xl:text-2.5xl bg-primaryLight rounded-3xl p-4 px-6 hover:bg-primaryBlue hover:text-primaryBlack font-bellefair font-medium">
          Go to Home Page
        </button>
      </Link>
    </main>
  );
}

export default Missing;
