import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";
import Banner from "../../components/banner/Banner";

export default function Login() {
  const [openModal, setOpenModal] = useState(false);
  const emailRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/home");
  };

  return (
    <section>
      <Banner name="Login" />
      <div className="login">
        <div className="login_card">
          <form action="" className="login_form" onSubmit={handleSubmit}>
            <input
              type="email"
              id="email"
              ref={emailRef}
              placeholder="Adresse e-mail"
              required
            />
            <input
              type="password"
              id="password"
              ref={passwordRef}
              placeholder="Mot de passe"
              required
            />
            <button type="submit" id="submitBtn">
              Se connecter
            </button>
          </form>
          <button
            type="button"
            id="login_modal"
            onClick={() => setOpenModal(!openModal)}
          >
            Créer nouveau compte
          </button>
        </div>
      </div>
    </section>
  );
}
