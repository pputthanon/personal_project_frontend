import { ToastContainer } from "react-toastify";

import Route from "./router/Route";

function App() {
  return (
    <>
      <Route />;
      <ToastContainer position="top-center" theme="colored" />
    </>
  );
}
export default App;
