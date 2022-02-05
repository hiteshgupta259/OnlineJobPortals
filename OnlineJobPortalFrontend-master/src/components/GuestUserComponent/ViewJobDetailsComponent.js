import React from 'react';
import GuestUserService from '../../services/GuestUserService';
import HeaderComponent from '../CommonComponents/HeaderComponent';


class ViewJobDetailsComponent extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            id: this.props.match.params.jid,
            user: {}
        }
    }

    componentDidMount() {
        GuestUserService.getJobDetailsById(this.state.id).then((response) => {
            this.setState({ user: response.data });
        })
    }

    render() {
        return (
            <div>
                <HeaderComponent />
                <div className="container">
                    <div>
                        <br></br>
                        <div class="card mb-3 offset-md-3" style={{ width: '500px', height: '555px', backgroundColor: '#C0C0C0' }}>
                            <div class="row g-0">
                                <div class="col-md-10">
                                    <img src="https://source.unsplash.com/500x300/?laptop,code" alt="..." />
                                </div>
                                <div class="col-md-12">
                                    <div class="card-body">
                                        <h4 class="card-title">Designation : {this.state.user.jdescription}</h4>
                                        <hr></hr>
                                        <p class="card-text">Location : {this.state.user.jlocation}</p>
                                        <hr></hr>
                                        <p class="card-text">Company Name : {this.state.user.jcompany}</p>
                                        <hr></hr>
                                        <p class="card-text">Experience Required : {this.state.user.experience}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ViewJobDetailsComponent