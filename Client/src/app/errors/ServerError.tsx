import { useLocation } from "react-router-dom";
import Banner from "../../components/banner/Banner";
import "./servererror.css";

export default function ServerError() {
  const { state } = useLocation();

  return (
    <section>
      <Banner id={null} />
      <div className="server_error">
        {state?.error ? (
          <div className="server_error">
            <div className="server_error_container">
              <h3>{state.error.title}</h3>
            </div>
            <div className="server_error_container">
              <p>{state.error.detail || "Internal Server Error"}</p>
            </div>
          </div>
        ) : (
          <div className="server_error_container">
            <h5>Server error</h5>
          </div>
        )}
      </div>
    </section>
  );
}
