import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
import ErrorPage from "./Pages/ErrorPage.jsx";
import Technology from "./Pages/Technology.jsx";
import Crew from "./Pages/Crew.jsx";
import Destination from "./Pages/Destination.jsx";
import HomePage from "./Pages/HomePage.jsx";
import Missing from "./Pages/Missing.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/*" element={<App />} errorElement={<ErrorPage />}>
      <Route index element={<HomePage />} />
      <Route path="technology/:type" element={<Technology />} />
      <Route path="crew/:role" element={<Crew />} />
      <Route path="destination/:place" element={<Destination />} />
      <Route path="*" element={<Missing />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
