import axios from 'axios';

const PAYMENT_API_BASE_URL = "http://localhost:8080/payment";
class PaymentService {
    
    
    createPayment(payment){
        return axios.post(PAYMENT_API_BASE_URL,payment);
    }
}
 
export default new PaymentService();