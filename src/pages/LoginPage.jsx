import LoginForm from "../features/auth/LoginForm";
import { Link } from "react-router-dom";

export default function LoginPage() {
  return (
    <div>
      <LoginForm />
    </div>

    // <div>
    //   <header className=" grid grid-cols-2 py-4 bg-orange-300 shadow-lg top-0 z-30 w-screen">
    //     <div>Onmyway</div>
    //     <div className="flex justify-end gap-4">
    //       <Link to="/register">
    //         <span>Register</span>
    //       </Link>
    //     </div>
    //   </header>
    //   <div>
    //     <LoginForm />
    //   </div>
    // </div>
  );
}
