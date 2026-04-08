import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Homepage from "../Pages/Homepage/Homepage";
import Books from "../Pages/Books/Books";

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
  },
  
]);