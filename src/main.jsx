import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Artists from './Artists.jsx'
import Genres from './Genres.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Random from './Random.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "artists",
    element: <Artists/>
  },
  {
    path: "genres",
    element: <Genres/>
  },
  {
    path: "random",
    element: <Random/>
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
);
