import { Navigate, createBrowserRouter } from "react-router-dom";
import Single from "../single/Single";
import Collection from "../collection/Collection";
import Contact from "../contact/Contact";
import About from "../about/About";
import Home from "../home/Home";
import App from "../../app/global/App";
import ServerError from "../../app/errors/ServerError";
import NotFound from "../../app/errors/NotFound";
import Cart from "../cart/Cart";
import Register from "../register/Register";
import Checkout from "../checkout/Checkout";
import Login from "../login/Login";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "", element: <Home /> },
      { path: "collection", element: <Collection /> },
      { path: "collection/:id", element: <Single /> },
      { path: "about", element: <About /> },
      { path: "contact", element: <Contact /> },
      { path: "cart", element: <Cart /> },
      { path: "checkout", element: <Checkout /> },
      { path: "register", element: <Register /> },
      { path: "login", element: <Login /> },
      { path: "server-error", element: <ServerError /> },
      { path: "not-found", element: <NotFound /> },
      { path: "*", element: <Navigate replace to="/not-found" /> },
    ],
  },
]);