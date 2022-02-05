import React, { Component } from 'react'
import JobProviderService from '../../services/JobProviderService';
import JobProviderHeaderComponent from '../JobDetailsComponents/JobProviderHeaderComponent';

class ViewJobProviderComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            jp_id: this.props.match.params.jp_id,
            jobprovider: {}
        }
    }

    editJobProvider(jp_id) {
        this.props.history.push(`/registrationOrEdit/${jp_id}`);
    }

    componentDidMount() {
        JobProviderService.findJobProviderById(this.state.jp_id).then(res => {
            this.setState({ jobprovider: res.data });
        })
    }

    render() {
        return (
            <div>
                <JobProviderHeaderComponent />
                <div style={{ backgroundColor: "powderblue" }}>
                    <br />
                    <pre>
                        <div className="card col-md-6 offset-md-3"><br />
                            <h2 className="text-center">Profile Details</h2><hr />
                            <div className="card-body">
                                <div className="row" id="r" >
                                    <label>User Name    : </label>
                                    <div className="h"> {this.state.jobprovider.jp_username}</div>
                                </div>
                                <div className="row" id="r">
                                    <label>Company Name : </label>
                                    <div className="h"> {this.state.jobprovider.company_name}</div>
                                </div>
                                <div className="row" id="r">
                                    <label>Full Name    : </label>
                                    <div className="h"> {this.state.jobprovider.full_name}</div>
                                </div>
                                <div className="row" id="r">
                                    <label>Designation  : </label>
                                    <div className="h"> {this.state.jobprovider.designation}</div>
                                </div>
                                <div className="row" id="r">
                                    <label>Department   : </label>
                                    <div className="h"> {this.state.jobprovider.department}</div>
                                </div>
                                <div className="row" id="r">
                                    <label>Email Id     : </label>
                                    <div className="h"> {this.state.jobprovider.email}</div>
                                </div>
                                <div className="row" id="r">
                                    <label>Phone Number : </label>
                                    <div className="h"> {this.state.jobprovider.phone_no}</div>
                                </div>
                                <div className="row" id="r">
                                    <label>Location     : </label>
                                    <div className="h"> {this.state.jobprovider.location}</div>
                                </div><br />
                                <div style={{ marginLeft: "300px" }}>
                                    <button onClick={() => this.editJobProvider(this.state.jp_id)} className="btn btn-info">Edit Profile</button>
                                </div>
                            </div>

                        </div>
                    </pre>
                    <br /><br />
                </div>
            </div>
        )
    }
}

export default ViewJobProviderComponent
