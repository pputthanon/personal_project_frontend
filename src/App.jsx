import { ToastContainer } from "react-toastify";

import Route from "./router/Route";
import { useAuth } from "./hooks/use-auth";
import Loading from "./components/Loading";

function App() {
  const { loading } = useAuth();
  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <Route />
      <ToastContainer position="top-center" theme="colored" />
    </>
  );
}
export default App;
