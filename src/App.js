import "./App.css";
import React, { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SignupForm from "./Components/SignupForm";
//-------------Pages
import HomePage from "./Pages/HomePage";
import Login from "./Pages/Login";
import VerifyEmail from "./Pages/VerifyEmail";
import SignupPage from "./Pages/SignupPage";
import Logout from "./Pages/Logout";

//........................
const router = createBrowserRouter([
  {
    path: "/",

    children: [
      { index: true, element: <HomePage /> },
      { path: "login", element: <Login /> },
      { path: "signup", element: <SignupPage /> },
      { path: "verify", element: <VerifyEmail /> },
      { path: "logout", element: <Logout /> },
    ],
  },
]);
function App() {
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
      <SignupForm/>

    </div>
  );
}

export default App;
