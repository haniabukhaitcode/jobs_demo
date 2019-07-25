import React from "react";
import Styles from "./RegisterForm.module.scss";
import Checkbox from "../../components/UI/Checkbox/Checkbox";
const RegisterForm = () => {
  return (
    <React.Fragment>
      <section
        className={`${Styles.sign_in_area} ${Styles.bg_color} ${
          Styles.sec_pad
        }`}
      >
        <div className="container" style={{ marginTop: "150px" }}>
          <div className={Styles.sign_info}>
            <div className="row">
              <div className="col-lg-5">
                <div className={Styles.sign_info_content}>
                  <div className={`${Styles.login_text_container} col-lg-12`}>
                    <div className={Styles.login_info_content}>
                      <div className={Styles.login_text}>
                        Register now and starting using our amazing products
                      </div>
                    </div>
                  </div>

                  <ul className={Styles.listcontainer}>
                    <li className={Styles.listItem}>
                      <i className="fas fa-check fa-lg" /> Premium Access to all
                      Products
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
              <div className="col-lg-7">
                <div className={Styles.login_info}>
                  <form action="/" className="login-form sign-in-form">
                    <div className={`form-group ${Styles.text_box}`}>
                      <div className={Styles.login_infoText}>Username</div>{" "}
                      <input type="text" placeholder="Name" />
                    </div>

                    <div className={`form-group ${Styles.text_box}`}>
                      <div className={Styles.login_infoText}>Email</div>
                      <input
                        type="text"
                        placeholder="hani_abukhait@hotmail.com"
                      />
                    </div>

                    <div className={`form-group ${Styles.text_box}`}>
                      <div className={Styles.login_infoText}>Password</div>{" "}
                      <input type="password" placeholder="******" />
                    </div>

                    <div className={Styles.extra}>
                      <div className="checkbox remember">
                        <Checkbox>
                          I agree to terms and conditions of this website
                        </Checkbox>
                      </div>
                      {/* check-box */}
                      <div className="forgotten-password">
                        <a href="/login">Aleardy have an account?</a>
                      </div>
                    </div>

                    <div className="d-flex justify-content-between align-items-center">
                      <button type="submit" className={Styles.btn_three}>
                        Register
                      </button>

                      <div className={`${Styles.social_text} "d-flex"`}>
                        <div className="lead-text">Or Sign up Using</div>
                        <ul
                          className={`"list-unstyled" ${
                            Styles.social_tag
                          } "mb-0" `}
                        >
                          <li>
                            <a href="/">
                              <i className={"ti-facebook"} />
                            </a>
                          </li>
                          <li>
                            <a href="/">
                              <i className={"ti-twitter-alt"} />
                            </a>
                          </li>
                          <li>
                            <a href="/">
                              <i className={"ti-google"} />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default RegisterForm;
