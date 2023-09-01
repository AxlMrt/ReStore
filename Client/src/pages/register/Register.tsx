import Banner from "../../components/banner/Banner";
import ValidButton from "../../components/buttons/valid-btn/ValidButton";
import { useState, useRef } from "react";
import "./register.css";
import { useAppDispatch } from "../../app/store/configureStore";
import { useNavigate } from "react-router-dom";
import agent from "../../app/api/agent";
import { signInUser } from "../../app/store/slice/accountSlice";

export default function Register() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  
  const [checked, setChecked] = useState(false);
  const firstNameRef = useRef() as React.MutableRefObject<HTMLInputElement>;
  const lastNameRef = useRef() as React.MutableRefObject<HTMLInputElement>;
  const emailRef = useRef() as React.MutableRefObject<HTMLInputElement>;
  const passwordRef = useRef() as React.MutableRefObject<HTMLInputElement>;


  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    agent.Account.login({
      username: userRef.current.value,
      password: passwordRef.current.value,
    });

    await dispatch(
      signInUser({
        username: userRef.current.value,
        password: passwordRef.current.value,
      })
    );
    navigate("/collection");
  };

  return (
    <>
      <Banner name="Register" />
      <main className="register">
        <div className="overlay">
          <div className="modal_container" id="modal">
            <div className="modal_header">
              <div className="modal_title">
                <h3>Registering</h3>
              </div>
              <p>It's fast and easy</p>
            </div>
            <form className="register_form" onSubmit={handleSubmit}>
              <div className="form_names">
                <input
                  type="text"
                  id="firstName"
                  ref={firstNameRef}
                  placeholder="First name"
                />
                <input
                  type="text"
                  id="lastName"
                  ref={lastNameRef}
                  placeholder="Last name"
                />
              </div>
              <input
                type="email"
                id="email"
                ref={emailRef}
                placeholder="E-mail"
              />
              <input
                type="password"
                id="password"
                ref={passwordRef}
                placeholder="Password"
              />


              <ValidButton href="" message="Register" />
            </form>
          </div>
        </div>
      </main>
    </>
  );
}
