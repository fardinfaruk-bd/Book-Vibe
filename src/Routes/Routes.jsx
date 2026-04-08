import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Homepage from "../Pages/Homepage/Homepage";
import Books from "../Pages/Books/Books";
import ErrorPage from "../Pages/Errorpage/Errorpage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout ,
    children: [
      {
        index: true,
        path: "/",
        Component: Homepage ,
      },
      {
        path: "/books",
        Component: Books ,
      },
    ],
    errorElement: <ErrorPage />,
  },
  
]);