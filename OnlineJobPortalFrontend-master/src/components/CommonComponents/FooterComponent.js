import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithubSquare, faFacebookSquare, faTwitterSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons'


class FooterComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    aboutus() {
        this.props.history.push(`/about-us/`);
    }

    render() {
        return (
            <div>
                <footer className="footer">
                    <div class="bd-footer-links">
                        <a href="https://github.com/"><FontAwesomeIcon icon={ faGithubSquare } size='2x' /></a>
                        <a href="https://www.facebook.com/" className="ml-2"><FontAwesomeIcon icon={ faFacebookSquare } size='2x' /></a>
                        <a href="https://twitter.com/?lang=en" className="ml-2"><FontAwesomeIcon icon={ faTwitterSquare } size='2x' /></a>
                        <a href="https://in.linkedin.com/" className="ml-2"><FontAwesomeIcon icon={ faLinkedin } size='2x' /></a>
                    </div>
                    <span className="text-dark">All Rights Reserved 2020 @Group 4</span>
                    <p>Made in India</p>
                </footer><br/><br/><br/><br/>
            </div>
        )
    }
}

export default FooterComponent


