import React, { Component } from 'react';
import background from '../../img/payment1.png'
import PaymentService from '../../services/PaymentService ';
import HeaderComponent from '../CommonComponents/HeaderComponent';

class CreatePaymentComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: "",
            paymentMethod: "",
            expDate: "",
            cardNo: "",
            cvv: "",
            usernameError: "",
            paymentMethodError: "",
            expDateError: "",
            cardNoError: "",
            cvvError: ""
        }
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangeMethod = this.onChangeMethod.bind(this);
        this.onChangeExpDate = this.onChangeExpDate.bind(this);
        this.onChangeCardNo = this.onChangeCardNo.bind(this);
        this.onChangeCvv = this.onChangeCvv.bind(this);
        this.onSavePayment = this.onSavePayment.bind(this);
    }

    validate = () => {
        let usernameError = "";
        let paymentMethodError = "";
        let expDateError = "";
        let cardNoError = "";
        let cvvError = ""

        if (!this.state.username || !this.state.username.includes('@')) {
            usernameError = "Please Enter valid email";
        }

        if (!this.state.paymentMethod) {
            paymentMethodError = "Please Choose valid Payment Method";
        }

        if (!this.state.expDate) {
            expDateError = "Please Enter valid Expiry Date";
        }

        if (!this.state.cardNo || !this.state.cardNo.match("4[0-9]{12}(?:[0-9]{3})?$")) {
            cardNoError = "Please Enter valid Card No.";
        }

        if (!this.state.cvv || !this.state.cvv.match("^[0-9]{3,4}$")) {
            cvvError = "Please Enter valid cvv";
        }

        if (usernameError || expDateError || cardNoError || cvvError) {
            this.setState({ usernameError, expDateError, cardNoError, cvvError });
            return false;
        }
        return true;

    };

    onChangeUsername = (e) => {
        this.setState({ username: e.target.value });
    }

    onChangeMethod = (e) => {
        this.setState({ paymentMethod: e.target.value });
    }

    onChangeExpDate = (e) => {
        this.setState({ expDate: e.target.value })
    }

    onChangeCardNo = (e) => {
        this.setState({ cardNo: e.target.value })
    }

    onChangeCvv = (e) => {
        this.setState({ cvv: e.target.value })
    }

    onSavePayment = (e) => {
        e.preventDefault();
        const isValid = this.validate();

        if (isValid) {
            alert("Payment Details inserted Successfully!");

            let payment = {
                username: this.state.username,
                paymentMethod: this.state.paymentMethod,
                expDate: this.state.expDate,
                cardNo: this.state.cardNo,
                cvv: this.state.cvv
            };
            console.log(payment)
            PaymentService.createPayment(payment).then(res => {
                this.props.history.push('/payments');

            });
        }

    }

    cancel() {
        this.props.history.push('/payments');
    }

    render() {
        return (
            <div>
                <HeaderComponent />
                <div className="container paymentForm">
                    <div className="py-4" style={{ backgroundImage: `url(${background})` }}>
                        < div className="card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center">Add Payment</h3>
                            <div className="card-body">
                                <form onSubmit={this.handleSubmit} >
                                    <div className="form-group">
                                        <label>Username:</label>
                                        <input type="email" placeholder="Username" name="username" className="form-control"
                                            value={this.state.username} onChange={this.onChangeUsername} />
                                        <div style={{ fontSize: 12, color: "red" }}>
                                            {this.state.usernameError}
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label>Method: </label>
                                        <select className="form-control" value={this.state.value} onChange={this.onChangeMethod}>
                                            <option value=""></option>
                                            <option value="Credit Card">Credit Card</option>
                                            <option value="Debit Card" >Debit Card</option>
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label>Expiry Date:</label>
                                        <input placeholder="MM/YY" date-format="DD/YY" type="text" name="expDate" min="01/21"
                                            max="12/30" className="form-control" value={this.state.expDate} onChange={this.onChangeExpDate} />
                                        <div style={{ fontSize: 12, color: "red" }}>
                                            {this.state.expDateError}
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label>Card No:</label>
                                        <input placeholder="Card No" name="cardNo" className="form-control"
                                            value={this.state.cardNo} onChange={this.onChangeCardNo} />
                                        <div style={{ fontSize: 12, color: "red" }}>
                                            {this.state.cardNoError}
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label>CVV: </label>
                                        <input placeholder="CVV" name="cvv" className="form-control"
                                            value={this.state.cvv} onChange={this.onChangeCvv} />
                                        <div style={{ fontSize: 12, color: "red" }}>
                                            {this.state.cvvError}
                                        </div>
                                    </div>
                                    <div className="form-group mt-4">
                                        <button type="submit" className="btn btn-success px-4 mr-3" onClick={this.onSavePayment}>Save</button>
                                        <button className="btn btn-primary px-4" style={{ marginLeft: "10px" }} onClick={this.cancel.bind(this)}>Cancel</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CreatePaymentComponent;