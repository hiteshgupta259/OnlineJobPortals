import React, { Component } from 'react'
import JobSeekerService from '../../services/JobSeekerService';
import AdminHeaderComponent from './AdminHeaderComponent';

class ViewJobSeekerComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            jobSeekers: []
        }

    }



    componentDidMount() {
        JobSeekerService.getAllJobSeekerRegistration().then((res) => {
            this.setState({ jobSeekers: res.data });
        });
    }



    render() {
        return (
            <div>
                <AdminHeaderComponent />
                <div style={{ margin: "50px" }} className="container">
                    <br></br>
                    <h2 className="text-center">JOB SEEKERS LIST</h2>
                    <br></br>
                    <div className="row">
                        <table className="table table-striped table-bordered">
                            <thead>
                                <tr>
                                    <th>Job Seeker Id</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Mobile Number</th>
                                    <th>Skills</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.jobSeekers.map(
                                        jobSeeker =>
                                            <tr key={jobSeeker.srid}>
                                                <td>{jobSeeker.srid}</td>
                                                <td>{jobSeeker.srname} </td>
                                                <td>{jobSeeker.sremail}</td>
                                                <td>{jobSeeker.srphone}</td>
                                                <td>{jobSeeker.srskills}</td>
                                            </tr>
                                    )
                                }
                            </tbody>
                        </table>

                    </div>
                    <br></br>
                </div>
            </div>

        )


    }

}

export default ViewJobSeekerComponent;
