import Banner from "../../../components/banner/Banner";

import { useState, useRef } from "react";
import "./register.css";

export default function Register() {
  const [checked, setChecked] = useState(false);
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const dayRef = useRef();
  const monthRef = useRef();
  const yearRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const firstName: string = firstNameRef.current.value;
    const lastName: string = lastNameRef.current.value;
    const email: string = emailRef.current.value;
    const password: string = passwordRef.current.value;
    const day: number = dayRef.current.value;
    const month: number = monthRef.current.value;
    const year: number = yearRef.current.value;

    console.log(new Date(year, month, day));

    const newUser = {
      firstName,
      lastName,
      email,
      password,
      birth: new Date(year, month, day),
    };
  };

  const yearList = () => {
    const year = new Date().getFullYear();
    return Array.from(new Array(80), (value, index) => (
      <option key={year + index} value={year - index}>
        {year - index}
      </option>
    ));
  };

  const monthList = () => {
    const months = [
      "january",
      "february",
      "march",
      "april",
      "may",
      "june",
      "july",
      "august",
      "september",
      "october",
      "november",
      "december",
    ];

    return Array.from(new Array(12), (value, index) => (
      <option key={1 + index} value={index}>
        {months[index].slice(0, 3)}
      </option>
    ));
  };

  const dayList = () => {
    const counter = 1;
    return Array.from(new Array(31), (value, index) => (
      <option key={counter + index} value={counter + index}>
        {counter + index}
      </option>
    ));
  };

  const pronounList = () => {
    const pronoun = ["She", "He", "Neutral"];
    return Array.from(new Array(3), (value, index) => (
      <option key={pronoun[index] + index} value={pronoun[index]}>
        {pronoun[index]}
      </option>
    ));
  };

  return (
    <section className="register">
      <Banner />
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
            <div>
              <div className="form_birth_container">
                <span>Birth date</span>
                <div className="form_birth">
                  <select id="day" ref={dayRef}>
                    {dayList()}
                  </select>
                  <select id="month" ref={monthRef}>
                    {monthList()}
                  </select>
                  <select id="year" ref={yearRef}>
                    {yearList()}
                  </select>
                </div>
              </div>
              <div className="form_gender_container">
                <span>Gender</span>
                <div className="form_gender">
                  <div>
                    <p>Woman</p>
                    <input
                      type="radio"
                      name="gender"
                      id=""
                      onClick={() => setChecked(false)}
                    />
                  </div>
                  <div>
                    <p>Man</p>
                    <input
                      type="radio"
                      name="gender"
                      id=""
                      onClick={() => setChecked(false)}
                    />
                  </div>
                  <div>
                    <p>Personalized</p>
                    <input
                      type="radio"
                      name="gender"
                      id=""
                      onClick={() => setChecked(true)}
                    />
                  </div>
                </div>
                {checked && (
                  <div className="gender_select">
                    <select name="" id="">
                      <option selected="1" disabled="1">
                        Select your pronoun
                      </option>
                      {pronounList()}
                    </select>
                    <input
                      type="text"
                      name=""
                      id=""
                      placeholder="Gender (optional)"
                    />
                  </div>
                )}
              </div>
            </div>

            <button type="submit" id="submitBtn" className="register_btn">
              Register
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
