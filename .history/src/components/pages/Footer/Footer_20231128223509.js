import React from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Button } from "../../Button";
import { useNavigate } from "react-router-dom";
import "./Footer.css";

function Footer() {
  const navigate = useNavigate();

  return (
    <div className="footer-container">
      <div className="footer-links">
        <div className="footer-link-wrapper">
          <div className="footer-link-items first" style={{ width: "50%" }}>
            <div className="footer-address">
              <img
                src="/images/logo.svg"
                alt="logo"
                style={{ width: "205px", paddingRight: "20px" }}
              />
              <p
                className="footer-subscription-text"
                style={{ fontSize: "14px" }}
              >
                Roadaxle Truck Parts Limited <br />
                1050 Industrial Rd
                <br />
                Ayr, ON N0B 1E0
                <br />
                +1 519-621-7779
              </p>
            </div>
          </div>
          <div className="footer-link-items first" style={{ width: "30%" }}>
            <h2>Follow Us</h2>
            <div className="social-icons">
              <Link
                to="/"
                target="_blank"
                aria-label="Facebook"
                className="social-icon-link facebook"
              >
                <FaFacebook />
              </Link>
              <Link
                to="/"
                target="_blank"
                aria-label="Instagram"
                className="social-icon-link instagram"
              >
                <FaInstagram />
              </Link>
            </div>
          </div>
          <div className="footer-link-items " style={{ width: "20%" }}>
            <h2>Contact Us</h2>
            <div className="social-icons">
              <Button
                className="email-link"
                onClick={() => navigate("/contact-us")}
              >
                Email
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
