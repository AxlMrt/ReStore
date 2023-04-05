import "./servererror.css";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="server_error">
      <h3>Oops, we could not find what you are looking for.</h3>
      <Link to="/collection">Go back to shopping</Link>
    </div>
  );
}
