import React, { Component } from "react";
import JobSeekerService from "../../services/JobSeekerService.js";
import JobSeekerHeaderComponent from "./JobSeekerHeaderComponent.js";

class ListJobComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            jobs: [],
        };
        this.addAppliedJob = this.addAppliedJob.bind(this);
    }

    componentDidMount() {
        JobSeekerService.getJobs().then((res) => {
            this.setState({ jobs: res.data });
        });
    }

    addAppliedJob() {
        this.props.history.push("/applyJob");
    }

    render() {
        return (
            <div>
                <JobSeekerHeaderComponent />
                <div className="container">
                    <h2 className="container text-center">Jobs List</h2>
                    <br></br>
                    <div className="row">
                        <table className="table table-dark table-hover">
                            <thead>
                                <tr>
                                    <th> Job ID</th>
                                    <th>Location</th>
                                    <th>Designation</th>
                                    <th> Experience</th>
                                    <th> Salary</th>
                                    <th> Job Description</th>
                                    <th> Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.jobs.map((job) => (
                                    <tr key={job.jobId}>
                                        <td>{job.jobId}</td>
                                        <td>{job.jobLocation}</td>
                                        <td>{job.jobDesignation}</td>
                                        <td>{job.jobExperience}</td>
                                        <td>{job.jobSalary}</td>
                                        <td>{job.jobDescription}</td>
                                        <td>
                                            {" "}
                                            <button
                                                className="btn btn-info"
                                                onClick={this.addAppliedJob}
                                            >
                                                Apply{" "}
                                            </button>{" "}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}

export default ListJobComponent;
