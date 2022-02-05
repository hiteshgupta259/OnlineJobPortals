import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faList, faPlusSquare, faUserEdit, faSignOutAlt } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

class JobProviderHeaderComponent extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             jp_id: localStorage.getItem("id")
        }
    }
    

    render() {
        return (
            <div>
                <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div class="container-fluid">
                        <a class="navbar-brand">
                            <img
                                src="/logo.PNG"
                                width="40"
                                height="40"
                                className="d-inline-block align-top"
                                alt="Portal"
                            />
                        </a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarNav">
                            <ul class="navbar-nav">
                                <li class="nav-item">
                                    <Link class="nav-link " aria-current="page" to={"/providerHome/"+this.state.jp_id} ><FontAwesomeIcon icon={faHome} />Home</Link>
                                </li>
                                <li class="nav-item">
                                    <Link class="nav-link" to="/postJob"><FontAwesomeIcon icon={faPlusSquare} />Post Job</Link>
                                </li>
                                <li class="nav-item">
                                    <Link class="nav-link" to="/providerJobs"><FontAwesomeIcon icon={faList} />List Jobs</Link>
                                </li>
                            </ul>
                            <ul class="navbar-nav ml-auto">
                                <li class="nav-item">
                                    <Link class="nav-link" to={"/view-provider/"+this.state.jp_id} ><FontAwesomeIcon icon={faUserEdit} color="white" />View & Edit Profile</Link>
                                </li>
                                <li class="nav-item">
                                    <Link class="nav-link" to="/"><FontAwesomeIcon icon={faSignOutAlt} color="" />Logout</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>


        )
    }
}

//localstorage.clear()
export default JobProviderHeaderComponent
