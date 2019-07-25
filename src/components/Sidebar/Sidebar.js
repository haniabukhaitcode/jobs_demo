import React from "react";
import Styles from "./Sidebar.module.scss";
import { Link } from "react-router-dom";
const Sidebar = props => {
  let SidebarClasses = Styles.SidebarContainer;
  if (props.showSidebar) {
    SidebarClasses = `${Styles.SidebarContainer}  ${Styles.close} `;
  }

  return (
    <React.Fragment>
      <div className={`${SidebarClasses} `}>
        <div className={`${Styles.SidebarRow} `}>
          <Link to="/" className={`${Styles.SidebarCol} `}>
            <i className="fas fa-home" />
            <span className={Styles.SidebarSpan}>Item</span>
          </Link>

          <Link to="/Trending" className={`${Styles.SidebarCol} `}>
            <i className="fas fa-burn" />
            <span className={Styles.SidebarSpan}>Item</span>
          </Link>
          <Link to="/Subscriptions" className={`${Styles.SidebarCol} `}>
            <i className="fas fa-clipboard" />
            <span className={Styles.SidebarSpan}>Item</span>
          </Link>
        </div>
      </div>
    </React.Fragment>
  );
};
export default Sidebar;
