import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import New from './components/newtodo.jsx';
import Details from './components/tododetails.jsx';
import List from './components/todolist.jsx';

const router = createBrowserRouter ([
  {
    path: "/",
    element: <List />,
  },

  {
    path: "/details/:id",
    element: <Details />,
  },

  {
    path: "/New",
    element: <New />,
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
