import React, { Component } from 'react'
import JobProviderService from '../../services/JobProviderService';
import HeaderComponent from '../CommonComponents/HeaderComponent';
import background from '../../img/backg.jpg'

const initialState = {
    jp_username: '',
    jp_pwd: '',
    loginError: ''
}

let jp_id;

class LoginJobProviderComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            //step2
            jp_username: initialState.jp_username,
            jp_pwd: initialState.jp_pwd,
            loginError: initialState.loginError,
            jobproviders: []
        }

        this.changeUserNameHandler = this.changeUserNameHandler.bind(this);
        this.changePasswordHandler = this.changePasswordHandler.bind(this);
    }

    validate = () => {
        let loginError = "";
        let flag = false;

        for (this.jobprovider in this.state.jobproviders) {
            if (this.state.jobproviders[this.jobprovider].jp_username === this.state.jp_username &&
                this.state.jobproviders[this.jobprovider].jp_pwd === this.state.jp_pwd) {
                jp_id = this.state.jobproviders[this.jobprovider].jp_id
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
        JobProviderService.getAllJobProviders().then((res) => {
            this.setState({ jobproviders: res.data })
        });
    }

    loginJobProvider = (e) => {
        e.preventDefault();
        const isValid = this.validate();
        if (isValid) {
            localStorage.setItem("id", jp_id)
            this.props.history.push(`/providerHome/${jp_id}`);
            this.setState(initialState);
        }
    }

    changeUserNameHandler = (event) => {
        this.setState({ jp_username: event.target.value });
    }

    changePasswordHandler = (event) => {
        this.setState({ jp_pwd: event.target.value });
    }

    cancel() {
        this.props.history.push('/');
    }

    render() {
        return (
            <div>
                <HeaderComponent></HeaderComponent>
                <div style={{ backgroundImage: `url(${background})`, height: "720px", opacity: "0.9" }} >
                    <br /><br />
                    <div className="container">
                        <div className="row" >
                            <div className="card col-md-8 offset-md-2 offset-med-3" style={{ marginTop: "100px" }}>
                                <br />
                                <h3 className="text-center">Job Provider Login</h3>
                                <div className="text-center" style={{ fontSize: 18, color: "red" }}>{this.state.loginError}</div>

                                <div className="card-body" >
                                    <form>
                                        <div className="form-group">
                                            <label>User Name :</label>
                                            <input minLength="3" placeholder="Enter Your Username" name="userName" className="form-control"
                                                value={this.state.jp_username} onChange={this.changeUserNameHandler} />
                                        </div>
                                        <div className="form-group">
                                            <label>Password :</label>
                                            <input minLength="5" placeholder="Enter Password" type="password" name="password" className="form-control"
                                                value={this.state.jp_pwd} onChange={this.changePasswordHandler} />
                                        </div>

                                        <button className="btn btn-success" onClick={this.loginJobProvider}>Login</button>
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

export default LoginJobProviderComponent