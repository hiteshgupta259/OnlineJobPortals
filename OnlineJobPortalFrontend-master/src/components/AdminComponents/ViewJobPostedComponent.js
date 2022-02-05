import React, { Component } from 'react'
import AdminLoginService from '../../services/AdminLoginService ';
import AdminHeaderComponent from './AdminHeaderComponent';

class ViewJobPostedComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            jobPosted: []
        }

    }

    componentDidMount() {
        AdminLoginService.getAllJobs().then((res) => {
            this.setState({ jobPosted: res.data });
        });
    }

    render() {
        return (
            <div>
                <AdminHeaderComponent />
                <div style={{ margin: "50px" }} className="container">
                    <br></br>
                    <h2 className="text-center">JOB POSTED LIST</h2>
                    <br></br>
                    <br></br>
                    <div className="row">
                        <table className="table table-striped table-bordered">
                            <thead>
                                <tr>
                                    <th>Job ID</th>
                                    <th>Designation</th>
                                    <th>Location</th>
                                    <th>Experience</th>
                                    <th>Skills</th>
                                </tr>
                            </thead>
                            <tbody>
                                {

                                    this.state.jobPosted.map(
                                        job =>
                                            <tr key={job.jobId}>
                                                <td>{job.jobId}</td>
                                                <td>{job.jobDesignation}</td>
                                                <td>{job.jobLocation}</td>
                                                <td>{job.jobExperience}</td>
                                                <td>{job.jobSkills}</td>
                                            </tr>
                                    )
                                }
                            </tbody>
                        </table>

                    </div>

                </div>
            </div>
        )
    }
}

export default ViewJobPostedComponent;
