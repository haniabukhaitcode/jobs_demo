import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect, Link } from "react-router-dom";
import * as actions from "../../store/actions/index";
import { checkValidity, updateObject } from "../../shared/utility";
import Checkbox from "../../components/UI/Checkbox/Checkbox";
import Styles from "./Auth.module.scss";
class Auth extends Component {
  state = {
    username: { value: "", valid: true, validation: { required: true } },
    password: { value: "", valid: true, validation: { required: true } }
  };

  submitHandler = event => {
    event.preventDefault();
    let userValid = checkValidity(
      this.state.username.value,
      this.state.username.validation
    );
    let passwordValid = checkValidity(
      this.state.password.value,
      this.state.password.validation
    );
    if (!userValid || !passwordValid) {
      const updatedControls = updateObject(this.state, {
        username: updateObject(this.state.username, {
          valid: userValid
        }),
        password: updateObject(this.state.password, {
          valid: passwordValid
        })
      });
      this.setState(updatedControls);
    } else {
      this.props.onAuth(this.state);
    }
  };
  componentDidMount() {
    if (this.props.isAuthenticated) {
      this.props.onSetAuthRedirectPath();
    }
  }
  handleChange = event => {
    let name = event.target.name;
    let value = event.target.value;
    const updatedControls = updateObject(this.state, {
      [name]: updateObject(this.state[name], {
        value: value
      })
    });
    this.setState(updatedControls);
  };
  render() {
    let authRedirect = null;
    if (this.props.isAuthenticated) {
      authRedirect = <Redirect to="/" />;
    }
    return (
      <div className="container" style={{ marginTop: "150px" }}>
        {authRedirect}
        <React.Fragment>
          <section className={Styles.login_area}>
            <div className={Styles.login_info}>
              <div className="row">
                <div className="col-lg-6">
                  <div className={Styles.login_heading}>Login</div>
                  <form action="/" className="login-form sign-in-form">
                    <div className={`form-group ${Styles.text_box}`}>
                      <label className={Styles.text_c}>Username</label>
                      <input type="text" placeholder="Name" />
                    </div>
                    <div className={`form-group ${Styles.text_box}`}>
                      <label className={Styles.text_c}>Password</label>
                      <input type="password" placeholder="******" />
                    </div>
                    <div className={Styles.extra}>
                      <Checkbox>
                        I agree to terms and conditions of this website
                      </Checkbox>

                      <div className="forgotten-password">
                        <Link to="/register" className={Styles.ItemLink}>
                          Register new account?
                        </Link>
                      </div>
                    </div>
                    <div className="d-flex justify-content-between align-items-center">
                      <button type="submit" className={Styles.btn_three}>
                        Sign Up
                      </button>
                    </div>
                  </form>
                </div>
                <div className={`${Styles.login_text_container} col-lg-6`}>
                  <div className={Styles.login_info_content}>
                    <div className={Styles.login_text}>
                      Allready have an account?
                    </div>
                    <div className={Styles.login_text}>
                      Login now and starting using our amazing products
                    </div>
                    <ul className={Styles.listcontainer}>
                      <li className={Styles.listItem}>
                        <i className="fas fa-check fa-lg" /> Premium Access to
                        all Products
                      </li>
                      <li className={Styles.listItem}>
                        <i className="fas fa-check fa-lg" /> Free Testing Tools
                      </li>
                      <li className={Styles.listItem}>
                        <i className="fas fa-check fa-lg" /> Unlimited User
                        Accounts
                      </li>
                    </ul>
                  </div>
                </div>
                {/* Section Login */}
              </div>
            </div>
          </section>
        </React.Fragment>
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
    onAuth: data =>
      dispatch(
        actions.auth(
          { username: data.username.value, password: data.password.value },
          false
        )
      ),
    onSetAuthRedirectPath: () => dispatch(actions.setAuthRedirectPath("/"))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Auth);
