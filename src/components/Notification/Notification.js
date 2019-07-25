import React from "react";
import Styles from "./Notification.module.scss";
import { Link } from "react-router-dom";
import Form from "../UI/Form/Form";

const Notification = ({ showNotification, openNotification }) => {
  let notificationClasses = Styles.notificationRow;
  //true
  if (showNotification) {
    //false
    notificationClasses = `${Styles.notificationRow} ${Styles.close}`;
  }

  return (
    <React.Fragment>
      <Form
        click={openNotification}
        icon={<i className={`${Styles.icon} fas fa-bell fa-lg`} />}
        classFormContainer={Styles.notificationContainer}
        classFormRow={notificationClasses}
        classFormCol={Styles.notificationCol}
      >
        <Link to="/">
          Readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as
        </Link>

        <Link to="/">
          Galley of type and scrambled it to make a type specimen book. It has
          survived not only five centuries, but also the leap into electronic
        </Link>

        <Link to="/">
          Esetting industry. Lorem Ipsum has been the industry's standard dummy
          text ever since the 1500s, when an unknown printer took a typesetting,
          remaining essentially unchanged. It was popu{" "}
        </Link>
      </Form>
    </React.Fragment>
  );
};
export default Notification;
