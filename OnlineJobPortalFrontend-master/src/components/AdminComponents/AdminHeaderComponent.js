import React from 'react'
//import App from './App.css';
import adminphoto from '../../img/adminphoto.jpg';
import { Grid, Row, Col } from "react-bootstrap";

class AdminHeaderComponent extends React.Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <div style={{ backgroundColor: "lightgray" }}>
                <header>
                    <div>
                        <img src={adminphoto} alt="Responsive image" height="300" width="100%" />
                    </div>
                </header>
                <br>
                </br>

                <div style={{ padding: " 100px" }} className="container">

                    <Row className="show-grid">
                        <Col lg={12}>
                            <Row className="Show-grid">

                                <Col md={4}>
                                    <div style={{ padding: "0px 40px" }} >
                                        <a href="/adminJobProvider"><button style={{ width: "200px", height: "40px" }} className="btn btn-danger"  >JOB Providers DETAILS</button></a>
                                    </div>
                                </Col>
                                <Col md={4}>
                                    <div style={{ padding: "0px 40px" }}>
                                        <a href="/adminJobs"><button style={{ width: "200px", height: "40px" }} className="btn btn-danger">Posted JOBS DETAILS</button></a>
                                    </div>
                                </Col>
                                <Col md={4}>
                                    <div style={{ padding: "0px 40px" }}>
                                        <a href="/adminJobSeeker"><button style={{ width: "200px", height: "40px" }} className="btn btn-danger">Job Seekers DETAILS</button></a>
                                    </div>
                                </Col>
                                <Col md={4}>
                                    <div style={{ padding: "0px 40px" }}>
                                        <a href="/"><button style={{ width: "200px", height: "40px" }} className="btn btn-danger">Logout</button></a>
                                    </div>
                                </Col>


                            </Row>
                        </Col>
                    </Row>

                </div>
            </div>


        );
    }

}

export default AdminHeaderComponent;