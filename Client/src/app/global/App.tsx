import { useCallback, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { useAppDispatch } from "../store/configureStore.js";
import { fetchBasketAsync } from "../store/slice/basketSlice.js";
import { fetchCurrentUser } from "../store/slice/accountSlice.js";
import Header from "../../components/header/Header.js";
import LoadingComponent from "./LoadingComponent.js";
import "react-toastify/dist/ReactToastify.css";
import "./style.css";

function App() {
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState(true);

  const initApp = useCallback(async () => {
    try {
      await dispatch(fetchCurrentUser());
      await dispatch(fetchBasketAsync());
    } catch (error) {
      console.log(error);
    }
  }, [dispatch]);

  useEffect(() => {
    initApp().then(() => setLoading(false));
  }, [initApp]);

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
