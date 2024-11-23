import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './component/Root/Root';
import Error from './component/Error/Error';
import Home from './component/Home/Home';
import Statistics from './component/Statistics/Statistics';
import Dashboard from './component/Dashboard/Dashboard';
import Categories from './component/Categories/Categories';
import ProductDetails from './component/ProductDetails/ProductDetails';
import 'react-toastify/dist/ReactToastify.css';
import Faq from './component/Faq/Faq';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        children: [
          {
            path: "/category/:category",
            element: <Categories></Categories>
          }
        ]
      },
      {
        path: "product/:product_id",
        element: <ProductDetails></ProductDetails>,
        loader: () => fetch('/gadgetsData.json')
      },
      {
        path: "/category/:category/product/:product_id",
        element: <ProductDetails></ProductDetails>,
        loader: () => fetch('/gadgetsData.json'),
      },
      {
        path: "statistics",
        element: <Statistics></Statistics>
      },
      {
        path: "dashboard",
        element: <Dashboard></Dashboard>,
        loader: () => fetch('/gadgetsData.json')
      },
      {
        path: "faq",
        element: <Faq></Faq>
      }
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
