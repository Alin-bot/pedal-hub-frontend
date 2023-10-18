import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import BrandsPage from "./components/BrandsPage/BrandsPage";
import NotFoundPage from "./components/NotFoundPage/NotFoundPage";
import BrandDetailsPage from "./components/BrandsPage/Details/BrandDetailsPage";
import BikeDetailsPage from "./components/BikesPage/Details/BikeDetailsPage";
import BikesPage from "./components/BikesPage/BikesPage";
import AddPage from "./components/AddPage/AddForm";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "/brands",
    element: <BrandsPage />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "/brands/:brandId",
    element: <BrandDetailsPage />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "/bikes",
    element: <BikesPage />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "/bikes/:bikeId",
    element: <BikeDetailsPage />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "/add",
    element: <AddPage />,
    errorElement: <NotFoundPage />,
  }
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <RouterProvider router={router} />
);
