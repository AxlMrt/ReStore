import { Navigate, createBrowserRouter } from "react-router-dom";
import SingleProduct from "../../../components/singleProduct/SingleProduct";
import Collection from "../collection/Collection";
import Contact from "../contact/Contact";
import About from "../about/About";
import Home from "../home/Home";
import App from "../global/App";
import ServerError from "../../errors/ServerError";
import NotFound from "../../errors/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "", element: <Home /> },
      { path: "collection", element: <Collection /> },
      { path: "collection/:id", element: <SingleProduct /> },
      { path: "about", element: <About /> },
      { path: "contact", element: <Contact /> },
      { path: "server-error", element: <ServerError /> },
      { path: "not-found", element: <NotFound /> },
      { path: "*", element: <Navigate replace to='/not-found' /> },
    ],
  },
]);