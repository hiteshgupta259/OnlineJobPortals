import axios from 'axios';

const Details_API_BASE_URL = "http://localhost:8080/adminDetails";

class AdminLoginService {

    getAllDetails(){
        return axios.get(`${Details_API_BASE_URL}/getDetails`);
    }

    getAllJobs() {
        return axios.get('http://localhost:8080/jobDetails/allJobs')
    }

    getAllJobProviders() {
        return axios.get('http://localhost:8080/jobProvider')
    }

    
}
export default new AdminLoginService();