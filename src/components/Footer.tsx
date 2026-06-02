import React from "react";

export default function Footer() {
  const baseUrl = import.meta.env.BASE_URL;
  return (
    <footer className="footer">
      <div className="footer-con">
        <img
          className="footer-logo"
          src={baseUrl + "/assets/shared/desktop/logo_white.svg"}
          alt="logo"
        />
        <ul className="social-links">
          <li>
            <a href="#" aria-label="facebook">
              <img
                src={baseUrl + "/assets/shared/desktop/facebook.svg"}
                alt="facebook"
              />
            </a>
          </li>
          <li>
            <a href="#" aria-label="twitter">
              <img
                src={baseUrl + "/assets/shared/desktop/twitter.svg"}
                alt="twitter"
              />
            </a>
          </li>
          <li>
            <a href="#" aria-label="pinterest">
              <img
                src={baseUrl + "/assets/shared/desktop/pinterest.svg"}
                alt="pinterest"
              />
            </a>
          </li>
          <li>
            <a href="#" aria-label="instagram">
              <img
                src={baseUrl + "/assets/shared/desktop/instagram.svg"}
                alt="instagram"
              />
            </a>
          </li>
          <li>
            <a href="#" aria-label="youtube">
              <img
                src={baseUrl + "/assets/shared/desktop/youtube.svg"}
                alt="youtube"
              />
            </a>
          </li>
        </ul>
        <nav>
          <ul className="footer-nav-list">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Stories</a>
            </li>
            <li>
              <a href="#">Features</a>
            </li>
            <li>
              <a href="#">Pricing</a>
            </li>
          </ul>
        </nav>
        <a href="#" className="footer-invite-btn">
          GET AN INVITE
          <img
            src={baseUrl + "/assets/shared/desktop/arrow.svg"}
            alt="arrow"
            className="arrow"
          />
        </a>
        <p className="copyright">Copyright 2019. All Rights Reserved</p>
      </div>
    </footer>
  );
}
