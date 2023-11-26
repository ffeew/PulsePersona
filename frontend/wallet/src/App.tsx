import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import VerificationCredentials from "./pages/VerificationCredentials";
import Navbar from "./components/Navbar";
import Settings from "./pages/Settings";
import Register from "./pages/Register";
import Logout from "./pages/Logout";
import Login from "./pages/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Navbar />
        <Outlet />
      </>
    ),
    children: [
      {
        path: "/",
        element: <VerificationCredentials />,
      },
      {
        path: "/settings",
        element: <Settings />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/logout",
        element: <Logout />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}
export default App;
