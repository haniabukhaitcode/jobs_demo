import React from "react";

const Form = ({
  classFormContainer,
  classFormRow,
  classFormCol,
  click,
  icon,
  children
}) => {
  return (
    <React.Fragment>
      <div className={`${classFormContainer} `} onClick={click}>
        {icon}
        <div className={`${classFormRow} `}>
          <div className={`${classFormCol} `}>
            {children}
            {/* <Link to="/profile">Profile</Link> */}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Form;
