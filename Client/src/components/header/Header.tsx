import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../app/store/configureStore";
import { BiLogIn } from "react-icons/bi";
import NavBar from "./navBar/NavBar";
import CartIcon from "./cartIcon/CartIcon";
import "./header.css";

export default function Header() {
  const { basket } = useAppSelector((state) => state.basket);
  const { user } = useAppSelector((state) => state.account);
  const [scroll, setScroll] = useState<boolean>(false);
  const itemCount: number | undefined = basket?.items.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  const navLinks = [
    { title: "Home", path: "/" },
    { title: "Collection", path: "/collection" },
    { title: "About", path: "/about" },
    { title: "Contact", path: "/contact" },
    {
      title: <BiLogIn size={20}/>,
      path: "/login",
      submenu: [
        {
          title: user ? "Profile" : "Login",
          path: user ? "/profile" : "/login",
        },
        {
          title: user ? "Logout" : "Register",
          path: user ? "/" : "/register",
        },
      ],
    },
  ];

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 50);
    });
  }, []);

  return (
    <header className={scroll ? "scrolling" : ""}>
      <input id="menu__toggle" type="checkbox" />
      <label className="menu__btn" htmlFor="menu__toggle">
        <span></span>
      </label>

      <Link to='/'>
        <h1>AxlStore</h1>
      </Link>

      <NavBar navLinks={navLinks} />

      <CartIcon itemCount={itemCount} />
    </header>
  );
}