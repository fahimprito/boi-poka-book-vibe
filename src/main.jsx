import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import App from './App.jsx'
import Root from './components/root/Root.jsx';
import ErrorPage from './components/errorPage/ErrorPage.jsx';
import Home from './components/home/Home.jsx';
import ListedBooks from './components/listedBooks/ListedBooks.jsx';
import PagesToRead from './components/pagesToRead/PagesToRead.jsx';
import BookDetail from './components/bookDetails/BookDetail.jsx';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/listed-books",
        element: <ListedBooks></ListedBooks>,
        // worst way to load some data.
        loader: () => fetch('/booksData.json')
      },
      {
        path: "/pages-to-read",
        element: <PagesToRead></PagesToRead>
      },
      {
        path: "/books/:bookId",
        element: <BookDetail></BookDetail>,
        loader: () => fetch('/booksData.json')
      },
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
    <ToastContainer />
  </StrictMode>,
)
