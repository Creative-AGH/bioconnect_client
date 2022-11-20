import "./App.css";
import "mapbox-gl/dist/mapbox-gl.css";
import RegisterForm from "./components/forms/registerForm";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginForm from "./components/forms/loginForm";
import ErrorPage from "./views/errorPage";
import { LandingPage } from "./components/landings/LandingPage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <LandingPage />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/login",
      element: <LoginForm />,
    },
    {
      path: "/register",
      element: <RegisterForm />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
