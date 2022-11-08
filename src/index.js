import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './Home';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter, RouterProvider,
} from 'react-router-dom'
import Lesson from './Components/Lesson';
import SelectScreen from './SelectScreen';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/lessons",
    element: <SelectScreen name="Start Lesson" type="lesson" />
  },
  {
    path: "/ctf",
    element: <SelectScreen name="Start CTF" type="ctf" />
  },
  {
    path: '/lesson/:topic/:subtopic',
    element: <Lesson />
  },
  {
    path: '/ctf/:topic/:subtopic',
    element: <Lesson />
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
