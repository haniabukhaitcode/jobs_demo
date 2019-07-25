import React from "react";
import Styles from "./Header.module.scss";

const Header = () => {
  return (
    <div className={Styles.sectionheader}>
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <div className={Styles.searchHero}>
              <div className={Styles.customContainer}>
                <h2>
                  This website done using JavaScript(ES6+), Bootstrap Grid,
                  ReactJs, SCSS,Redux &nbsp;
                  <br />
                </h2>

                <div className={Styles.search}>
                  <input
                    type="text"
                    className={Styles.searchInput}
                    placeholder="Search jobs.."
                  />
                  <button className={Styles.searchBtn} type="submit">
                    Get Started
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
