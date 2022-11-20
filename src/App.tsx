import "./App.css";
import Map from "./components/map";
import "mapbox-gl/dist/mapbox-gl.css";
import RegisterForm from "./components/forms/registerForm";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginForm from "./components/forms/loginForm";
import ErrorPage from "./views/errorPage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <div>Hello world!</div>,
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

  return (
    <RouterProvider router={router} />
  );
}

export default App;
