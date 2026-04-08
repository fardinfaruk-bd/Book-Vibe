import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Homepage from "../Pages/Homepage/Homepage";
import Books from "../Pages/Books/Books";
import ErrorPage from "../Pages/Errorpage/Errorpage";
import BookDetails from "../Pages/BookDetails/BookDetails";

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
      {
        path: "/bookDetails/:bookId",
        Component: BookDetails,
        loader: () => fetch("/booksData.json"),
      }
    ],
    errorElement: <ErrorPage />,
  },
  
]);