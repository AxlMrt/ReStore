import { useState } from "react";
import agent from "../../app/api/agent";
import Banner from "../../components/banner/Banner";
import "./about.css";

export default function About() {
  const [validationErrors, setValidationErrors] = useState<string[]>([]);

  function getValidationError() {
    agent.TestErrors.getValidationError()
      .then(() => console.log("should not see this"))
      .catch((error) => setValidationErrors(error));
  }
  return (
    <section>
      <Banner name="About" />
      <div className="error_container">
        <h2>Errors for testing puposes</h2>
        <div className="error_btn">
          <button
            onClick={() =>
              agent.TestErrors.get400Error().catch((error) =>
                console.log(error)
              )
            }
          >
            Test 400 Error
          </button>
          <button
            onClick={() =>
              agent.TestErrors.get401Error().catch((error) =>
                console.log(error)
              )
            }
          >
            Test 401 Error
          </button>
          <button
            onClick={() =>
              agent.TestErrors.get404Error().catch((error) =>
                console.log(error)
              )
            }
          >
            Test 404 Error
          </button>
          <button
            onClick={() =>
              agent.TestErrors.get500Error().catch((error) =>
                console.log(error)
              )
            }
          >
            Test 500 Error
          </button>
          <button onClick={getValidationError}>Test Validation Error</button>
        </div>
        {validationErrors.length > 0 && (
          <div className="validation_error">
            <h1>Validation Errors</h1>
            <ul>
              {validationErrors.map((error) => (
                <li key="error">{error}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
}
