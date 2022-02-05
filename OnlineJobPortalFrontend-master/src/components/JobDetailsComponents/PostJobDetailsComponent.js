import React, { Component } from 'react'
import * as actions from '../../redux/jobdetails/jobdetailsactions'
import { connect } from 'react-redux';
import '../../css/CssDesigns.css'
import JobProviderHeaderComponent from './JobProviderHeaderComponent';

class PostJobDetails extends Component {

    constructor(props) {
        super(props)

        this.state = {
            jobId: '',
            jobDesignation: '',
            jobLocation: '',
            jobExperience: '',
            jobSkills: '',
            jobLastDate: '',
            jobDescription: '',
            jobSalary: '',
            jobIderror: '',
            jobDesignationerror: '',
            jobLocationerror: '',
            jobExperienceerror: '',
            jobSkillserror: '',
            jobDescriptionerror: '',
            jobSalaryerror: ''
        }
    }

    changeIdHandler = (e) => {
        this.setState({
            jobId: e.target.value
        })
    }

    changeDesignationHandler = (e) => {
        this.setState({
            jobDesignation: e.target.value
        })
    }

    changeLocationHandler = (e) => {
        this.setState({
            jobLocation: e.target.value
        })
    }

    changeExperienceHandler = (e) => {
        this.setState({
            jobExperience: e.target.value
        })
    }

    changeSkillsHandler = (e) => {
        this.setState({
            jobSkills: e.target.value
        })
    }

    changeDateHandler = (e) => {
        this.setState({
            jobLastDate: e.target.value
        })
    }

    changeDescriptionHandler = (e) => {
        this.setState({
            jobDescription: e.target.value
        })
    }

    changeSalaryHandler = (e) => {
        this.setState({
            jobSalary: e.target.value
        })
    }

    validate = () => {
        let jobIderror = "";
        let jobDesignationerror = "";
        let jobLocationerror = "";
        let jobExperienceerror = "";
        let jobSkillserror = "";
        let jobDescriptionerror = "";
        let jobSalaryerror = "";

        if (!this.state.jobId.match(/^[1-9]+/)) {
            jobIderror = 'Enter valid id';
        }
        if (!this.state.jobDesignation.match(/^([a-zA-Z]+[-. ]*){3,25}/)) {
            jobDesignationerror = 'Designation must contain only alphabets';
        }
        if (!this.state.jobLocation.match(/^([a-zA-Z]+[-. ]*){3,}/)) {
            jobLocationerror = 'Location must contain only alphabets';
        }
        if (!this.state.jobExperience.match(/^([0-9]+){1,2}/)) {
            jobExperienceerror = 'Must contain only digits';
        }
        if (!this.state.jobSkills.match(/^([a-zA-Z]+[a-zA-Z ,+.]*){1,50}/)) {
            jobSkillserror = 'Atleast one skill is required';
        }
        if (!this.state.jobDescription.match(/^([a-zA-Z]+[-. ]*){3,25}/)) {
            jobDescriptionerror = 'Please enter little description';
        }
        if (!this.state.jobSalary.match(/^([1-9]+){2,}/)) {
            jobSalaryerror = 'Should contain only digits';
        }

        if (jobIderror || jobDesignationerror || jobLocationerror || jobExperienceerror || jobSkillserror || jobDescriptionerror || jobSalaryerror) {
            this.setState({ jobIderror, jobDesignationerror, jobLocationerror, jobExperienceerror, jobSkillserror, jobDescriptionerror, jobSalaryerror });
            return false;
        }
        return true;
    }

    postJob = (e) => {
        e.preventDefault()
        if (this.validate()) {
            let jobDetails = {
                jobId: this.state.jobId,
                jobDesignation: this.state.jobDesignation,
                jobLocation: this.state.jobLocation,
                jobExperience: this.state.jobExperience,
                jobSkills: this.state.jobSkills,
                jobLastDate: this.state.jobLastDate,
                jobDescription: this.state.jobDescription,
                jobSalary: this.state.jobSalary
            }
            this.props.onPostJob(jobDetails);
            this.setState({ jobId: '', jobDesignation: '', jobLocation: '', jobExperience: '', jobSkills: '', jobLastDate: '', jobDescription: '', jobSalary: '', jobIderror: '', jobDesignationerror: '', jobLocationerror: '', jobExperienceerror: '', jobSkillserror: '', jobDescriptionerror: '', jobSalaryerror: '' })
        }
    }

    cancelPost = (e) => {
        e.preventDefault();
        this.props.history.push('/providerHome')
    }

    render() {
        return (
            <div>
                <JobProviderHeaderComponent />
                <div className="container">
                    <div className="col-md-6 offset-md-3 offset-md-3 mt-4 postForm">
                        <h2 className="text-secondary text-center">Please Provide Job Details</h2>
                        <div className="container">
                            <form method="POST" onSubmit={this.postJob}>
                                <table className="center">
                                    <tbody>
                                        <tr>
                                            <td><h4 className="required-field">ID</h4></td>
                                            <td>
                                                <input type="number" value={this.state.jobId} name="jobId" placeholder="Enter Job Id" className="form-control ml-4 mt-2" onChange={this.changeIdHandler} required />
                                                {this.state.jobIderror ? (<div style={{ fontSize: 12 }} className="text-danger ml-4">{this.state.jobIderror}</div>) : null}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td><h4 className="required-field">Designation</h4></td>
                                            <td>
                                                <input type="text" value={this.state.jobDesignation} name="jobDesignation" placeholder="Enter Job Designation" className="form-control ml-4 mt-2" onChange={this.changeDesignationHandler} required />
                                                {this.state.jobDesignationerror ? (<div style={{ fontSize: 12 }} className="text-danger ml-4">{this.state.jobDesignationerror}</div>) : null}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td><h4 className="required-field">Location</h4></td>
                                            <td>
                                                <input type="text" value={this.state.jobLocation} name="jobLocation" placeholder="Enter Job Location" className="form-control ml-4 mt-2" onChange={this.changeLocationHandler} required />
                                                {this.state.jobLocationerror ? (<div style={{ fontSize: 12 }} className="text-danger ml-4">{this.state.jobLocationerror}</div>) : null}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td><h4 className="required-field">Experience</h4></td>
                                            <td>
                                                <input type="text" value={this.state.jobExperience} name="jobExperience" placeholder="Enter minimum experience required" className="form-control ml-4 mt-2" onChange={this.changeExperienceHandler} required />
                                                {this.state.jobExperienceerror ? (<div style={{ fontSize: 12 }} className="text-danger ml-4">{this.state.jobExperienceerror}</div>) : null}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td><h4 className="required-field">Skills</h4></td>
                                            <td>
                                                <input type="text" value={this.state.jobSkills} name="jobSkills" placeholder="Enter skills required" className="form-control ml-4 mt-2" onChange={this.changeSkillsHandler} required />
                                                {this.state.jobSkillserror ? (<div style={{ fontSize: 12 }} className="text-danger ml-4">{this.state.jobSkillserror}</div>) : null}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td><h4 className="required-field">Last Date</h4></td>
                                            <td>
                                                <input type="date" value={this.state.jobLastDate} name="jobLastDate" className="form-control ml-4 mt-2" min={new Date().toISOString().split('T')[0]} onChange={this.changeDateHandler} required />
                                                {this.state.jobLastDateerror ? (<div style={{ fontSize: 12 }} className="text-danger ml-4">{this.state.jobLastDateerror}</div>) : null}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td><h4 className="required-field">Description</h4></td>
                                            <td>
                                                <textarea value={this.state.jobDescription} name="jobDescription" placeholder="Please provide a small description" className="form-control ml-4 mt-2" onChange={this.changeDescriptionHandler} required />
                                                {this.state.jobDescriptionerror ? (<div style={{ fontSize: 12 }} className="text-danger ml-4">{this.state.jobDescriptionerror}</div>) : null}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td><h4 className="required-field">Salary</h4></td>
                                            <td>
                                                <input type="text" value={this.state.jobSalary} name="jobSalary" placeholder="Enter approximate salary" className="form-control ml-4 mt-2" onChange={this.changeSalaryHandler} required />
                                                {this.state.jobSalaryerror ? (<div style={{ fontSize: 12 }} className="text-danger ml-4">{this.state.jobSalaryerror}</div>) : null}
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <button className="btn btn-primary postButton mt-3">Post Job</button>
                                <button className="btn btn-danger float-right cancelButton mt-3" onClick={this.cancelPost}>Cancel</button>
                            </form>
                        </div>
                        <div className="mb-3" style={{ marginTop: "10px", textAlign: 'center' }}>
                            <div className={(this.props.message === '') ? '' : 'alert alert-success '} role="alert" >
                                {this.props.message}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        message: state.message
    }
}

const mapDispatchToState = (dispatch) => {
    return {
        onPostJob: (payload) => dispatch(actions.postJobDetails(payload))
    }
}

export default connect(mapStateToProps, mapDispatchToState)(PostJobDetails)
