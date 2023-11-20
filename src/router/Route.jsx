import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "../layout/Layout";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import CartPage from "../pages/CartPage";
import Authenticated from "../features/auth/Authenticated";
import RedirectIfAuthenticate from "../features/auth/RedirectIfAuthenticate";
import AccountPage from "../pages/AccountPage";
import OrdersPage from "../pages/OrdersPage";
import PaymentPage from "../pages/PaymentPage";
import EditAccountPage from "../pages/EditAccountPage";
import CheckoutPage from "../pages/CheckoutPage";
import AdminPage from "../pages/admin-pages/AdminPage";

import AdminAuthenticated from "../features/auth/AdminAuthenticated";
import AdminLayout from "../layout/AdminLayout";
import OrderListPage from "../pages/admin-pages/OrderListPage";
import { useAuth } from "../hooks/use-auth";
import { useMemo } from "react";
import OrderItemPage from "../pages/OrderItemPage";
import CreateBookPage from "../pages/admin-pages/CreateBookPage";
import AdminOrderItems from "../pages/admin-pages/AdminOrderItems";

const router = createBrowserRouter([
  {
    path: "/admin",
    element: (
      <AdminAuthenticated>
        <AdminLayout />
      </AdminAuthenticated>
    ),

    children: [
      { path: "", element: <AdminPage /> },
      { path: "/admin/create", element: <CreateBookPage /> },
      { path: "/admin/orders", element: <OrderListPage /> },
      { path: "/admin/orderItems/:orderId", element: <AdminOrderItems /> },
    ],
  },
  {
    path: "/",
    element: (
      <Authenticated>
        <Layout />
      </Authenticated>
    ),
    children: [
      { path: "homepage", element: <HomePage /> },
      { path: "cart", element: <CartPage /> },
      { path: "account", element: <AccountPage /> },
      { path: "account/edit", element: <EditAccountPage /> },
      { path: "account/order-history", element: <OrdersPage /> },
      { path: "account/payment-inform", element: <PaymentPage /> },
      { path: "checkout", element: <CheckoutPage /> },
      { path: "order/orderItems/:orderId", element: <OrderItemPage /> },
    ],
  },
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
    ],
  },
]);

export default function Route() {
  return <RouterProvider router={router} />;
}
