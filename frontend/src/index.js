import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Internship } from './Pages/Internship';
import { FullTime } from './Pages/FullTime';
import { Designer } from './Pages/Designer';
import { Engineering } from './Pages/Engineering';
import { Other } from './Pages/Other';
import { Marketer } from './Pages/Marketer';
import { Create } from './Pages/Create';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/Internship",
    element: <Internship />
  },
  {
    path: "/Designer",
    element: <Designer />
  },
  {
    path: "/Fulltime",
    element: <FullTime />
  },
  {
    path: "/Designer",
    element: <Designer />
  },
  {
    path: "/Engineering",
    element: <Engineering />
  },
  {
    path: "/Marketer",
    element: <Marketer />
  },
  {
    path: "/Other",
    element: <Other />
  },
  {
    path: "/Create",
    element: <Create />
  },
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
        <RouterProvider router={router} >
          <App />
        </RouterProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
