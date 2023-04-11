import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BiCart } from "react-icons/bi";
import { useAppSelector } from "../../app/store/configureStore";
import "./header.css";

export default function Header() {
  const { basket } = useAppSelector((state) => state.basket);
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
    { title: "Login", path: "/login" },
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

      <h1>AxlStore</h1>

      <nav className="menu__box">
        <div>
          {navLinks.map((link) => {
            return (
              <Link to={link.path} key={link.title} className="menu__item">
                {link.title}
              </Link>
            );
          })}
        </div>
      </nav>

      <div className="cart_container">
        <div className="cart">
          <Link to="/cart" className="cart_icon">
            <BiCart size={25} />
          </Link>
          <div className="cart_num">
            <span>{itemCount}</span>
          </div>
        </div>
      </div>
    </header>
  );
}