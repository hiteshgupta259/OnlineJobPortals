import React, { Component } from 'react'
import HeaderComponent from './HeaderComponent'

class AboutUsComponent extends Component {
    render() {
        return (
            <div>
                <HeaderComponent />
                <div className="container">
                    <br></br>
                    <h3> About US</h3>
                    <p>Learn more about the team maintaining this project, how and why the project started.</p>
                    <hr></hr>
                    <h3> Team</h3>
                    <p>
                        Our Job Portal is maintained by a small team of developers who are undergoing training in front end and backend.
                        We’re actively looking to grow this team and would love to hear from you about our work and what improvments can be done in future
                    </p>
                    <hr></hr>

                    <h3>Get involved</h3>
                    <p>Get involved with Our Project development by contacting us and giving us your valuable feedback.
                        We would love to here from you</p>
                    <hr></hr>

                    <h3> Our Team</h3>
                    <hr></hr>
                    <div class="list-group mb-3">
                        <a class="list-group-item list-group-item-action d-flex align-items-center" href="">
                            <img src="2.jpg" alt="..." width="32" height="32" class="rounded me-2" />
                            <span>
                                <strong> Hitesh Gupta</strong>
                            </span>
                        </a>

                        <a class="list-group-item list-group-item-action d-flex align-items-center" href="">
                            <img src="2.jpg" alt="..." width="32" height="32" class="rounded me-2" />
                            <span>
                                <strong> Rohit Varma</strong>
                            </span>
                        </a>

                        <a class="list-group-item list-group-item-action d-flex align-items-center" href="">
                            <img src="2.jpg" alt="..." width="32" height="32" class="rounded me-2" />
                            <span>
                                <strong> Namrata Yadav</strong>
                            </span>
                        </a>

                        <a class="list-group-item list-group-item-action d-flex align-items-center" href="">
                            <img src="2.jpg" alt="..." width="32" height="32" class="rounded me-2" />
                            <span>
                                <strong> Kavya jain</strong>
                            </span>
                        </a>

                        <a class="list-group-item list-group-item-action d-flex align-items-center" href="">
                            <img src="2.jpg" alt="..." width="32" height="32" class="rounded me-2" />
                            <span>
                                <strong> Radha Yelikar</strong>
                            </span>
                        </a>


                        <a class="list-group-item list-group-item-action d-flex align-items-center" href="">
                            <img src="2.jpg" alt="..." width="32" height="32" class="rounded me-2" />
                            <span>
                                <strong> Meet Maisheri</strong>
                            </span>
                        </a>

                        <a class="list-group-item list-group-item-action d-flex align-items-center" href="">
                            <img src="2.jpg" alt="..." width="32" height="32" class="rounded me-2" />
                            <span>
                                <strong> Tejal Kubde</strong>
                            </span>
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}

export default AboutUsComponent
