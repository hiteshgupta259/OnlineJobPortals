import React, { Component } from "react";
import JobSeekerService from "../../services/JobSeekerService";
import image1 from '../../img/backg.jpg'
import HeaderComponent from "../CommonComponents/HeaderComponent";

class JobSeekerRegistrationComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: "",
            mobile: "",
            email: "",
            city: "",
            skills: "",
            password: "",

            usernameError: "",
            mobileError: "",
            emailError: "",
            cityError: "",
            skillsError: "",
            passwordError: "",

        };

        this.ChangeUsernameHandler = this.ChangeUsernameHandler.bind(this)
        this.ChangeMobileHandler = this.ChangeMobileHandler.bind(this)
        this.ChangeEmailHandler = this.ChangeEmailHandler.bind(this)
        this.ChangeCityHandler = this.ChangeCityHandler.bind(this)
        this.ChangeSkillsHandler = this.ChangeSkillsHandler.bind(this)
        this.ChangePasswordHandler = this.ChangePasswordHandler.bind(this)
        this.submitHandler = this.submitHandler.bind(this)
        //this.changeHandler =this.changeHandler.bind(this)
        //this.stopSubmission=this.stopSubmission.bind(this)
    }
    /*changeHandler=(field,e)=>{
      let fields=this.state.fields;
     
     fields[field]=e.target.value;
      this.setState({fields});
    }*/



    submitHandler = (e) => {
        e.preventDefault();
        let seeker = {
            srname: this.state.username,
            srphone: this.state.mobile,
            sremail: this.state.email,
            srcity: this.state.city,
            srskills: this.state.skills,
            password: this.state.password
        };
        const isValid = this.validate();

        if (isValid) {
            JobSeekerService.createSeeker(seeker).then(response => {
                this.props.history.push('/seekerlogin');
            });
            alert("Registered successfully");
        }
        else {
            alert("Form has errors");
        }

    }
    /*redirect(){
      window.location.href="/login"
    }*/

    validate = () => {
        let usernameError = "";
        let mobileError = "";
        let emailError = "";
        let cityError = "";
        let skillsError = "";
        let passwordError = "";

        if (!this.state.username.match("[a-zA-Z]")) {
            usernameError = "Enter valid Username";
        }
        if (!this.state.mobile.match("[7-9]{1}[0-9]{9}")) {
            mobileError = "please enter 10 digit mobile number";
        }

        if ((!this.state.email.includes("@")) && (!this.state.email)) {
            emailError = "Invalid Email";
        }

        if (!this.state.city.match("[a-zA-Z]")) {
            cityError = "Enter valid city name";
        }

        if (!this.state.skills.match("[a-zA-Z]")) {
            skillsError = "Enter skills";
        }

        if (!this.state.password.match(/^([A-Za-z0-9.,/;'@#$%^&*()!-]+[A-Za-z.0-9]*).{8,30}/)) {
            passwordError = "Invalid password";
        }
        if (usernameError || mobileError || emailError || cityError || skillsError || passwordError) {
            this.setState({
                usernameError, mobileError, emailError, cityError, skillsError, passwordError
            });
            return false;
        }
        return true;
    };



    ChangeUsernameHandler = (e) => {
        this.setState({
            username: e.target.value
        })
    }

    ChangeMobileHandler = (e) => {
        this.setState({
            mobile: e.target.value
        })
    }

    ChangeEmailHandler = (e) => {
        this.setState({
            email: e.target.value
        })
    }

    ChangeCityHandler = (e) => {
        this.setState({
            city: e.target.value
        })
    }

    ChangeSkillsHandler = (e) => {
        this.setState({
            skills: e.target.value
        })
    }

    ChangePasswordHandler = (e) => {
        this.setState({
            password: e.target.value
        })
    }

    cancel() {
        this.props.history.push('/');
    }


    render() {
        return (
            <div>
                <HeaderComponent />
                <div style={{ backgroundImage: `url(${image1})` }}>
                    <div className="container">
                        <div id="reg">
                            <div className="card col-md-8 offset-md-2 offset-med-3">

                                <h2>Registration Page</h2>

                                <form >
                                    <div className="form-group">
                                        <label>Username</label>
                                        <input
                                            type="text"
                                            value={this.state.username}
                                            name="username"
                                            placeholder="Enter your Full Name"
                                            className="form-control"
                                            onChange={this.ChangeUsernameHandler}
                                            pattern="[a-zA-Z]{3,15}"
                                            required="required"
                                        //value= {this.state.fields["username"]}   
                                        />
                                        <div style={{ color: "red" }}>{this.state.usernameError}</div>
                                    </div>



                                    <div className="form-group">
                                        <label>Mobile</label>
                                        <input
                                            type="text"
                                            value={this.state.mobile}
                                            name="mobile"
                                            placeholder="Mobile Number"
                                            className="form-control"
                                            onChange={this.ChangeMobileHandler}
                                            pattern="[7-9]{1}[0-9]{9}"
                                            required
                                        //value= {this.state.fields["mobile"]}   
                                        />
                                        <div style={{ color: "red" }}>{this.state.mobileError}</div>

                                    </div>

                                    <div className="form-group">
                                        <label>Email</label>
                                        <input
                                            type="email"
                                            name="email"
                                            placeholder="Enter Email ID"
                                            value={this.state.email}
                                            className="form-control"
                                            onChange={this.ChangeEmailHandler}
                                            pattern="^[a-zA-Z0-9+_.-]+@[a-zA-Z]+.[a-zA-Z]+"
                                            required
                                        //value= {this.state.fields["email"]}                
                                        />
                                        <div style={{ color: "red" }}>{this.state.emailError}</div>
                                    </div>

                                    <div className="form-group">
                                        <label>City</label>
                                        <input
                                            type="text"
                                            name="city"
                                            placeholder="Enter City"
                                            value={this.state.city}
                                            className="form-control"
                                            onChange={this.ChangeCityHandler}
                                            required
                                        // value= {this.state.fields["city"]}
                                        />
                                        <div style={{ color: "red" }}>{this.state.cityError}</div>

                                    </div>


                                    <div className="form-group">
                                        <label>Skills</label>
                                        <input
                                            type="text"
                                            name="skills"
                                            placeholder="Enter your Skills"
                                            value={this.state.skills}
                                            className="form-control"
                                            onChange={this.ChangeSkillsHandler}
                                            required
                                        //value= {this.state.fields["skills"]}
                                        />
                                        <div style={{ color: "red" }}>{this.state.skillsError}</div>

                                    </div>



                                    <div className="form-group">
                                        <label>Password</label>
                                        <input
                                            type="text"
                                            name="password"
                                            placeholder="Enter password"
                                            value={this.state.password}
                                            className="form-control"
                                            onChange={this.ChangePasswordHandler}
                                            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                                            required
                                        //value= {this.state.fields["password"]}
                                        />
                                        <div style={{ color: "red" }}>{this.state.passwordError}</div>

                                    </div>

                                    <div className="form-group">
                                        <button className="btn btn-success" onClick={this.submitHandler}>Register</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{ marginLeft: "10px" }}>Cancel</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div style={{ padding: "80px" }} className="form-group"></div>
                </div>
            </div>
        );
    }
}

export default JobSeekerRegistrationComponent;