import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../store/actions/index";
import Styles from "./Jobs.module.scss";
import Item from "./ListingItem";
import Filters from "./Filters/Filters";
import { updateObject } from "../../shared/utility";
class Jobs extends Component {
  state = {
    selectedDegrees: null,
    selectedIndustries: null,
    selectedCareers: null,
    url: "job?offset=0"
  };
  componentDidMount() {
    this.props.onFetchJobs(this.state.url);
    this.props.onFetchFilters();
  }
  handleChange = selectedOption => {
    console.log(`Option selected:`, selectedOption);
    var newUrl = this.state.url;
    console.log(selectedOption.name);
    if (selectedOption.target.name === "degrees") {
      for (var degreeValue of selectedOption.target.value) {
        newUrl += "&degree=" + degreeValue.value;
      }
    }
    if (selectedOption.target.name === "industries") {
      for (var industryValue of selectedOption.target.value) {
        newUrl += "&industries=" + industryValue.value;
      }
    }
    if (selectedOption.target.name === "careers") {
      for (var careerValue of selectedOption.target.value) {
        newUrl += "&careers=" + careerValue.value;
      }
    }

    const updatedState = updateObject(this.state, {
      url: newUrl
    });
    console.log(newUrl);
    this.props.onFetchJobs(this.state.url);
    this.setState(updatedState);
  };
  componentWillUpdate() {
    return true;
  }
  render() {
    let data = [
      {
        jobId: 1,
        title: "test",
        career: "test",
        vacanciesCount: "test",
        description: "test",
        industry: "test"
      },
      {
        jobId: 2,
        title: "test",
        career: "test",
        vacanciesCount: "test",
        description: "test",
        industry: "test"
      },
      {
        jobId: 3,
        title: "test",
        career: "test",
        vacanciesCount: "test",
        description: "test",
        industry: "test"
      },
      {
        jobId: 4,
        title: "test",
        career: "test",
        vacanciesCount: "test",
        description: "test",
        industry: "test"
      },
      {
        jobId: 5,
        title: "test",
        career: "test",
        vacanciesCount: "test",
        description: "test",
        industry: "test"
      },
      {
        jobId: 6,
        title: "test",
        career: "test",
        vacanciesCount: "3",
        description: "test",
        industry: "test"
      }
    ];
    let JobsListing = data.map(job => {
      return (
        <Item
          key={job.jobId}
          Title={job.title}
          Career={job.career}
          vacanciesCount={job.vacanciesCount}
          Description={job.description}
          Industry={job.industry}
          Logo={"https://picsum.photos/200/300?image=" + job.jobId}
        />
      );
    });
    return (
      // <div className={`container`}>
      // <div className={Styles.sign_info}>
      //   <div className={`row`}>
      //     <div className={`col-lg-5`}>
      //       <div className={Styles.sign_info_content}>

      <div className="container-fluid">
        <div className="row">
          {/* left Section */}
          <div className={`${Styles.SideBar} col-lg-2`}>
            <Filters />
          </div>
          {/* right Section */}
          <div style={{ marginTop: "100px" }} className="col-lg-9">
            {JobsListing}
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    jobs: state.jobs.jobs,
    jobsFilters: state.jobsFilters
  };
};
const mapDispatchToProps = dispatch => {
  return {
    onFetchJobs: url => dispatch(actions.fetchJobs(url)),
    onFetchFilters: () => dispatch(actions.fetchFilters())
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Jobs);
