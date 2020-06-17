import React from "react";
import { Link } from "react-router-dom";

import Container from "./Container";

export default function Footer() {
  return (
    <footer className="p-footer">
      <div className="p-footer__wrapper">
        {" "}
        <Container wide={true}>
          <div className="p-footer__inner u-flow u-flow--5">
            <div className="c-subscribe u-mh-auto">
              <h3 className="c-subscribe__heading">
                Be the first to know about brand new posts, updates and jobs.
              </h3>
              <form className="o-form">
                <div className="o-form__group u-flex">
                  <input type="email" placeholder="Email Address" />
                  <input
                    type="submit"
                    value="Sign Up"
                    className="c-button c-button--submit-dark u-fw-600"
                  />
                </div>
              </form>
            </div>

            <div className="p-footer__contact">
              <p class="u-uppercase">Stay in touch</p>
              <ul class="o-list o-list--inline">
                <li>
                  <a href="#0" aria-label="Twitter" target="_blank">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      id="Capa_1"
                      x="0"
                      y="0"
                      version="1.1"
                      viewBox="0 0 512 512"
                      xmlSpace="preserve"
                    >
                      <style
                        id="dark-mode-custom-style"
                        type="text/css"
                      ></style>
                      <path d="M512 97.248c-19.04 8.352-39.328 13.888-60.48 16.576 21.76-12.992 38.368-33.408 46.176-58.016-20.288 12.096-42.688 20.64-66.56 25.408C411.872 60.704 384.416 48 354.464 48c-58.112 0-104.896 47.168-104.896 104.992 0 8.32.704 16.32 2.432 23.936-87.264-4.256-164.48-46.08-216.352-109.792-9.056 15.712-14.368 33.696-14.368 53.056 0 36.352 18.72 68.576 46.624 87.232-16.864-.32-33.408-5.216-47.424-12.928v1.152c0 51.008 36.384 93.376 84.096 103.136-8.544 2.336-17.856 3.456-27.52 3.456-6.72 0-13.504-.384-19.872-1.792 13.6 41.568 52.192 72.128 98.08 73.12-35.712 27.936-81.056 44.768-130.144 44.768-8.608 0-16.864-.384-25.12-1.44C46.496 446.88 101.6 464 161.024 464c193.152 0 298.752-160 298.752-298.688 0-4.64-.16-9.12-.384-13.568 20.832-14.784 38.336-33.248 52.608-54.496z"></path>
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="#0" aria-label="RSS" target="_blank">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="300"
                      width="300"
                      viewBox="0 0 100 100"
                    >
                      <path d="M31.594 80.462c0 5.904-4.786 10.69-10.689 10.69-5.903 0-10.69-4.786-10.69-10.69 0-5.903 4.786-10.689 10.69-10.689 5.903.001 10.689 4.786 10.689 10.689" />
                      <path d="M10.215 38.188v14.781s35.88 1.002 36.996 38.184h15.801s1.859-50.529-52.797-52.965" />
                      <path d="M10.215 11.027v15.058s58.375-.929 64.881 65.068h14.686s1.673-75.664-79.567-80.126" />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>

            <nav className="p-footer__nav">
              <ul className="o-list o-list--inline">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/terms">Terms</Link>
                </li>
                <li>
                  <a href="#0">Twitter</a>
                </li>
                <li>
                  <a href="#0">Facebook</a>
                </li>
                <li>
                  <a href="#0">Instagram</a>
                </li>
              </ul>
            </nav>

            <div className="p-footer__logo">
              <span>writescape</span>
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
}
