import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./pages/routes/Routes";
import { Provider } from "react-redux";
import { store } from "./app/store/configureStore";
import { fetchProductsAsync } from "./app/store/slice/catalogSlice";

store.dispatch(fetchProductsAsync());

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
