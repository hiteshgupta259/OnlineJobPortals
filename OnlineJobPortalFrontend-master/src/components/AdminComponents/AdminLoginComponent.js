import React, { Component } from 'react'
import AdminLoginService from '../../services/AdminLoginService ';
import backgroundimage from '../../img/backg.jpg';
import HeaderComponent from '../CommonComponents/HeaderComponent'

const initialState = {
   admin_username: '',
    admin_password: '',
    loginError: ''
}

let admin_id;

class AdminLoginComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            //step2
            admin_username: initialState.admin_username,
            admin_password: initialState.admin_password,
            loginError: initialState.loginError,
            adminLogin: []
        }

        this.changeUserNameHandler = this.changeUserNameHandler.bind(this);
        this.changePasswordHandler = this.changePasswordHandler.bind(this);
    }

    validate = () => {
        let loginError = "";
        let flag = false;

        for (this.login in this.state.adminLogin) {
            if (this.state.adminLogin[this.login].admin_username === this.state.admin_username &&
                this.state.adminLogin[this.login].admin_password === this.state.admin_password) {
                admin_id = this.state.adminLogin[this.login].admin_id
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
        AdminLoginService.getAllDetails().then((res) => {
            this.setState({ adminLogin: res.data })
        });
    }

    loginadmin = (e) => {
        e.preventDefault();
        const isValid = this.validate();
        if (isValid) {

            this.props.history.push('/adminHome');
            this.setState(initialState);
        }
    }
//style={{ backgroundImage: `url(${background})` }} 
    changeUserNameHandler = (event) => {
        this.setState({ admin_username: event.target.value });
    }

    changePasswordHandler = (event) => {
        this.setState({ admin_password: event.target.value });
    }
    
    cancel() {
        this.props.history.push('/');
    }

    render() {
        return (
            <div>
               <HeaderComponent />
                <div  style={{ backgroundImage: `url(${backgroundimage})` }} >
                    <div style={{padding:"100px"}}className="row">
                        <div  class="border border-4" class="border border-danger" className="card col-md-8 offset-md-2 offset-med-3">
                            <br />
                            <h3 className="text-center">Admin Login</h3>
                            <div className="text-center" style={{ fontSize: 18, color: "red" }}>{this.state.loginError}</div>

                            <div className="card-body">
                                <form>
                                    <div class="border border-4" class="border border-danger" className="form-group">
                                        <label>User Name :</label>
                                        <input minLength="3" placeholder="Username" name="userName" className="form-control"
                                            value={this.state.admin_username} onChange={this.changeUserNameHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label>Password :</label>
                                        <input type="password" minLength="5" placeholder="Password" name="password" className="form-control"
                                            value={this.state.admin_password} onChange={this.changePasswordHandler} />
                                    </div>

                                    <button style={{margin:"10px 0px 40px 0px"}} className="btn btn-success" onClick={this.loginadmin}>Login</button>
                                    <button style={{margin:"10px 0px 40px 10px"}}className="btn btn-danger" onClick={this.cancel.bind(this)} >Cancel</button>
                                   
                                </form>
                            
                            </div>
                        </div>
                    </div>
                    <div style={{padding:"32px"}} className="form-group">

</div>
                </div>
                
            </div>
        )
    }
}

export default AdminLoginComponent