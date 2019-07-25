import React from "react";
import injectSheet from "react-jss";
import { Link } from "react-router-dom";
const styles = {
  item: {
    display: "table",
    width: "100%",
    background: "#fff",
    "-webkit-box-shadow": "0px 2px 8px 0px rgba(12, 0, 46, 0.04)",
    "box-shadow": "0px 2px 8px 0px rgba(12, 0, 46, 0.04)",
    padding: "20px 45px 20px 20px",
    "margin-bottom": "30px",
    cursor: "pointer",
    "-webkit-transition": "all 0.2s linear",
    "-o-transition": "all 0.2s linear",
    transition: "all 0.2s linear",
    "&:hover": {
      "-webkit-box-shadow": " 0px 25px 30px -8px rgba(12, 0, 46, 0.06)",
      "box-shadow": "0px 25px 30px -8px rgba(12, 0, 46, 0.06)"
    }
  },
  figure: {
    float: "left",
    width: "70px",
    "margin-bottom": "0px",
    "margin-right": "20px",
    cursor: "pointer"
  },
  logoHolder: {
    float: "left",
    width: "100%",
    "text-decoration": "none",
    outline: "none"
  },
  logo: {
    float: "left",
    width: "100%",
    "vertical-align": "middle",
    "border-style": "none"
  },
  infoContainer: {
    display: "table-cell",
    "vertical-align": "middle",
    "border-left": "1px solid #eeebf7",
    width: "100%",
    "padding-left": "25px",
    cursor: "pointer"
  },
  infoTable: {
    display: "table",
    width: "100%",
    cursor: "pointer"
  },
  infoTableCell: {
    display: "table-cell",
    "vertical-align": "middle",
    width: "75%",
    "line-height": "46px",
    cursor: "pointer"
  },
  infoHeading: {
    "margin-bottom": ".5rem",
    "font-size": "1.5rem",
    "font-family": "inherit",
    "font-weight": "500",
    "line-height": "1.2",
    color: "inherit",
    cursor: "pointer"
  },
  infoTitle: {
    "font-size": "20px",
    "margin-bottom": "5px",
    display: "inline-block",
    color: "#222d39",
    "font-weight": "500",
    "text-decoration": "none",
    outline: "none",
    cursor: "pointer",
    "&:hover": {
      color: "#011f4b"
    }
  },
  infoList: {
    "margin-bottom": "0px",
    "padding-left": "0",
    "list-style": "none",
    "margin-top": "0",
    cursor: "pointer"
  },
  infoItem: {
    color: "#677294",
    float: "left",
    font: '300 14px/15px "Poppins", sans-serif',
    padding: "0px 10px",
    "border-left": "2px solid #aeb3c3",
    "&:first-child": {
      "padding-left": "0px",
      border: "none"
    }
  },
  description: {
    font: '300 15px "Poppins", sans-serif',
    "margin-bottom": "10px",
    "margin-top": "5px",
    color: "#ff5252"
  },
  applyContainer: {
    display: "table-cell",
    "vertical-align": "middle",
    width: "75%",
    "line-height": "46px"
  },
  applyDiv: {
    float: "right"
  },
  applyBtn: {
    font: '300 14px/15px "Poppins", sans-serif',
    color: " #5c6789",
    border: "1px solid #e7e7f6",
    "text-decoration": "none",
    outline: "none",
    " border-radius": "3px",
    display: "inline-block",
    padding: "20px 40px",
    "-webkit-transition": "all 0.2s linear",
    "-o-transition": "all 0.2s linear",
    transition: "all 0.2s linear",
    "&:hover": {
      background: "#011f4b",
      "border-color": "#011f4b",
      color: "#fff"
    }
  }
};
const Item = ({ classes, children }) => (
  <div className={classes.item}>
    <figure className={classes.figure}>
      <Link className={classes.logoHolder} to="/jobs">
        <img
          className={classes.logo}
          src={children.Logo}
          alt={children.Title}
        />
      </Link>
    </figure>
    <div className={classes.infoContainer}>
      <div className={classes.infoTable}>
        <div className={classes.infoTableCell}>
          <h4 className={classes.infoHeading}>
            <Link to="/jobs" className={classes.infoTitle}>
              {children.Title}
            </Link>
          </h4>
          <p className={classes.description}> {children.Description}</p>
          <ul className={classes.infoList}>
            <li className={classes.infoItem}>{children.Industry}</li>
            <li className={classes.infoItem}>{children.Career}</li>
            <li className={classes.infoItem}>
              {children.vacanciesCount} Vacancies
            </li>
          </ul>
        </div>
        <div className={classes.applyContainer}>
          <div className={classes.applyDiv}>
            <Link to="/jobs" className={classes.applyBtn}>
              Apply now
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
);
const ItemStyled = injectSheet(styles)(Item);

const ListingItem = props => {
  return <ItemStyled>{props}</ItemStyled>;
};
export default ListingItem;
