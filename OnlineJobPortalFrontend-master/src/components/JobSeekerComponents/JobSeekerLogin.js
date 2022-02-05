import React, { Component } from 'react'
import JobSeekerService from '../../services/JobSeekerService';
import HeaderComponent from '../CommonComponents/HeaderComponent';
import image1 from '../../img/backg.jpg'

const initialState = {
    srname: '',
    password: '',
    loginError: ''
}

let id;

class JobSeekerLogin extends Component {
    constructor(props) {
        super(props)

        this.state = {
            //step2
            srname: initialState.srname,
            password: initialState.password,
            loginError: initialState.loginError,
            jobseekers: []
        }

        this.changeUserNameHandler = this.changeUserNameHandler.bind(this);
        this.changePasswordHandler = this.changePasswordHandler.bind(this);
    }

    validate = () => {
        let loginError = "";
        let flag = false;

        for (this.jobseeker in this.state.jobseekers) {
            if (this.state.jobseekers[this.jobseeker].srname === this.state.srname &&
                this.state.jobseekers[this.jobseeker].password === this.state.password) {
                id = this.state.jobseekers[this.jobseeker].id
                flag = true
            }
        }
        if (!flag) {
            loginError = "Invalid User-Name Or Password"
        }

        if (loginError) {
            this.setState({ loginError })
            return false
        }
        return true
    }

    //step3
    componentDidMount() {
        JobSeekerService.getAllJobSeekerRegistration().then((res) => {
            this.setState({ jobseekers: res.data })
        });
    }

    loginJobSeeker = (e) => {
        e.preventDefault();
        const isValid = this.validate();
        if (isValid) {
            this.props.history.push(`/seekerHome`);
            this.setState(initialState);
        }
    }

    changeUserNameHandler = (event) => {
        this.setState({ srname: event.target.value });
    }

    changePasswordHandler = (event) => {
        this.setState({ password: event.target.value });
    }

    cancel() {
        this.props.history.push('/');
    }

    render() {
        return (
            <div>
                <HeaderComponent />
                <div style={{ backgroundImage: `url(${image1})` }}>
                    <div style={{ padding: "100px" }} className="row">
                        <div className="card col-md-8 offset-md-2 offset-med-3">
                            <br />
                            <h3 className="text-center">Login</h3>
                            <div className="text-center" style={{ fontSize: 18, color: "red" }}>{this.state.loginError}</div>

                            <div className="card-body">
                                <form >
                                    <div className="form-group">
                                        <label>User Name :</label>
                                        <input minLength="3" placeholder="Enter Your Email" name="userName" className="form-control"
                                            value={this.state.srname} onChange={this.changeUserNameHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label>Password :</label>
                                        <input minLength="5" placeholder="Enter Password" name="password" className="form-control"
                                            value={this.state.password} onChange={this.changePasswordHandler} />
                                    </div>

                                    <button className="btn btn-success" onClick={this.loginJobSeeker}>Login</button>
                                    <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{ marginLeft: "10px" }}>Cancel</button>
                                </form>
                            </div>
                        </div>

                    </div>
                    <div style={{ padding: "80px" }} className="form-group">
                    </div>
                </div>

            </div>

        )
    }
}

export default JobSeekerLogin