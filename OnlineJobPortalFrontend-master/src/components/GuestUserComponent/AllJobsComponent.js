import React from 'react';
import { InputGroup, FormControl } from "react-bootstrap";
import axios from 'axios';
import GuestUserService from '../../services/GuestUserService';
import HeaderComponent from '../CommonComponents/HeaderComponent';

class AllJobsComponent extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            users: [],
            search: '',
        }
    }
    login = false;

    viewJobDetails(jid) {
        this.props.history.push(`/view-job/${jid}`);
    }

    componentDidMount() {
        GuestUserService.getJobs().then((response) => {
            this.setState({ users: response.data })
        });
    }

    searchChange = event => {
        this.setState({
            search: event.target.value
        })
    }

    searchDataLocation = () => {
        axios.get('http://localhost:8080/jobs/location/' + this.state.search)
            .then((response) => {
                this.setState({ users: response.data })
            });
    }

    searchDataDesignation = () => {
        axios.get('http://localhost:8080/jobs/designation/' + this.state.search)
            .then((response) => {
                this.setState({ users: response.data })
            });
    }

    searchDataCompany = () => {
        axios.get('http://localhost:8080/jobs/company/' + this.state.search)
            .then((response) => {
                this.setState({ users: response.data })
            });
    }

    render() {

        return (
            <div>
                <HeaderComponent />
                <div className="container">
                    <div>
                        <h1 className="text-center m-2"> Welcome To Our Job Portal</h1>
                        <h2 className="text-center1 m-2"> Here are the list of Jobs Available rightnow</h2>
                        <br></br>
                        <div style={{ "float": "left" }}>
                            <InputGroup size="lg">
                                <FormControl style={{ marginLeft: "200px" }} value={this.state.search} onChange={this.searchChange} placeholder="Search" className=" mr-sm-1" />
                                <button className="btn btn-outline-info" style={{ marginRight: "5px" }} onClick={this.searchDataLocation}>Search By Location</button>
                                <button className="btn btn-outline-info" style={{ marginLeft: "0px" }} onClick={this.searchDataDesignation}>Search By Designation</button>
                                <button className="btn btn-outline-info" style={{ marginLeft: "5px" }} onClick={this.searchDataCompany}>Search By Company</button>

                            </InputGroup>
                            <br></br>
                        </div>
                        <table className="table table-dark table-hover">
                            <thead>
                                <tr>
                                    <th> Job Id</th>
                                    <th> Company</th>
                                    <th> Designation</th>
                                    <th> Location</th>
                                    <th> Experience</th>
                                    <th> Apply for Job</th>

                                </tr>

                            </thead>
                            <tbody>
                                {
                                    this.state.users.map(
                                        user =>
                                            <tr key={user.jid}>
                                                <td> {user.jid}</td>
                                                <td> {user.jcompany}</td>
                                                <td> {user.jdescription}</td>
                                                <td> {user.jlocation}</td>
                                                <td> {user.experience}</td>
                                                <td>
                                                    <button style={{ marginLeft: "10px" }} className="btn btn-outline-danger disabled" data-toggle="tooltip" data-placement="top" title="Login First">Apply </button>
                                                    <button style={{ marginLeft: "10px" }} onClick={() => this.viewJobDetails(user.jid)} className="btn btn-outline-info">Details </button>
                                                </td>
                                            </tr>

                                    )

                                }

                            </tbody>
                        </table>

                    </div>
                </div>
            </div>
        )
    }
}

export default AllJobsComponent