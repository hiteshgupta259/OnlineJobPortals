import { Component } from "react";
import HeaderComponent from "../CommonComponents/HeaderComponent";

class CardComponent extends Component {
    constructor(props) {
        super(props);
        this.onPayment = this.onPayment.bind(this);
    }
    onPayment() {
        this.props.history.push('/addPayment');
    }
    render() {
        return (
            <div>
                <HeaderComponent />
                <div className="card-section">
                    <div className="product-card">
                        <div className="product-image">
                            <img src="https://images.pexels.com/photos/590014/pexels-photo-590014.jpeg" alt="" />
                        </div>
                        <div className="product-details">
                            <div className="product-details-body">
                                <span className="product-title">The Complete Digital Marketing Course</span>
                                <span className="product-small-desc">Master Digital Marketing Strategy, Social Media Marketing, SEO, YouTube, Email, Facebook Marketing, Analytics & More!</span>
                                <div className="rating">
                                    <div>5.0</div>
                                    <div>
                                        <span className="rating-star ">&#9733;</span>
                                        <span className="rating-star">&#9733;</span>
                                        <span className="rating-star">&#9733;</span>
                                        <span className="rating-star">&#9733;</span>
                                        <span className="rating-star">&#9733;</span>
                                    </div>
                                </div>
                            </div>
                            <div className="product-details-footer">
                                <span className="product-price"><span>&#8377;</span> 2099/-</span>
                                <div>
                                    <button type="button" className="payment-button" onClick={this.onPayment}>Payment</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="product-card">
                        <div className="product-image">
                            <img src="https://images.pexels.com/photos/177598/pexels-photo-177598.jpeg" alt="" />
                        </div>
                        <div className="product-details">
                            <div className="product-details-body">
                                <span className="product-title">Data Science Courses and Certification</span>
                                <span className="product-small-desc">Data Science is determined as a combination of tools, algorithms, mathematics, business insight and machine learning techniques.</span>
                                <div className="rating">
                                    <div>4.0</div>
                                    <div>
                                        <span className="rating-star ">&#9733;</span>
                                        <span className="rating-star">&#9733;</span>
                                        <span className="rating-star">&#9733;</span>
                                        <span className="rating-star">&#9733;</span>
                                    </div>
                                </div>
                            </div>
                            <div className="product-details-footer">
                                <span className="product-price"><span>&#8377;</span> 4899/-</span>
                                <div>
                                    <button type="button" className="payment-button" onClick={this.onPayment}>Payment</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="product-card">
                        <div className="product-image">
                            <img src="https://cdn.pixabay.com/photo/2017/01/22/22/11/cloud-computing-2001090_1280.jpg" alt="" />
                        </div>
                        <div className="product-details">
                            <div className="product-details-body">
                                <span className="product-title">Cloud Computing Professional</span>
                                <span className="product-small-desc">The cloud computing training will further help you to prepare for numerous certification examinations like Azure Administrator, Cloud Architect, Azure Solution Architect, etc.</span>
                                <div className="rating">
                                    <div>4.5</div>
                                    <div>
                                        <span className="rating-star ">&#9733;</span>
                                        <span className="rating-star">&#9733;</span>
                                        <span className="rating-star">&#9733;</span>
                                        <span className="rating-star">&#9733;</span>
                                    </div>
                                </div>
                            </div>
                            <div className="product-details-footer">
                                <span className="product-price"><span>&#8377;</span> 5199/-</span>
                                <div>
                                    <button type="button" className="payment-button" onClick={this.onPayment}>Payment</button>
                                </div>
                            </div>
                        </div>
                    </div><br /><br /><br />
                </div>
            </div>
        )
    }
}
export default CardComponent