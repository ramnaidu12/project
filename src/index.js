import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Admin from './features/admin';
import Campaign from './features/campaign';
import Home from './features/home';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"; 
import { Provider } from 'react-redux';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children:[
      {
        path: "/admin",
        element: <Admin/>
      },
      {
        path: "/home",
        element: <Home/>
      },
      {
        path: "/campaign",
        element: <Campaign/>
      },
    ]
  },
 

]); 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider>
<RouterProvider router={router} />
</Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
