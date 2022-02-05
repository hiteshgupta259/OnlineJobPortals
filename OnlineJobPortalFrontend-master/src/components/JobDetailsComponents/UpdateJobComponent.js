import React, { Component } from 'react'
import * as actions from '../../redux/jobdetails/jobdetailsactions'
import { connect } from 'react-redux';
import JobProviderHeaderComponent from './JobProviderHeaderComponent';

class UpdateJobComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,

            jobLastDate: '',
        }

        this.props.onGetJob(this.state.id)
    }

    componentDidMount() {
        this.props.onGetJob(this.state.id)
    }

    changeDateHandler = (e) => {
        this.setState({ jobLastDate: e.target.value })
    }

    updateJob = (e) => {
        e.preventDefault();
        let id = this.state.id;
        let details = {
            jobLastDate: this.state.jobLastDate
        }
        this.props.onUpdateJob(id, details);
        this.setState({ id: '', ldate: '', jobLastDate: '' })
    }

    render() {
        if (this.props.job) {
            return (
                <div>
                    <JobProviderHeaderComponent />
                    <div className="container col-md-6 mt-4 offset-md-3 offset-md-3">
                        <h2 className="text-secondary text-center">Please Provide Details</h2>
                        <form className="mt-4 mb-4" method="POST" onSubmit={this.updateJob}>
                            <table className="table">
                                <tbody>
                                    <tr>
                                        <td class="font-weight-bold">ID</td>
                                        <td className="ml-4">{this.props.job.jobId}</td>
                                    </tr>
                                    <tr>
                                        <td class="font-weight-bold">Designation</td>
                                        <td className="ml-4">{this.props.job.jobDesignation}</td>
                                    </tr>
                                    <tr>
                                        <td class="font-weight-bold">Loation</td>
                                        <td className="ml-4">{this.props.job.jobLocation}</td>
                                    </tr>
                                    <tr>
                                        <td class="font-weight-bold">Experience</td>
                                        <td className="ml-4">{this.props.job.jobExperience} years</td>
                                    </tr>
                                    <tr>
                                        <td class="font-weight-bold">Skills</td>
                                        <td className="ml-4">{this.props.job.jobSkills}</td>
                                    </tr>
                                    <tr>
                                        <td class="font-weight-bold">Previous Last Date</td>
                                        <td className="ml-4">{this.props.job.jobLastDate}</td>
                                    </tr>
                                    <tr>
                                        <td class="font-weight-bold">Description</td>
                                        <td className="ml-4">{this.props.job.jobDescription}</td>
                                    </tr>
                                    <tr>
                                        <td class="font-weight-bold">Salary</td>
                                        <td className="ml-4">{this.props.job.jobSalary}</td>
                                    </tr>
                                    <tr>
                                        <td class="font-weight-bold">New Last Date</td>
                                        <td><input type="date" value={this.state.jobLastDate} name="jobLastDate" className="form-control mt-2" min={new Date().toISOString().split('T')[0]} onChange={this.changeDateHandler} required />
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <button className="btn btn-primary buttonCenter mt-2 btn-lg">Update</button>
                        </form>
                        <div className="mb-3 text-center" style={{ marginTop: "10px" }}>
                            <div className={(this.props.message === '') ? '' : 'alert alert-success '} role="alert" >
                                {this.props.message}
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
        else {
            return (
                <div className="container text-primary mt-4 text-center">
                    <h4>Unable to Load</h4>
                </div>
            )
        }
    }
}

const mapStateToProps = (state) => {
    console.log(state)
    return {
        job: state.job,
        message: state.message
    }
}

const mapDispatchToState = (dispatch) => {
    return {
        onGetJob: (id) => {
            return dispatch(actions.getJobById(id))
        },
        onUpdateJob: (id, payload) => {
            dispatch(actions.updateJob(id, payload))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToState)(UpdateJobComponent)
