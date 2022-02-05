import React, { Component } from "react";
import { Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons'

class JobSeekerHeaderComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    logout = (e) => {
        e.preventDefault()
        this.props.history.push('/')
    }

    render() {
        return (
            <div>
                <header>
                    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                        <div class="container-fluid">
                            <Navbar.Brand href="/seekerHome">
                                <img
                                    src="logo.PNG"
                                    width="40"
                                    height="40"
                                    className="d-inline-block align-top"
                                />
                            </Navbar.Brand>

                            <button
                                class="navbar-toggler"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#navbarNavAltMarkup"
                                aria-controls="navbarNavAltMarkup"
                                aria-expanded="false"
                                aria-label="Toggle navigation"
                            >
                                <span class="navbar-toggler-icon"></span>
                            </button>
                            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                                <div class="navbar-nav">
                                    <a class="nav-link active" aria-current="page" href="/seekerJobs">
                                        All Jobs
                  </a>
                                    <a class="nav-link" href="/payments">
                  </a>
                                    <a class="nav-link" href="/about-us">
                  </a>
                  <ul style={{ marginRight: '1200px' }}></ul>
                  <li class="nav-item">
                                    <Link class="nav-link" to="/"><FontAwesomeIcon icon={faSignOutAlt} color="" />Logout</Link>
                                </li>
                                    <br></br>
                                </div>
                            </div>
                        </div>
                    </nav>
                </header>
            </div>
        );
    }
}

export default JobSeekerHeaderComponent;
