import React, { Component } from 'react'
import { Navbar, Dropdown } from "react-bootstrap";

class HeaderComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    contactus() {
        this.props.history.push(`/contact-us/`);
    }

    render() {
        //if (localStorage.getItem("role") === "jobprovider") {
            return (
                <div>
                    <header>
                        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                            <div class="container-fluid">
                                <Navbar.Brand href="/">
                                    <img
                                        src="/logo.PNG"
                                        width="40"
                                        height="40"
                                        className="d-inline-block align-top"

                                    />
                                </Navbar.Brand>

                                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                                    <span class="navbar-toggler-icon"></span>
                                </button>
                                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                                    <div class="navbar-nav">
                                        <a class="nav-link active" aria-current="page" href="/allJobs">All Jobs</a>
                                        <a class="nav-link" href="/payments">Services</a>
                                        <a class="nav-link" href="/about-us">About</a>
                                        <a class="nav-link" onClick={() => this.contactus()} href="/contact-us">Contact</a>
                                        <Dropdown style={{ marginLeft: "1000px" }}>
                                            <Dropdown.Toggle variant="success" id="dropdown-basic">
                                                Login
                                        </Dropdown.Toggle>

                                            <Dropdown.Menu>
                                                <Dropdown.Item href="/adminLogin">Login as Admin</Dropdown.Item>
                                                <Dropdown.Item href="/login">Login As Job Provider</Dropdown.Item>
                                                <Dropdown.Item href="/seekerlogin">Login As Job Seeker</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>

                                        <Dropdown style={{ marginLeft: "10px" }}>
                                            <Dropdown.Toggle variant="success" id="dropdown-basic">
                                                Register
                                        </Dropdown.Toggle>

                                            <Dropdown.Menu>
                                                <Dropdown.Item href="/registrationOrEdit/_registration">Register as Job Provider</Dropdown.Item>
                                                <Dropdown.Item href="/JobSeekerRegistration">Register as Job Seeker</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                        {/* <button class="btn btn-outline-info" style={{marginLeft: "1000px"}} type="button">Login</button> */}
                                        <br></br>
                                    </div>
                                </div>
                            </div>
                        </nav>
                    </header>
                </div>
            )
        // }
        // else {
        //     return (
        //         <h2>Hello</h2>
        //     )
        // }
    }
}

export default HeaderComponent