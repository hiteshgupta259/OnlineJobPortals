import React, { Component } from 'react'
import { Carousel } from 'react-bootstrap'
import JobProviderHeaderComponent from './JobProviderHeaderComponent'
import '../../css/CssDesigns.css'

export class JobProviderHomeComponent extends Component {
    postJob = () => {
        this.props.history.push('/postJob')
    }

    render() {
        localStorage.setItem("id", this.props.match.params.id)
        console.log(localStorage.getItem("id"))
        return (
            <div>
                <JobProviderHeaderComponent />
                <div className="postbackground">
                    <div className="container">
                        <br />
                        <Carousel>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src="/JobProvider.jpg"
                                    alt="First slide"
                                />
                                <Carousel.Caption>
                                    <h3 className="text-secondary"><i>Welcome to Job Provider Portal</i></h3>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src="/PostJob.jpg"
                                    alt="Second slide"
                                    onClick={this.postJob}
                                />

                                <Carousel.Caption>
                                    <h3 className="text-dark"><i>Want to add job click on this image</i></h3>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src="/JobProvider3.jpg"
                                    alt="Third slide"
                                />

                                <Carousel.Caption>
                                    <h3>India's Most Trusted Job Portal</h3>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </div>
                </div>
            </div>
        )
    }
}

export default JobProviderHomeComponent
