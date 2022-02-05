import React, { Component } from 'react'
import background from '../../img/backg.jpg'
import JobProviderService from '../../services/JobProviderService';
import HeaderComponent from '../CommonComponents/HeaderComponent';

const initialState = {
    jp_username: '',
    jp_pwd: '',
    company_name: '',
    fullNameError: '',
    designation: '',
    department: '',
    email: '',
    phone_no: '',
    location: '',
    usernameError: '',
    passwordError: '',
    companyNameError: '',
    fullNameError: '',
    designationError: '',
    departmentError: '',
    emailError: '',
    phone_noError: '',
    locationError: ''
}

class CreateJobProviderComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            //step2
            jp_id: this.props.match.params.jp_id,
            jp_username: initialState.jp_username,
            jp_pwd: initialState.jp_pwd,
            company_name: initialState.company_name,
            full_name: initialState.full_name,
            designation: initialState.designation,
            department: initialState.department,
            email: initialState.email,
            phone_no: initialState.phone_no,
            location: initialState.location,
            usernameError: initialState.usernameError,
            passwordError: initialState.passwordError,
            companyNameError: initialState.companyNameError,
            fullNameError: initialState.fullNameError,
            designationError: initialState.designationError,
            departmentError: initialState.departmentError,
            emailError: initialState.emailError,
            phone_noError: initialState.phone_noError,
            locationError: initialState.locationError
        }

        this.saveOrUpdateJobProvider = this.saveOrUpdateJobProvider.bind(this);
        this.changeUserNameHandler = this.changeUserNameHandler.bind(this);
        this.changePasswordHandler = this.changePasswordHandler.bind(this);
        this.changeCompanyNameHandler = this.changeCompanyNameHandler.bind(this);
        this.changeFullNameHandler = this.changeFullNameHandler.bind(this);
        this.changeDesignationHandler = this.changeDesignationHandler.bind(this);
        this.changeDepartmentHandler = this.changeDepartmentHandler.bind(this);
        this.changeEmailHandler = this.changeEmailHandler.bind(this);
        this.changePhoneHandler = this.changePhoneHandler.bind(this);
        this.changeLocationHandler = this.changeLocationHandler.bind(this);
    }

    validate = () => {
        let usernameError = "";
        let passwordError = "";
        let companyNameError = "";
        let fullNameError = "";
        let designationError = "";
        let departmentError = "";
        let emailError = "";
        let phone_noError = "";
        let locationError = "";

        if (!this.state.jp_username || this.state.jp_username.length < 3) {
            usernameError = "User Name length should be greater than 2"
        }
        else if (!this.state.jp_username.match(/[_a-zA-Z]+[0-9]*/g)) {
            usernameError = "Please use alphabet or alphanumeric combination"
        }

        if (!this.state.jp_pwd || this.state.jp_pwd < 5) {
            passwordError = "Password Length Should be more then 5"
        }
        else if (!this.state.jp_pwd.match(/[A-Za-z0-9]+[!@#$%^&*]+[a-zA-Z0-9]*/g)) {
            passwordError = "Password Should Contain UpperCase or LowerCase Alphabet, special character and digits"
        }

        if (!this.state.company_name || !this.state.company_name.match(/[A-Za-z]+[&]*[a-zA-z]*/g)) {
            companyNameError = "Please Enter Valid Company Name"
        }

        if (!this.state.full_name || !this.state.full_name.match(/[A-Za-z]+[ ]?[A-za-z]*[ ]?[A-za-z]*/g)) {
            fullNameError = "Please Enter Valid Full-Name"
        }

        if (!this.state.designation || !this.state.designation.match(/[A-Za-z .]+/g)) {
            designationError = "Please Enter Valid Designation"
        }

        if (!this.state.department || !this.state.department.match(/[A-Za-z]+/g)) {
            departmentError = "Please Enter Valid Department"
        }

        if (!this.state.email || !this.state.email.match(/[A-Za-z]+[0-9]*@[a-zA-Z]+.[a-zA-A]+/g)) {
            emailError = "Please Enter Valid Email-ID"
        }

        if (!this.state.phone_no || !this.state.phone_no.match(/^[0-9]+$/g) || this.state.phone_no.length < 10) {
            phone_noError = "Invalid mobile number"
        }

        if (!this.state.location || !this.state.location.match(/[A-Za-z]+/g) || this.state.location.length < 3) {
            locationError = "Please Enter Valid Location"
        }

        if (usernameError || passwordError || companyNameError || fullNameError || designationError || departmentError || emailError || phone_noError || locationError) {
            this.setState({ usernameError, passwordError, companyNameError, fullNameError, designationError, departmentError, emailError, phone_noError, locationError })
            return false
        }
        return true
    }

    //step3
    componentDidMount() {
        //step4
        if (this.state.jp_id === '_registration') {
            return
        } else {

            JobProviderService.findJobProviderById(this.state.jp_id).then((res) => {
                let jobProvider = res.data;
                this.setState(
                    {
                        jp_id: jobProvider.jp_id, jp_username: jobProvider.jp_username, jp_pwd: jobProvider.jp_pwd, company_name: jobProvider.company_name,
                        full_name: jobProvider.full_name, designation: jobProvider.designation, department: jobProvider.department,
                        email: jobProvider.email, phone_no: jobProvider.phone_no, location: jobProvider.location
                    }
                );
            });
        }
    }

    saveOrUpdateJobProvider = (e) => {
        e.preventDefault();
        const isValid = this.validate();
        if (isValid) {

            if (this.state.jp_id === '_registration') {
                let jobProvider = {
                    jp_username: this.state.jp_username, jp_pwd: this.state.jp_pwd, company_name: this.state.company_name,
                    full_name: this.state.full_name, designation: this.state.designation, department: this.state.department,
                    email: this.state.email, phone_no: this.state.phone_no, location: this.state.location
                };
                console.log('jobProvider => ' + JSON.stringify(jobProvider));
                JobProviderService.saveJobProvider(jobProvider).then(res => {
                    this.props.history.push('/');
                });
            } else {
                let jobProvider = {
                    jp_id: this.state.jp_id, jp_username: this.state.jp_username, jp_pwd: this.state.jp_pwd, company_name: this.state.company_name,
                    full_name: this.state.full_name, designation: this.state.designation, department: this.state.department,
                    email: this.state.email, phone_no: this.state.phone_no, location: this.state.location
                };

                JobProviderService.updateJobProvider(jobProvider, this.state.jp_id).then(res => {
                    this.props.history.push('/providerHome/'+localStorage.getItem("id"));
                });
            }
            this.setState(initialState);
        }
    }

    changeUserNameHandler = (event) => {
        this.setState({ jp_username: event.target.value });
    }

    changePasswordHandler = (event) => {
        this.setState({ jp_pwd: event.target.value });
    }

    changeCompanyNameHandler = (event) => {
        this.setState({ company_name: event.target.value });
    }

    changeFullNameHandler = (event) => {
        this.setState({ full_name: event.target.value });
    }

    changeDepartmentHandler = (event) => {
        this.setState({ department: event.target.value });
    }

    changeDesignationHandler = (event) => {
        this.setState({ designation: event.target.value });
    }

    changeEmailHandler = (event) => {
        this.setState({ email: event.target.value });
    }

    changePhoneHandler = (event) => {
        this.setState({ phone_no: event.target.value });
    }

    changeLocationHandler = (event) => {
        this.setState({ location: event.target.value });
    }

    cancel() {
        this.props.history.push('/');
    }

    getTitle() {
        if (this.state.jp_id === '_registration') {
            return <h3 className="text-center">Registration</h3>
        } else {
            return <h3 className="text-center">Edit Profile</h3>

        }
    }

    getButton() {
        if (this.state.jp_id === '_registration') {
            return <button className="btn btn-success" onClick={this.saveOrUpdateJobProvider}>Register</button>

        } else {
            return <button className="btn btn-success" onClick={this.saveOrUpdateJobProvider}>Save</button>
        }
    }

    render() {
        return (
            <div>
                <HeaderComponent />
                <div style={{ backgroundImage: `url(${background})`, height: "1080px", opacity: "0.9" }}>
                    <br /><br />
                    <div className="container" >
                        <div className="row" >
                            <div className="card col-md-8 offset-md-2 offset-med-3">
                                <br />
                                {
                                    this.getTitle()
                                }
                                <div className="card-body">
                                    <form>
                                        <div className="form-group">
                                            <label>User Name :</label>
                                            <input minLength="3" placeholder="eg: hitesh259" name="userName" className="form-control"
                                                value={this.state.jp_username} onChange={this.changeUserNameHandler} />
                                            <div style={{ fontSize: 12, color: "red" }}>{this.state.usernameError}</div>
                                        </div>
                                        <div className="form-group">
                                            <label>Password :</label>
                                            <input minLength="5" placeholder="eg: Hitesh@123" name="password" className="form-control"
                                                value={this.state.jp_pwd} onChange={this.changePasswordHandler} />
                                            <div style={{ fontSize: 12, color: "red" }}>{this.state.passwordError}</div>

                                        </div>
                                        <div className="form-group">
                                            <label>Company Name :</label>
                                            <input placeholder="eg: Capgemini" name="companyName" className="form-control"
                                                value={this.state.company_name} onChange={this.changeCompanyNameHandler} />
                                            <div style={{ fontSize: 12, color: "red" }}>{this.state.companyNameError}</div>

                                        </div>
                                        <div className="form-group">
                                            <label>Full Name :</label>
                                            <input minLength="3" placeholder="eg: Hitesh V Gupta" name="fullName" className="form-control"
                                                value={this.state.full_name} onChange={this.changeFullNameHandler} />
                                            <div style={{ fontSize: 12, color: "red" }}>{this.state.fullNameError}</div>

                                        </div>

                                        <div className="form-group">
                                            <label>Department :</label>
                                            <input placeholder="eg: IT" name="eg: department" className="form-control"
                                                value={this.state.department} onChange={this.changeDepartmentHandler} />
                                            <div style={{ fontSize: 12, color: "red" }}>{this.state.departmentError}</div>

                                        </div>

                                        <div className="form-group">
                                            <label>Designation :</label>
                                            <input placeholder="eg: HR" name="hr" className="form-control"
                                                value={this.state.designation} onChange={this.changeDesignationHandler} />
                                            <div style={{ fontSize: 12, color: "red" }}>{this.state.designationError}</div>

                                        </div>

                                        <div className="form-group">
                                            <label>Email :</label>
                                            <input minLength="3" placeholder="eg: hitesh259@gmail.com" name="email" className="form-control"
                                                value={this.state.email} onChange={this.changeEmailHandler} />
                                            <div style={{ fontSize: 12, color: "red" }}>{this.state.emailError}</div>
                                        </div>

                                        <div className="form-group">
                                            <label>Phone Number:</label>
                                            <input minLength="10" placeholder="eg: 8652503714" name="phoneNumber" className="form-control"
                                                value={this.state.phone_no} onChange={this.changePhoneHandler} maxLength="10" />
                                            <div style={{ fontSize: 12, color: "red" }}>{this.state.phone_noError}</div>
                                        </div>

                                        <div className="form-group">
                                            <label>Location :</label>
                                            <input minLength="3" placeholder="eg: Mumbai" name="location" className="form-control"
                                                value={this.state.location} onChange={this.changeLocationHandler} />
                                            <div style={{ fontSize: 12, color: "red" }}>{this.state.locationError}</div>

                                        </div>
                                        {
                                            this.getButton()
                                        }
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{ marginLeft: "10px" }}>Cancel</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br /><br />
                </div>
            </div>
        )
    }
}

export default CreateJobProviderComponent