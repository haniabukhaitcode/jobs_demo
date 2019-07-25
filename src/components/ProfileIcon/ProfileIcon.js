import React from "react";
import Styles from "./profileIcon.module.scss";
import { Link } from "react-router-dom";
import Form from "../UI/Form/Form";
const ProfileIcon = ({ showProfile, openProfile }) => {
  let profileContainerClasses = Styles.profileRow;
  if (showProfile) {
    profileContainerClasses = `${Styles.profileRow} ${Styles.close}`;
  }
  return (
    <React.Fragment>
      <Form
        click={openProfile}
        icon="P"
        classFormContainer={Styles.profileContainer}
        classFormRow={profileContainerClasses}
        classFormCol={Styles.profileCol}
      >
        <Link to="/">Profile</Link>
        <Link to="/">Saved</Link>
        <Link to="/">Transactions</Link>
        <Link to="/">Settings</Link>
        <Link to="/">Offers</Link>
        <Link to="/">Careers</Link>
        <Link to="/">Logout</Link>
      </Form>
    </React.Fragment>
  );
};
export default ProfileIcon;
