import React from "react";
import Styles from "./Footer.module.scss";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <section className={Styles.sectionFooter}>
      {/* Footer Links */}
      <div className="container text-md-left">
        {/* Grid row */}
        <div className="row">
          {/* Grid column */}
          <div className="col-md-6">
            {/* Content */}

            <h5
              className={`${
                Styles.footerContainer
              }  font-weight-bold text-uppercase mt-3 mb-4`}
            >
              Footer Content
            </h5>
            <p className={Styles.footerLink}>
              Test website is a job site in the Middle East, connecting job
              seekers with employers. Our goal is to provide you with an
              opportunity to find a job as easy as we can.
            </p>
          </div>
          {/* Grid column */}
          <hr className="clearfix w-100 d-md-none" />
          {/* Grid column */}
          <div className="col-md-2">
            {/* Links */}
            <div
              className={`${Styles.footerContainer}  text-uppercase  mt-3 mb-4`}
            >
              Company
            </div>

            <ul className={`${Styles.footerList} list-unstyled`}>
              <li className={Styles.footerItem}>
                <Link to="/" className={Styles.footerLink}>
                  About Us
                </Link>
              </li>
              <li className={Styles.footerItem}>
                <Link to="/" className={Styles.footerLink}>
                  Contact Us
                </Link>
              </li>
              <li className={Styles.footerItem}>
                <Link to="/" className={Styles.footerLink}>
                  Careers
                </Link>
              </li>
              <li className={Styles.footerItem}>
                <Link to="/" className={Styles.footerLink}>
                  Press Corner
                </Link>
              </li>
            </ul>
          </div>
          {/* Grid column */}
          <hr className="clearfix w-100 d-md-none" />
          {/* Grid column */}
          <div className="col-md-2 ">
            {/* Links */}
            <div
              className={`${Styles.footerContainer}  text-uppercase mt-3 mb-4`}
            >
              Quick Links
            </div>
            <ul className={`${Styles.footerList} list-unstyled`}>
              <li className={Styles.footerItem}>
                <Link to="/" className={Styles.footerLink}>
                  Blog
                </Link>
              </li>
              <li className={Styles.footerItem}>
                <Link to="/" className={Styles.footerLink}>
                  Help
                </Link>
              </li>
              <li className={Styles.footerItem}>
                <Link to="/" className={Styles.footerLink}>
                  Affiliate Program
                </Link>
              </li>
              <li className={Styles.footerItem}>
                <Link to="/" className={Styles.footerLink}>
                  Never Miss an Email
                </Link>
              </li>
            </ul>
          </div>
          {/* Grid column */}
          <hr className="clearfix w-100 d-md-none" />
          {/* Grid column */}
          <div className="col-md-2 ">
            {/* Links */}
            <div
              className={`${Styles.footerContainer}  text-uppercase mt-3 mb-4`}
            >
              Contact
            </div>
            <ul className={`${Styles.footerList} list-unstyled`}>
              <li className={Styles.footerItem}>
                <Link to="/" className={Styles.footerLink}>
                  New York, NY 10012, US
                </Link>
              </li>
              <li className={Styles.footerItem}>
                <Link to="/" className={Styles.footerLink}>
                  info@gmail.com
                </Link>
              </li>
              <li className={Styles.footerItem}>
                <Link to="/" className={Styles.footerLink}>
                  + 01 234 567 88
                </Link>
              </li>
              <li className={Styles.footerItem}>
                <Link to="/" className={Styles.footerLink}>
                  + 01 234 567 89
                </Link>
              </li>
            </ul>
          </div>
          {/* Grid column */}
        </div>
        {/* Grid row */}
      </div>
      {/* Footer Links */}
      <hr />
      {/* Call to action */}

      {/* Social buttons */}
      <ul className="list-unstyled list-inline text-center">
        <li className="list-inline-item">
          <Link to="/www.facebook.com" className={Styles.followUs}>
            <i className="fab fa-facebook-f"> </i>
          </Link>
        </li>
        <li className="list-inline-item">
          <Link to="/www.twitter.com" className={Styles.followUs}>
            <i className="fab fa-twitter"> </i>
          </Link>
        </li>
        <li className="list-inline-item">
          <Link to="/www.google.com" className={Styles.followUs}>
            <i className="fab fa-google-plus-g"> </i>
          </Link>
        </li>
        <li className="list-inline-item">
          <Link to="/www.linkedin.com" className={Styles.followUs}>
            <i className="fab fa-linkedin-in"> </i>
          </Link>
        </li>
        <li className="list-inline-item">
          <Link to="/www.dribbble.com" className={Styles.followUs}>
            <i className="fab fa-dribbble"> </i>
          </Link>
        </li>
      </ul>
      {/* Social buttons */}
      {/* Copyright */}
      <div className="footer-copyright text-center py-3">
        © 2018 Copyright: Hani Mazen Abukhait
      </div>
      {/* Copyright */}

      {/* Footer */}
    </section>
  );
};
export default Footer;
