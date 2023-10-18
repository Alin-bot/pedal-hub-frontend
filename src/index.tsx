import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage";
import BrandsPage from "./Pages/BrandsPage/BrandsPage";
import NotFoundPage from "./Pages/NotFoundPage/NotFoundPage";
import BrandDetailsPage from "./Pages/BrandsPage/Details/BrandDetailsPage";

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
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <RouterProvider router={router} />
);
