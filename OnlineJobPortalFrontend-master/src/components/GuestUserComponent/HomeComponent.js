import React, { Component } from 'react'
import { Carousel } from "react-bootstrap";
import HeaderComponent from '../CommonComponents/HeaderComponent';

class HomeComponent extends Component {


    render() {

        return (
            <div>
                <HeaderComponent />
                <div>
                    <img src="HomeImage.png" style={{ width: '100%', height: '5cm' }} alt="..." />
                    <hr></hr>

                <div className= "container">
                    <Carousel>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="https://source.unsplash.com/1400x500/?computers"
                                alt="First slide"
                            />
                            <Carousel.Caption>
                                <h3>Thousands Of Jobs To Choose From</h3>
                                {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="https://source.unsplash.com/1400x500/?computer"
                                alt="Second slide"
                            />

                            <Carousel.Caption>
                                <h3>More Than Ten Thousands Students Placed</h3>
                                {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="https://source.unsplash.com/1400x500/?laptop"
                                alt="Third slide"
                            />

                            <Carousel.Caption>
                                <h3>India's Most Trusted Job Portal</h3>
                                {/* <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </div>
                <hr></hr>
                </div>
                <div class="mysection greybg" style={{ background: '#fff', margin: '20px' }}>
                    <div class="container">
                        <div class="col-md-12 col-sm-12 col-xs-12">
                            <div class="row">

                                <div class="col-md-2">
                                    <center> <img class="counter_image" style={{ width: '30%' }} src="https://www.tnprivatejobs.tn.gov.in/asset/images/candidates/businessman.png" alt="...." /></center>
                                    <h2>2555</h2>
                                    <p>Companies</p>
                                </div>
                                <div class="col-md-2">
                                    <center> <img class="counter_image" style={{ width: '30%' }} src="https://www.tnprivatejobs.tn.gov.in/asset/images/candidates/sector.png" alt="...." /> </center>
                                    <h2>25</h2>
                                    <p>Sectors</p>
                                </div>

                                <div class="col-md-2">

                                    <center><img class="counter_image" style={{ width: '30%' }} src="https://www.tnprivatejobs.tn.gov.in/asset/images/candidates/folder.png" alt="...." /></center>

                                    <h2>27,444</h2>
                                    <p class="bi bi-star">Vacancies</p>
                                </div>

                                <div class="col-md-2">
                                    <center><img class="counter_image" style={{ width: '30%' }} src="https://www.tnprivatejobs.tn.gov.in/asset/images/candidates/group.png" alt="...." /></center>
                                    <h2>29,847</h2>
                                    <p>Job Seekers</p>
                                </div>

                                <div class="col-md-2">
                                    <center> <img class="counter_image" style={{ width: '30%' }} src="https://www.tnprivatejobs.tn.gov.in/asset/images/candidates/offers.png" alt="...." /> </center>
                                    <h2>11,261</h2>
                                    <p>Placements Offered </p>
                                </div>


                                <div class="col-md-2">
                                    <center> <img class="counter_image" style={{ width: '30%' }} src="https://www.tnprivatejobs.tn.gov.in/asset/images/candidates/placed.png" alt="...." /> </center>
                                    <h2>9,414</h2>
                                    <p>Job Seekers Placed</p>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>

                <br></br>

                <br></br>

                <div class="mysection howitwrap">
                    <div class="container ">

                        <div class="titleTop">
                            <h3 className="text-center" >How It <span style={{ color: '#60ceec' }}>Works?</span></h3>
                        </div>
                        <br></br>
                        <ul class="howlist row">

                            <li class="col-md-4 col-sm-4">
                                <center>
                                    <img src="https://www.tnprivatejobs.tn.gov.in/asset/images/add-account.png" alt="" /> </center>
                                <h4>Create an Account</h4>
                                <p>Sign up by creating an account with required details in order to avail our services. The optimal feeding of correct information will help us fine tune your job search. </p> </li>
                            <li class="col-md-4 col-sm-4">
                                <center>
                                    <img src="https://www.tnprivatejobs.tn.gov.in/asset/images/job-search.png" alt="" /></center>
                                <h4>Search Desired Job</h4>
                                <p>Providing you with our wide database of job opportunities notified by numerous companies. You can add filters to search your desired jobs and still have a list of options to choose from. </p></li>
                            <li class="col-md-4 col-sm-4">
                                <center>
                                    <img src="https://www.tnprivatejobs.tn.gov.in/asset/images/resume.png" alt="" /></center>
                                <h4>Apply For Job</h4>
                                <p>Once you narrow down with the right choices, get ready to apply for job and gear up for the recruitment. </p></li>
                        </ul>
                    </div>
                </div>

            </div>



        )
    }
}

export default HomeComponent


