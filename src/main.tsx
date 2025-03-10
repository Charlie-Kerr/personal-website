import './index.css'
import React from "react";
import * as ReactDOM from "react-dom/client";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";

import Home from './App.tsx'
import About from './About.tsx';
import Contact from './Contact.tsx';
import Projects from './Projects.tsx';

const Root = () => <Outlet />;
// Suggested code may be subject to a license. Learn more: ~LicenseLog:3368142676.
// Suggested code may be subject to a license. Learn more: ~LicenseLog:2266204845.
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "projects",
        element: <Projects />,
      },
      {
        path: "contact",
        element: <Contact />,
      }
    ]
  }]);
ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
