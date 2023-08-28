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
import Home, { loader as homeLoader } from './pages/Home/components/Home';
import BlockDetails from './pages/BlockDetails/BlockDetails';
import AddressDetails from './pages/AddressDetails/components/AddressDetails';
import Root from './pages/Root/Root';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,

    children: [
      {
        index: true,
        element: <Home />,
        loader: homeLoader,
        
      },
      {
        path: "block/:blocknumber",
        element: <BlockDetails />
      },
      {
        path: "address/:address",
        element: <AddressDetails />
      },
      {
        path: "transaction/:address",
        element: <AddressDetails />
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

