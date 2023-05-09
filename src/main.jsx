import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './component/Home';
import About from './component/About';
import Contact from './component/Contact';
import AllMeals from './component/AllMeals';
import MealByInput from './component/MealByInput';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "about",
        element: <About/>
      },
      {
        path: "allmeal",
        element: <AllMeals/>,
        loader: () => fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
      },
      {
        path: "/:mealName",
        element: <MealByInput></MealByInput>,
        loader: ({params}) => fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${params.mealName}`)
      },
      {
        path: "contact",
        element: <Contact/>
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
