import React, { Component } from "react";
import Layout from "./components/Layout/Layout";
import { Route, Switch, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import Loadable from "react-loadable";
function Loading() {
  return <h3>Loading...</h3>;
}
const HomePage = Loadable({
  loader: () => import("./containers/HomePage/HomePage"),
  loading: Loading
});
const Register = Loadable({
  loader: () => import("./containers/Auth/Register"),
  loading: Loading
});
const Auth = Loadable({
  loader: () => import("./containers/Auth/Auth"),
  loading: Loading
});
const Logout = Loadable({
  loader: () => import("./containers/Auth/Logout/Logout"),
  loading: Loading
});
const Jobs = Loadable({
  loader: () => import("./containers/Jobs/Jobs"),
  loading: Loading
});
const Resume = Loadable({
  loader: () => import("./containers/Resume/Resume"),
  loading: Loading
});
class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/jobs" component={Jobs} />
            <Route exact path="/resume" component={Resume} />
            <Route exact path="/login" component={Auth} />
            <Route exact path="/register" component={Register} />
            <Route path="/logout" component={Logout} />
          </Switch>
        </Layout>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.token !== null
  };
};
export default withRouter(connect(mapStateToProps)(App));
