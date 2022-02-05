import React, { Component } from 'react'
import { deleteJob, fetchAllJobs } from '../../redux/jobdetails/jobdetailsactions';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import JobProviderHeaderComponent from './JobProviderHeaderComponent';

class JobDetailsJobsComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {

        };
        this.deleteJob = this.deleteJob.bind(this);
    }

    componentDidMount() {
        this.props.onFetchJobs();
    }

    deleteJob(id) {
        if (window.confirm(`Are you sure you want to delete job with ID ${id}?`)) {
            this.props.onDeleteJob(id);
        }
    }

    updateJob(id) {
        if (window.confirm("Note: You will only be allowed to change the Last Date.\nDo you still want to proceed?"))
            this.props.history.push(`/updateJob/${id}`)
    }

    render() {
        if (this.props.jobs) {
            return (
                <div>
                    <JobProviderHeaderComponent />
                    <div className="container mt-4">
                        <table className="table table-bordered table-striped">
                            <thead>
                                <tr style={{ fontSize: '20px' }}>
                                    <th>ID</th>
                                    <th>Designation</th>
                                    <th>Location</th>
                                    <th>Experience</th>
                                    <th>Skills</th>
                                    <th>Last Date</th>
                                    <th>Salary</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.props.jobs.map(
                                        job =>
                                            <tr key={job.jobId}>
                                                <td>{job.jobId}</td>
                                                <td>{job.jobDesignation}</td>
                                                <td>{job.jobLocation}</td>
                                                <td>{job.jobExperience}</td>
                                                <td>{job.jobSkills}</td>
                                                <td>{job.jobLastDate}</td>
                                                <td>{job.jobSalary}</td>
                                                <td>
                                                    <Link className="ml-4" onClick={() => this.updateJob(job.jobId)}><FontAwesomeIcon icon={faEdit} color="orange" /></Link>
                                                    <Link className="ml-4" onClick={() => this.deleteJob(job.jobId)}><FontAwesomeIcon icon={faTrashAlt} color="red" /></Link>
                                                </td>
                                            </tr>
                                    )
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            )
        }
        else {
            return (
                <div>
                    <JobProviderHeaderComponent />
                    <div className="container text-primary mt-4" style={{ textAlign: 'center' }}>
                        <i><h2>No Jobs Found</h2><br />
                            <h2>Please proceed to add a job</h2></i><br />
                    </div>
                </div>
            )
        }
    }
}

const mapStateToProps = (state) => {
    return {
        jobs: state.jobs
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onFetchJobs: () => {
            return dispatch(fetchAllJobs())
        },
        onDeleteJob: (id) => {
            return dispatch(deleteJob(id))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(JobDetailsJobsComponent)
