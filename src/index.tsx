import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import BrandsPage from "./components/Brands/BrandsPage";
import NotFoundPage from "./components/NotFoundPage/NotFoundPage";
import BrandDetailsPage from "./components/Brands/Details/BrandDetailsPage";
import BikeDetailsPage from "./components/Bike/Details/BikeDetailsPage";
import BikesPage from "./components/Bike/BikesPage";
import AddBrandPage from "./components/Common/Form/AddBrandForm";
import AddBikePage from "./components/Common/Form/AddBikeForm";

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
    path: "/addbrand",
    element: <AddBrandPage />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "/addbike",
    element: <AddBikePage />,
    errorElement: <NotFoundPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <RouterProvider router={router} />
);
