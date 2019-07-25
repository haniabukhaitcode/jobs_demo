import React from "react";
import Styles from "./Enrollmenet.module.scss";

const Enrollmenet = () => {
  return (
    <section className={`${Styles.containerfluid} container`}>
      {/* Section: Features v.3 */}

      {/* Section heading */}

      {/* Section description */}

      {/* Grid row */}

      <div
        className={`${
          Styles.row
        } row align-items-center justify-content-center`}
      >
        <h2 className={`${Styles.heading} col-12 `}>Why Join Us?</h2>
        {/* Grid column */}
        <div
          className={`${
            Styles.EnrollmenetPicture
          } col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 `}
        />

        {/* Grid column */}
        {/* Grid column */}

        <div
          className={`${
            Styles.EnrollmenetText
          } col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6`}
        >
          <h5 className={`${Styles.heading} col-12`}>
            <strong>Safety</strong>
          </h5>
          <p className={`${Styles.heading} col-12`}>
            Our Responsiblity, is to give people the security needed. Our
            advanced system will protect your valuable information such as
            Resume, personal information. Your profile will be saved and used
            anytime you want.
          </p>
          <h5 className={`${Styles.heading} col-12`}>
            <strong>Technology</strong>
          </h5>
          <p className={`${Styles.heading} col-12`}>
            Our website provides notification messages to alert you if a company
            interested in your Resume as well as new jobs available in your
            field. Applied on your phones + Laptops
          </p>
          <h5 className={`${Styles.heading} col-12`}>
            <strong>Services</strong>
          </h5>
          <p className={`${Styles.heading} col-12`}>
            Our website is forever free to use for both companies and customers.
            Therefore everyone will be attracted to hire or get hired.
          </p>
        </div>

        {/*Grid column*/}
      </div>
      {/* Grid row */}
    </section>
  );
};
export default Enrollmenet;
