import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../app/store/configureStore";
import { signInUser } from "../../app/store/slice/accountSlice";
import Banner from "../../components/banner/Banner";
import agent from "../../app/api/agent";
import "./login.css";

export default function Login() {
  const userRef = useRef() as React.MutableRefObject<HTMLInputElement>;
  const passwordRef = useRef() as React.MutableRefObject<HTMLInputElement>;
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

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
    <section>
      <Banner name="Login" />
      <div className="login">
        <div className="login_card">
          <form action="" className="login_form" onSubmit={handleSubmit}>
            <input
              type="text"
              ref={userRef}
              placeholder="Adresse e-mail"
              required
            />
            <input
              type="password"
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
            onClick={() => navigate("/register")}
          >
            Créer nouveau compte
          </button>
        </div>
      </div>
    </section>
  );
}
