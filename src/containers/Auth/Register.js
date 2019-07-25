import React, { Component } from "react";
import RegisterForm from "../RegisterForm/RegisterForm";
import { connect } from "react-redux";
import * as actions from "../../store/actions/index";

class Register extends Component {
  state = {
    UserName: "",
    FirstName: "",
    LastName: "",
    Email: "",
    Password: ""
  };
  submitHandler = event => {
    event.preventDefault();
    this.props.onRegister(this.state);
  };
  componentDidMount() {
    if (this.props.isAuthenticated) {
      this.props.onSetAuthRedirectPath();
    }
  }
  handleChange = (e, { name, value }) => this.setState({ [name]: value });
  render() {
    return (
      <div>
        <RegisterForm />
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.token !== null
  };
};
const mapDispatchToProps = dispatch => {
  return {
    onRegister: data => dispatch(actions.auth(data, true)),
    onSetAuthRedirectPath: () => dispatch(actions.setAuthRedirectPath("/"))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Register);
