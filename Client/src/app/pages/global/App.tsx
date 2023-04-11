import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { useStoreContext } from "../../context/StoreContext.js";
import { useEffect, useState } from "react";
import Header from "../../../components/header/Header.js";
import LoadingComponent from "./LoadingComponent.js";
import agent from "../../api/agent.js";
import "react-toastify/dist/ReactToastify.css";
import "./style.css";
import { getCookie } from "../../utils/util.js";

function App() {
  const { setBasket } = useStoreContext();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const buyerId = getCookie('buyerId');
    if (buyerId) {
      agent.Basket.get()
        .then((basket) => setBasket(basket))
        .catch((error) => console.log(error))
        .finally(() => setLoading(false));
    } else {
      setLoading(false);
    }
  }, [setBasket]);

  if (loading) return <LoadingComponent message="Loading app..." />

  return (
    <main className="App">
      <ToastContainer position="bottom-right" hideProgressBar theme="colored" />
      <Header />
      <Outlet />
    </main>
  );
}

export default App;
