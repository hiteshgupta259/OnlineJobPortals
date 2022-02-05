import React, { Component } from 'react'
import AdminLoginService from '../../services/AdminLoginService ';
import AdminHeaderComponent from './AdminHeaderComponent';

class ViewJobProvidersComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            jobProviders: []
        }

    }



    componentDidMount() {
        AdminLoginService.getAllJobProviders().then((res) => {
            this.setState({ jobProviders: res.data });
        });
    }



    render() {
        return (
            <div>
                <AdminHeaderComponent />
                <div style={{ margin: "50px" }} className="container">
                    <br>


                    </br>
                    <h2 className="text-center">JOB PROVIDERS LIST</h2>

                    <br></br>
                    <div className="row">
                        <table className="table table-striped table-bordered">

                            <thead>
                                <tr>
                                    <th>Job Provider Id</th>
                                    <th>Company Name</th>
                                    <th>Location</th>
                                    <th>Email</th>
                                    <th>Mobile Number</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.jobProviders.map(
                                        jobProvider =>
                                            <tr key={jobProvider.jp_id}>
                                                <td>{jobProvider.jp_id}</td>
                                                <td>{jobProvider.company_name} </td>
                                                <td>{jobProvider.location}</td>
                                                <td>{jobProvider.email}</td>
                                                <td>{jobProvider.phone_no}</td>
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

export default ViewJobProvidersComponent;
