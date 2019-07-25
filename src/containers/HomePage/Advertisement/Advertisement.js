import React from "react";
import Styles from "./Advertisement.module.scss";
import { Link } from "react-router-dom";

const Advertisement = () => {
  return (
    <section className={Styles.sectionAdvertisement}>
      <div className={`${Styles.customContainerAdvertisement} container`}>
        <div className={Styles.sectionAdvertisementHeading}>Jobs In Jordan</div>
        <div
          className={`${
            Styles.customRow
          } row align-items-center justify-content-center`}
        >
          <div
            className={`${
              Styles.cardsCol
            } col-12 col-sm-6 col-md-5 col-lg-4 col-xl-3`}
          >
            <div className={Styles.advertisementCard}>
              <div className={Styles.firstHeading}>Zain Looking For Jobs</div>
              <ul className={Styles.advList}>
                <li>21 Accountant Jobs</li>
                <li>professional Managers</li>
                <li>3 Developers Paython or Javascript </li>
              </ul>
              <Link to="/" className={Styles.advertisementBtn}>
                Check it out!
              </Link>
            </div>
          </div>
          <div
            className={`${
              Styles.cardsCol
            } col-12 col-sm-6 col-md-5 col-lg-4 col-xl-3`}
          >
            <div className={Styles.advertisementCard}>
              <div className={Styles.firstHeading}>Puma Looking For Jobs</div>
              <ul className={Styles.advList}>
                <li>21 Accountant Jobs</li>
                <li>professional Managers</li>
                <li>3 Developers Paython or Javascript </li>
              </ul>
              <Link to="/" className={Styles.advertisementBtn}>
                Check it out!
              </Link>
            </div>
          </div>
          <div
            className={`${
              Styles.cardsCol
            } col-12 col-sm-6 col-md-5 col-lg-4 col-xl-3`}
          >
            <div className={Styles.advertisementCard}>
              <div className={Styles.AdvUmniah}>AdvUmniah Image</div>
              <div className={Styles.firstHeading}>Umniah Looking For Jobs</div>
              <ul className={Styles.advList}>
                <li>21 Accountant Jobs</li>
                <li>professional Managers</li>
                <li>3 Developers Paython or Javascript </li>
              </ul>
              <Link to="/" className={Styles.advertisementBtn}>
                Check it out!
              </Link>
            </div>
          </div>
          <div
            className={`${
              Styles.cardsCol
            } col-12 col-sm-6 col-md-5 col-lg-4 col-xl-3`}
          >
            <div className={Styles.advertisementCard}>
              <div className={Styles.AdvMac}>AdvMac Image</div>
              <div className={Styles.firstHeading}>
                MacDonalds Looking For Jobs
              </div>
              <ul className={Styles.advList}>
                <li>21 Accountant Jobs</li>
                <li>professional Managers</li>
                <li>3 Developers Paython or Javascript </li>
              </ul>
              <Link to="/" className={Styles.advertisementBtn}>
                Check it out!
              </Link>
            </div>
          </div>
          <div
            className={`${
              Styles.cardsCol
            } col-12 col-sm-6 col-md-5 col-lg-4 col-xl-3`}
          >
            <div className={Styles.advertisementCard}>
              <div className={Styles.AdvEbay}>AdvMac Image</div>
              <div className={Styles.firstHeading}>E-bay Looking For Jobs</div>
              <ul className={Styles.advList}>
                <li>21 Accountant Jobs</li>
                <li>professional Managers</li>
                <li>3 Developers Paython or Javascript </li>
              </ul>
              <Link to="/" className={Styles.advertisementBtn}>
                Check it out!
              </Link>
            </div>
          </div>
          <div
            className={`${
              Styles.cardsCol
            } col-12 col-sm-6 col-md-5 col-lg-4 col-xl-3`}
          >
            <div className={Styles.advertisementCard}>
              <div className={Styles.AdvBMW}>AdvMac Image</div>
              <div className={Styles.firstHeading}>BMW Looking For Jobs</div>
              <ul className={Styles.advList}>
                <li>21 Accountant Jobs</li>
                <li>professional Managers</li>
                <li>3 Developers Paython or Javascript </li>
              </ul>
              <Link to="/" className={Styles.advertisementBtn}>
                Check it out!
              </Link>
            </div>
          </div>
          <div
            className={`${
              Styles.cardsCol
            } col-12 col-sm-6 col-md-5 col-lg-4 col-xl-3`}
          >
            <div className={Styles.advertisementCard}>
              <div className={Styles.AdvToyota}>AdvMac Image</div>
              <div className={Styles.firstHeading}>Toyota Looking For Jobs</div>
              <ul className={Styles.advList}>
                <li>21 Accountant Jobs</li>
                <li>professional Managers</li>
                <li>3 Developers Paython or Javascript </li>
              </ul>
              <Link to="/" className={Styles.advertisementBtn}>
                Check it out!
              </Link>
            </div>
          </div>
          <div
            className={`${
              Styles.cardsCol
            } col-12 col-sm-6 col-md-5 col-lg-4 col-xl-3`}
          >
            <div className={Styles.advertisementCard}>
              <div className={Styles.AdvNike}>AdvMac Image</div>
              <div className={Styles.firstHeading}>Nike Looking For Jobs</div>
              <ul className={Styles.advList}>
                <li>21 Accountant Jobs</li>
                <li>professional Managers</li>
                <li>3 Developers Paython or Javascript </li>
              </ul>
              <Link to="/" className={Styles.advertisementBtn}>
                Check it out!
              </Link>
            </div>
          </div>
          <div
            className={`${
              Styles.cardsCol
            } col-12 col-sm-6 col-md-5 col-lg-4 col-xl-3`}
          >
            <div className={Styles.advertisementCard}>
              <div className={Styles.AdvAddidas}>AdvMac Image</div>
              <div className={Styles.firstHeading}>
                Addidas Looking For Jobs
              </div>
              <ul className={Styles.advList}>
                <li>21 Accountant Jobs</li>
                <li>professional Managers</li>
                <li>3 Developers Paython or Javascript </li>
              </ul>
              <Link to="/" className={Styles.advertisementBtn}>
                Check it out!
              </Link>
            </div>
          </div>{" "}
          <div
            className={`${
              Styles.cardsCol
            } col-12 col-sm-6 col-md-5 col-lg-4 col-xl-3`}
          >
            <div className={Styles.advertisementCard}>
              <div className={Styles.AdvNivea}>AdvMac Image</div>
              <div className={Styles.firstHeading}>Nivea Looking For Jobs</div>
              <ul className={Styles.advList}>
                <li>21 Accountant Jobs</li>
                <li>professional Managers</li>
                <li>3 Developers Paython or Javascript </li>
              </ul>
              <Link to="/" className={Styles.advertisementBtn}>
                Check it out!
              </Link>
            </div>
          </div>{" "}
          <div
            className={`${
              Styles.cardsCol
            } col-12 col-sm-6 col-md-5 col-lg-4 col-xl-3`}
          >
            <div className={Styles.advertisementCard}>
              <div className={Styles.AdvApple}>AdvMac Image</div>
              <div className={Styles.firstHeading}>Apple Looking For Jobs</div>
              <ul className={Styles.advList}>
                <li>21 Accountant Jobs</li>
                <li>professional Managers</li>
                <li>3 Developers Paython or Javascript </li>
              </ul>
              <Link to="/" className={Styles.advertisementBtn}>
                Check it out!
              </Link>
            </div>
          </div>{" "}
          <div
            className={`${
              Styles.cardsCol
            } col-12 col-sm-6 col-md-5 col-lg-4 col-xl-3`}
          >
            <div className={Styles.advertisementCard}>
              <div className={Styles.AdvHp}>AdvMac Image</div>
              <div className={Styles.firstHeading}>Hp Looking For Jobs</div>
              <ul className={Styles.advList}>
                <li>21 Accountant Jobs</li>
                <li>professional Managers</li>
                <li>3 Developers Paython or Javascript </li>
              </ul>
              <Link to="/" className={Styles.advertisementBtn}>
                Check it out!
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Advertisement;
