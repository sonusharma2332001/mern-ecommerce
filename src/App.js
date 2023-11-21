import React from 'react';
import './App.css';
import Home from './Pages/Home';
import Loginpage from './Pages/Loginpage';
import SignUppage from './Pages/SignUppage';

// import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: (<Home/>)
  },
  {
    path: "/login",
    element: (<Loginpage/>),
  },
  {
    path: "/signup",
    element: (<SignUppage/>),
  },
]);



function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
