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
import Gadget from './component/Gadget/Gadget';
import Categories from './component/Categories/Categories';

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
            // loader: ()=> fetch('./gadgetsData.json')
          },
          // {
          //   path: "/category/laptops",
          //   element: <Categories category="Laptop" ></Categories>,
          //   loader: ()=> fetch('./gadgetsData.json')
          // },
          // {
          //   path: "/category/phones",
          //   element: <Categories category='Phone' ></Categories>,
          //   loader: ()=> fetch('./gadgetsData.json')
          // },
          // {
          //   path: "/category/smart-Watches",
          //   element: <Categories category='Smart Watche' ></Categories>,
          //   loader: ()=> fetch('./gadgetsData.json')
          // },
          // {
          //   path: "/category/accessories",
          //   element: <Categories category='Accessories' ></Categories>,
          //   loader: ()=> fetch('./gadgetsData.json')
          // }
        ] 
      },
      {
        path: "statistics",
        element: <Statistics></Statistics>
      },
      {
        path: "dashboard",
        element: <Dashboard></Dashboard>
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
