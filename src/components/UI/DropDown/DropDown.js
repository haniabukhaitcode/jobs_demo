import React, { Component } from "react";
import Styles from "./DropDown.module.scss";
class DropDown extends Component {
  state = { hidden: true };

  showDropDown = () => {
    this.setState({ hidden: false });
  };
  hideDropDown = () => {
    this.setState({ hidden: true });
  };

  render() {
    let Items = this.props.items.map((item, key) => {
      return (
        <option key={key} className={Styles.dropdownLink} href={item.value}>
          {item.label}
        </option>
      );
    });
    console.log(Items);

    return (
      <React.Fragment>
        <input
          style={{ marginTop: 10 }}
          onFocus={this.showDropDown}
          onBlur={this.hideDropDown}
          type="text"
          placeholder="Search.."
          className={Styles.myInput}

          // onKeyUp={filterFunction()}
        />
        <select
          id="myDropdown"
          className={this.state.hidden ? Styles.hidden : Styles.dropDown}
        >
          {Items}
        </select>
      </React.Fragment>
    );
  }
}

export default DropDown;
