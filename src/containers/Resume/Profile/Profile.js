import React from "react";
import Styles from "./Profile.module.scss";
import { Link } from "react-router-dom";
import Checkbox from "../../../components/UI/Checkbox/Checkbox";
import {
  InputPersonal,
  PreferredJob,
  Selection,
  EmploymentType,
  TextBox,
  CareerLevel
} from "../../../components/UI/Input/Input";
import IconPicture from "../../../components/Layout/Images/PictureIcon.png";

const Profile = () => {
  return (
    <div>
      <div className={Styles.containerProfileGrid}>
        {/* // */}
        <div className="container">
          <div className="row">
            <div className={`${Styles.girdItemPicture} col-lg-2 `}>
              <Link to="/upload-picture">
                <img
                  src={IconPicture}
                  className={`${Styles.pictureIcon} img`}
                  alt=""
                />
              </Link>
            </div>

            <div className={`${Styles.girdItemNameAddressEmail} col-lg-5`}>
              <InputPersonal
                holderName="Hani Mazen Abukhait"
                empty={e => (e.target.placeholder = "")}
                full={e => (e.target.placeholder = "Hani Mazen Abukhait")}
              >
                Name:
              </InputPersonal>
              <InputPersonal
                holderName="Amman/Gardens Street"
                empty={e => (e.target.placeholder = "")}
                full={e => (e.target.placeholder = "Amman/Gardens Street")}
              >
                <InputPersonal
                  holderName="03/05/1990"
                  empty={e => (e.target.placeholder = "")}
                  full={e => (e.target.placeholder = "03/05/1990")}
                >
                  Birth Date:
                </InputPersonal>
                Address:
              </InputPersonal>
              <InputPersonal
                holderName="Something@gmail.com"
                empty={e => (e.target.placeholder = "")}
                full={e => (e.target.placeholder = "Something@gmail.com")}
              >
                E-mail:
              </InputPersonal>
              <InputPersonal
                holderName="Male"
                empty={e => (e.target.placeholder = "")}
                full={e => (e.target.placeholder = "Male")}
              >
                Gender:
              </InputPersonal>
            </div>

            <div
              className={`${Styles.girdItemBirthNationalityStatus} col-lg-5 `}
            >
              <InputPersonal
                holderName="Jordanian"
                empty={e => (e.target.placeholder = "")}
                full={e => (e.target.placeholder = "Jordanian")}
              >
                Nationality:
              </InputPersonal>
              <InputPersonal
                holderName="Single"
                empty={e => (e.target.placeholder = "")}
                full={e => (e.target.placeholder = "Single")}
              >
                Matrital Status:
              </InputPersonal>
              <InputPersonal
                holderName="Visa Status"
                empty={e => (e.target.placeholder = "")}
                full={e => (e.target.placeholder = "Visa Status")}
              >
                Visa Status:
              </InputPersonal>
              <InputPersonal
                holderName="Jordan"
                empty={e => (e.target.placeholder = "")}
                full={e => (e.target.placeholder = "Jordan")}
              >
                Residence:
              </InputPersonal>
              <InputPersonal
                holderName="Jordan"
                empty={e => (e.target.placeholder = "")}
                full={e => (e.target.placeholder = "Jordan")}
              >
                Driving License:
              </InputPersonal>
            </div>
          </div>
        </div>
        {/* Personal information end */}
      </div>

      {/* preferred Job start */}
      <div className={Styles.titleProfession}>
        <h1 className={Styles.title}>Preferred Job</h1>
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <PreferredJob
                holderName="SoftWare Engineer"
                empty={e => (e.target.placeholder = "")}
                full={e => (e.target.placeholder = "SoftWare Engineer")}
              >
                Target Job Title:
              </PreferredJob>
            </div>
            <div className="col-lg-6">
              <CareerLevel />
            </div>
            {/* Country Selection */}
          </div>
          <div className="row" style={{ marginTop: "10px" }}>
            <div className="col-lg-6">
              <EmploymentType />
            </div>

            {/* Country Selection */}
            <div className="col-lg-6">
              <Selection />
            </div>
          </div>

          {/* Text Area */}
          <TextBox
            holderName="Example:- Seeking an entry-level position in a growth oriented organization. Gaining more experience in the field of Marketing and Management where I can fully utilize my knowledge,  skills,  and experience in a world class environment."
            empty={e => (e.target.placeholder = "")}
            full={e =>
              (e.target.placeholder =
                "Example:- Seeking an entry-level position in a growth oriented organization. Gaining more experience in the field of Marketing and Management where I can fully utilize my knowledge,  skills,  and experience in a world class environment.")
            }
          />
          {/* Text Area */}

          {/* Check Boxes Selection */}
          <div
            className="container"
            style={{
              marginTop: "10px",
              textAlign: "center",
              marginRight: "-10px"
            }}
          >
            <hr />
            Employment Type:
            <div className="row" style={{ marginTop: "10px" }}>
              <div className="col-lg-3">
                <Checkbox>Commission</Checkbox>
              </div>
              <div className="col-lg-3">
                <Checkbox>Contractor</Checkbox>
              </div>
              <div className="col-lg-3">
                <Checkbox>Freelancer</Checkbox>
              </div>
              <div className="col-lg-3">
                <Checkbox>Full Time Employee</Checkbox>
              </div>
            </div>
            <div className="row" style={{ marginTop: "10px" }}>
              <div className="col-lg-3">
                <Checkbox>Internship</Checkbox>
              </div>
              <div className="col-lg-3">
                <Checkbox>Part Time Employee</Checkbox>
              </div>
              <div className="col-lg-3">
                <Checkbox>Temporary Employee</Checkbox>
              </div>
              <div className="col-lg-3">
                <Checkbox>Volunteer</Checkbox>
              </div>
            </div>
          </div>
          {/* Check Boxes Selection */}
        </div>
      </div>
    </div>
  );
};

export default Profile;
