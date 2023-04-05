import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Header from "../../../components/header/Header.js";
import "react-toastify/dist/ReactToastify.css";
import "./style.css";

function App() {
  return (
    <main className="App">
      <ToastContainer position="bottom-right" hideProgressBar theme="colored" />
      <Header />
      <Outlet />
    </main>
  );
}

export default App;
