import { useRouteError, Link } from "react-router-dom";

const Error = () => {
  const error = useRouteError();

  return (
    <main
      id="error-page"
      className="text-primaryWhite flex flex-col items-center justify-center mt-20"
    >
      <h1 className="text-3xl md:text-4xl xl:text-5xl mb-10 font-bellefair font-semibold">
        Oops!
      </h1>
      <h2 className="text-xl md:text-2xl xl:text-2.5xl text-center mb-10 font-medium font-bellefair">
        Sorry, an unexpected error has occurred.
      </h2>
      {error && (
        <p className="mb-10 font-barlowCondensed tracking-secondary font-medium text-xl md:text-2xl xl:text-2.5xl text-center text-red-500">
          <i>{error.statusText || error.message}</i>
        </p>
      )}
      <Link to={"/"}>
        <button className="text-xl md:text-2xl xl:text-2.5xl bg-primaryLight rounded-3xl p-4 px-6 hover:bg-primaryBlue hover:text-primaryBlack font-bellefair font-medium">
          Go to Home Page
        </button>
      </Link>
    </main>
  );
};

export default Error;
