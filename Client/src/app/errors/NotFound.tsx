import { Link } from "react-router-dom";
import Banner from "../../components/banner/Banner";
import "./servererror.css";

export default function NotFound() {
  return (
    <section>
      <Banner id={null} />
      <div className="server_error">
        <h3>Oops, we could not find what you are looking for.</h3>
        <Link to="/collection">Go back to shopping</Link>
      </div>
    </section>
  );
}
