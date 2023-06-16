import React from "react";
import { AiFillFacebook as FacebookIcon } from "react-icons/ai";
import { BsTwitter as TwitterIcon } from "react-icons/bs";
import { AiFillInstagram as InstagramIcon } from "react-icons/ai";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="footer_title">
        <h3>Furniture</h3>
        <p>
          The advantage of hiring a workspace with us is that gives you
          comfortable service and all around facilities.
        </p>
      </div>

      <div className="footer_links">
        <div className="services">
          <h5 className="footer_subtitle">Services</h5>
          <ul className="footer_list">
            <li>Wide product range</li>
            <li>Logistics solutions</li>
            <li>Fast delivery</li>
            <li>After sales service</li>
          </ul>
        </div>
        <div className="socials">
          <h5 className="footer_subtitle">Follow Us</h5>
          <ul className="footer_list social-link">
            <a href="https://www.facebook.com" target="_blank">
              <li>
                <FacebookIcon style={{ color: "#4267B2" }} />
                <p>Facebook</p>
              </li>
            </a>
            <a href="https://twitter.com" target="_blank">
              <li>
                <TwitterIcon style={{ color: "#1DA1F2" }} />
                <p>Twitter</p>
              </li>
            </a>
            <a href="https://www.instagram.com" target="_blank">
              <li>
                <InstagramIcon style={{ color: "#F56040" }} />
                <p>Instagram</p>
              </li>
            </a>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
