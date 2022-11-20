import "./App.css";
import "mapbox-gl/dist/mapbox-gl.css";
import RegisterForm from "./components/forms/registerForm";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginForm from "./components/forms/loginForm";
import ErrorPage from "./views/errorPage";
import { LandingPage } from "./components/landings/LandingPage";
import { EducationPage } from "./components/educationList/Educationlist";
import UserLayout from "./components/Layout/UserLayout/UserLayout";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <UserLayout />,
      children: [
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
        {
          path: "/education",
          element: <EducationPage />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
