import "./banner.css";

interface Props {
  id?: number;
}
export default function Banner({ id }: Props) {
  const path = location.pathname;

  const name =
    path === "/collection" ? (
      <span>Shop</span>
    ) : path === `/collection/${id}` ? (
      <span>Shop Product</span>
    ) : path === "/about" ? (
      <span>About</span>
    ) : path === "/contact" ? (
      <span>Contact</span>
    ) : path === "/server-error" ? (
      <span>Server error</span>
    ) : path === "/cart" ? (
      <span>Cart</span>
    ) : path === "/register" ? (
      <span>Register</span>
    ) :(
      <span>Not-found</span>
    );
  return (
    <div className="banner">
      <h4>Home / {name}</h4>
    </div>
  );
}
