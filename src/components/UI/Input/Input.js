import React from "react";
import Styles from "./Input.module.scss";

const InputPersonal = props => {
  return (
    <div>
      {props.children}
      <input
        className={Styles.inputPersonal}
        type="text"
        placeholder={props.holderName}
        onFocus={props.empty}
        onBlur={props.full}
      />
    </div>
  );
};
const PreferredJob = props => {
  return (
    <div>
      {props.children}
      <input
        className={Styles.inputPreferredJob}
        type="text"
        placeholder={props.holderName}
        onFocus={props.empty}
        onBlur={props.full}
      />
    </div>
  );
};
const TextBox = props => {
  return (
    <div
      className={`${
        Styles.textContainer
      } md-form amber-textarea active-amber-textarea-2 `}
    >
      {props.children}
      <label className={Styles.textWrite} for="form24">
        Career Objective:
        <i
          className={`${Styles.iconPencil} fas fa-pencil-alt prefix float-left`}
        />
      </label>
      <textarea
        type="text"
        id="form24"
        placeholder={props.holderName}
        onFocus={props.empty}
        onBlur={props.full}
        className={`${Styles.textboxArea} md-textarea form-control`}
        rows="5"
      />
    </div>
  );
};

const Selection = props => {
  return (
    <div>
      {props.children}
      <label className={Styles.countrySelection}>Job Location: </label>
      <select
        className={`${Styles.countrySelectionOptions} mdb-select md-form`}
        searchable="Search here.."
      >
        <option value="" disabled selected>
          Choose your country
        </option>
        <option value="1">Jordan</option>
        <option value="2">Iraq</option>
        <option value="3">UAE</option>
        <option value="4">Ksa</option>
        <option value="5">Lebanon</option>
        <option value="5">"</option>
        <option value="6">"</option>
        <option value="7">"</option>
        <option value="8">"</option>
        <option value="9">"</option>
        <option value="10">"</option>
        <option value="11">"</option>
        <option value="12">"</option>
        <option value="13">"</option>
        <option value="14">"</option>
        <option value="15">"</option>
        <option value="16">"</option>
        <option value="17">"</option>
        <option value="18">"</option>
        <option value="19">"</option>
        <option value="20">"</option>
        <option value="21">"</option>
        <option value="22">"</option>
        <option value="23">"</option>
        <option value="24">"</option>
        <option value="25">"</option>
        <option value="26">"</option>
        <option value="27">"</option>
        <option value="28">"</option>
        <option value="29">"</option>
        <option value="30">"</option>
        <option value="31">"</option>
        <option value="32">"</option>
        <option value="33">"</option>
        <option value="34">"</option>
        <option value="35">"</option>
        <option value="36">"</option>
        <option value="37">"</option>
        <option value="38">"</option>
        <option value="39">"</option>
        <option value="40">"</option>
        <option value="41">"</option>
        <option value="42">"</option>
        <option value="43">"</option>
        <option value="44">"</option>
        <option value="45">"</option>
        <option value="46">"</option>
        <option value="47">"</option>
        <option value="48">"</option>
        <option value="49">"</option>
        <option value="50">"</option>
        <option value="51">"</option>
        <option value="52">"</option>
        <option value="53">"</option>
        <option value="54">"</option>
        <option value="55">"</option>
        <option value="56">"</option>
        <option value="57">"</option>
        <option value="58">"</option>
        <option value="59">"</option>
        <option value="60">"</option>
        <option value="61">"</option>
        <option value="62">"</option>
        <option value="63">"</option>
        <option value="64">"</option>
        <option value="65">"</option>
        <option value="66">"</option>
        <option value="67">"</option>
        <option value="68">"</option>
        <option value="69">"</option>
        <option value="70">"</option>
        <option value="71">"</option>
        <option value="72">"</option>
        <option value="73">"</option>
        <option value="74">"</option>
        <option value="75">"</option>
        <option value="76">"</option>
        <option value="77">"</option>
        <option value="78">"</option>
        <option value="79">"</option>
        <option value="80">"</option>
        <option value="81">"</option>
        <option value="82">"</option>
        <option value="83">"</option>
        <option value="84">"</option>
        <option value="85">"</option>
        <option value="86">"</option>
        <option value="87">"</option>
        <option value="88">"</option>
        <option value="89">"</option>
        <option value="90">"</option>
        <option value="91">"</option>
        <option value="92">"</option>
        <option value="93">"</option>
        <option value="94">"</option>
        <option value="95">"</option>
      </select>
    </div>
  );
};
const EmploymentType = props => {
  return (
    <div>
      {props.children}
      <label className={Styles.employmentSelection}>Choose Job: </label>
      <select
        className={`${Styles.countrySelectionOptions} mdb-select md-form `}
        searchable="Search here.."
      >
        <option value="" disabled selected>
          Choose Your Profession
        </option>
        <option value="1">Banker</option>
        <option value="2">Developer</option>
        <option value="3">Accountant</option>
        <option value="4">Engineer</option>
        <option value="5">"</option>
        <option value="6">"</option>
        <option value="7">"</option>
        <option value="8">"</option>
        <option value="9">"</option>
        <option value="10">"</option>
        <option value="11">"</option>
        <option value="12">"</option>
        <option value="13">"</option>
        <option value="14">"</option>
        <option value="15">"</option>
        <option value="16">"</option>
        <option value="17">"</option>
        <option value="18">"</option>
        <option value="19">"</option>
        <option value="20">"</option>
        <option value="21">"</option>
        <option value="22">"</option>
        <option value="23">"</option>
        <option value="24">"</option>
        <option value="25">"</option>
        <option value="26">"</option>
        <option value="27">"</option>
        <option value="28">"</option>
        <option value="29">"</option>
        <option value="30">"</option>
        <option value="31">"</option>
        <option value="32">"</option>
        <option value="33">"</option>
        <option value="34">"</option>
        <option value="35">"</option>
        <option value="36">"</option>
        <option value="37">"</option>
        <option value="38">"</option>
        <option value="39">"</option>
        <option value="40">"</option>
        <option value="41">"</option>
        <option value="42">"</option>
        <option value="43">"</option>
        <option value="44">"</option>
        <option value="45">"</option>
        <option value="46">"</option>
        <option value="47">"</option>
        <option value="48">"</option>
        <option value="49">"</option>
        <option value="50">"</option>
        <option value="51">"</option>
        <option value="52">"</option>
        <option value="53">"</option>
        <option value="54">"</option>
        <option value="55">"</option>
        <option value="56">"</option>
        <option value="57">"</option>
        <option value="58">"</option>
        <option value="59">"</option>
        <option value="60">"</option>
        <option value="61">"</option>
        <option value="62">"</option>
        <option value="63">"</option>
        <option value="64">"</option>
        <option value="65">"</option>
        <option value="66">"</option>
        <option value="67">"</option>
        <option value="68">"</option>
        <option value="69">"</option>
        <option value="70">"</option>
        <option value="71">"</option>
        <option value="72">"</option>
        <option value="73">"</option>
        <option value="74">"</option>
        <option value="75">"</option>
        <option value="76">"</option>
        <option value="77">"</option>
        <option value="78">"</option>
        <option value="79">"</option>
        <option value="80">"</option>
        <option value="81">"</option>
        <option value="82">"</option>
        <option value="83">"</option>
        <option value="84">"</option>
        <option value="85">"</option>
        <option value="86">"</option>
        <option value="87">"</option>
        <option value="88">"</option>
        <option value="89">"</option>
        <option value="90">"</option>
        <option value="91">"</option>
        <option value="92">"</option>
        <option value="93">"</option>
        <option value="94">"</option>
        <option value="95">"</option>
      </select>
    </div>
  );
};
const CareerLevel = props => {
  return (
    <div>
      {props.children}
      <label className={Styles.CareerLevel}>Career Level: </label>
      <select
        className={`${Styles.countrySelectionOptions} mdb-select md-form `}
        searchable="Search here.."
      >
        <option value="" disabled selected>
          Choose Your Level
        </option>
        <option value="1">Student/Internship</option>
        <option value="2">Fresh Graduate</option>
        <option value="3">Entry Level</option>
        <option value="4">Mid Career</option>
        <option value="5">Management</option>
        <option value="6">Director/Head</option>
        <option value="7">Senior Excutive</option>
      </select>
    </div>
  );
};

export {
  InputPersonal,
  PreferredJob,
  Selection,
  EmploymentType,
  TextBox,
  CareerLevel
};
