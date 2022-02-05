import React, { Component } from "react";
import JobSeekerService from "../../services/JobSeekerService";
import JobSeekerHeaderComponent from "./JobSeekerHeaderComponent";

class CreateAppliedJobComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: this.props.match.params.id,
            job_id: "",
            jobseeker_id: "",
            collegeName: "",
            universityName: "",
            ugpercentage: "",
        };
        this.changeJobIdHandler = this.changeJobIdHandler.bind(this);
        this.changeJobseekerIdHandler = this.changeJobseekerIdHandler.bind(this);
        this.applyJobHandler = this.applyJobHandler.bind(this);
        this.changeCollegeNameHandler = this.changeCollegeNameHandler.bind(this);
        this.changeUniversityNameHandler = this.changeUniversityNameHandler.bind(this);
        this.changePercentageHandler = this.changePercentageHandler.bind(this);
    }

    applyJobHandler = (e) => {
        e.preventDefault();
        let apply = {
            id: {
                jobId: this.state.job_id,
                jobseekerId: this.state.jobseeker_id,
            },
            collegeName: this.state.collegeName,
            universityName: this.state.universityName,
            ugpercentage: this.state.ugpercentage,
        };
        if (
            this.state.job_id.length === 0 ||
            this.state.jobseeker_id.length === 0 ||
            this.state.collegeName.length === 0 ||
            this.state.universityName.length === 0 ||
            this.state.ugpercentage.length === 0
        ) {
            alert("Enter valid details.");
        } else {
            JobSeekerService.applyJob(apply)
                .then((res) => {
                    this.props.history.push("/seekerHome");
                    alert("Applied successfully!!!");
                })
                .catch((error) => console.log(error));
        }
    };

    changeJobIdHandler = (event) => {
        this.setState({ job_id: event.target.value });
    };

    changeJobseekerIdHandler = (event) => {
        this.setState({ jobseeker_id: event.target.value });
    };
    changeCollegeNameHandler = (event) => {
        this.setState({ collegeName: event.target.value });
    };
    changeUniversityNameHandler = (event) => {
        this.setState({ universityName: event.target.value });
    };
    changePercentageHandler = (event) => {
        this.setState({ ugpercentage: event.target.value });
    };
    cancel() {
        this.props.history.push("/seekerJobs");
    }

    getTitle() {
        if (this.state.id) {
            return <h3 className="text-center">Apply for job</h3>;
        }
    }
    render() {
        return (
            <div>
                <JobSeekerHeaderComponent />
                <br></br>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            {this.getTitle()}
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <label>JobSeeker Id: </label>
                                        <input
                                            placeholder="enter your id"
                                            name="jobseekerid"
                                            className="form-control"
                                            value={this.state.jobseeker_id}
                                            onChange={this.changeJobseekerIdHandler}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>Job Id: </label>
                                        <input
                                            placeholder="enter job id"
                                            name="jobid"
                                            className="form-control"
                                            value={this.state.job_id}
                                            onChange={this.changeJobIdHandler}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label> College name</label>
                                        <input
                                            placeholder="enter your college name"
                                            name="collageName"
                                            className="form-control"
                                            value={this.state.collegeName}
                                            onChange={this.changeCollegeNameHandler}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label> University name</label>
                                        <input
                                            placeholder="enter your college name"
                                            name="universityName"
                                            className="form-control"
                                            value={this.state.universityName}
                                            onChange={this.changeUniversityNameHandler}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label> UG CGPA/Percentage</label>
                                        <input
                                            placeholder="enter your UG CGPA/Percentage"
                                            name="UGPercentage"
                                            className="form-control"
                                            value={this.state.ugpercentage}
                                            onChange={this.changePercentageHandler}
                                        />
                                    </div>

                                    <button
                                        className="btn btn-success"
                                        onClick={this.applyJobHandler}
                                    >
                                        Apply
                  </button>
                                    <button
                                        className="btn btn-danger"
                                        onClick={this.cancel.bind(this)}
                                        style={{ marginLeft: "10px" }}
                                    >
                                        Cancel
                  </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CreateAppliedJobComponent;
