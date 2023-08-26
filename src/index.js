import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";
import Home from './pages/Home/components/Home';
import BlockDetails from './pages/BlockDetails/BlockDetails';
import AddressDetails from './pages/AddressDetails/components/AddressDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!
      <Outlet/>
    </div>,
    children: [
      {
        index: true,
        element: <Home/>
      },
      {
        path: "block",
        element: <BlockDetails/>
      },
      {
        path: "address",
        element: <AddressDetails/>
      },
    ]
  },
]);

ReactDOM.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

