import React from "react";
import Styles from "./SideBar.module.scss";
import { Link } from "react-router-dom";
import Profile from "../Profile/Profile";

const SideBar = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-4">
          <div className={Styles.whiteBox}>
            {/* Container Size 4 */}
            <div className={Styles.sideBarValues}>
              {/* sideBarValues */}
              <div className={Styles.profileSideBar}>
                {/* profileSideBar{" "} */}
                <div className={Styles.sidebarTitle}>
                  <strong>Improve Your Profile</strong>{" "}
                </div>
                <div className={Styles.profileStrength}>
                  <div className={`${Styles.progressBar} progress md-progress`}>
                    50%
                  </div>
                  <div className={Styles.note}>
                    The Stronger Your Profile the more{" "}
                    <strong>visible and apealing </strong>to others.
                  </div>
                  <div className={Styles.progressGood}>
                    <label className={Styles.progressLabel}>
                      <i className="far fa-thumbs-up fa-xs w-100">
                        <span className={Styles.progressText}>
                          Mobile Confirmed
                        </span>
                      </i>
                    </label>
                  </div>
                  <div className={Styles.progressGood}>
                    <label className={Styles.progressLabel}>
                      <i className="far fa-thumbs-up fa-xs w-100">
                        <span className={Styles.progressText}>
                          Email Confirmed
                        </span>
                      </i>
                    </label>
                  </div>
                  <div className={Styles.progressBad}>
                    <label className={Styles.progressLabel}>
                      <i className="far fa-thumbs-down fa-xs w-100">
                        <span className={Styles.progressText}>
                          Confirm Personal Infromation
                        </span>
                      </i>
                    </label>
                  </div>
                  <div className={Styles.progressBad}>
                    <label className={Styles.progressLabel}>
                      <i className="far fa-thumbs-down fa-xs w-100">
                        <span className={Styles.progressText}>
                          Confirm Preffered Jobs
                        </span>
                      </i>
                    </label>
                  </div>

                  <div>
                    {" "}
                    <Link to="/resume" className={Styles.ItemLink}>
                      Show All Items ?
                    </Link>
                    <Link to="/resume" className={Styles.resumeLink}>
                      Upload Your Resume !
                    </Link>
                  </div>

                  <div>
                    <hr />
                    <label className={Styles.upgradeLable}>
                      <Link to="/resume" className={Styles.upgradeLink}>
                        <i className="fas fa-graduation-cap">
                          <span className={Styles.upgradeText}>
                            Upgrade your Account
                          </span>
                        </i>{" "}
                      </Link>
                    </label>
                    <hr />
                    <div className={Styles.References}>
                      <strong>My CV References: </strong>CV60856720{" "}
                      <strong>Refresh Profile: </strong>2018-12-28
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-8">
          <Profile />
        </div>
      </div>
    </div>
  );
};
export default SideBar;
