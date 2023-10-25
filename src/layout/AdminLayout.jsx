import AdminHeader from "./AdminHeader";
import { Outlet } from "react-router-dom";

export default function AdminLayout() {
  return (
    <div className="min-h-screen">
      <AdminHeader />
      <Outlet />
    </div>
  );
}
