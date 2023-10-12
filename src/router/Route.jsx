import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "../layout/Layout";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import CartPage from "../pages/CartPage";
import Authenticated from "../features/auth/Authenticated";
import RedirectIfAuthenticate from "../features/auth/RedirectIfAuthenticate";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <RedirectIfAuthenticate>
        <Layout />
      </RedirectIfAuthenticate>
    ),
    children: [
      {
        path: "login",
        element: <LoginPage />,
      },
      {
        path: "register",
        element: <RegisterPage />,
      },
      {
        path: "",
        element: <HomePage />,
      },
    ],
  },
  // {
  //   path: "/",
  //   element: (
  //     <Authenticated>
  //       <Layout />
  //     </Authenticated>
  //   ),
  //   children: [
  //     { path: "", element: <HomePage /> },
  //     { path: "register", element: <RegisterPage /> },
  //     // { path: "login", element: <LoginPage /> },
  //     { path: "cart", element: <CartPage /> },
  //   ],
  // },
]);

export default function Route() {
  return <RouterProvider router={router} />;
}
