import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { useAppDispatch } from "../store/configureStore.js";
import { getCookie } from "../../app/utils/util.js";
import { useEffect, useState } from "react";
import Header from "../../components/header/Header.js";
import LoadingComponent from "./LoadingComponent.js";
import agent from "../../app/api/agent.js";
import "react-toastify/dist/ReactToastify.css";
import "./style.css";
import { setBasket } from "../store/slice/basketSlice.js";

function App() {
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const buyerId = getCookie("buyerId");
    if (buyerId) {
      agent.Basket.get()
        .then((basket) => dispatch(setBasket(basket)))
        .catch((error) => console.log(error))
        .finally(() => setLoading(false));
    } else {
      setLoading(false);
    }
  }, [dispatch]);

  if (loading) return <LoadingComponent message="Loading app..." />;

  return (
    <div className="App">
      <ToastContainer position="bottom-right" hideProgressBar theme="colored" />
      <Header />
      <Outlet />
    </div>
  );
}

export default App;
