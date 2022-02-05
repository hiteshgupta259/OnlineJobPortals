import axios from 'axios'


const USERS_REST_API_URL = 'http://localhost:8080/jobs';

class GuestUserService {

    getJobs(){
        return axios.get(USERS_REST_API_URL + '/getAllJobs');
    }

    getJobDetailsById(jid){
        return axios.get(USERS_REST_API_URL + '/getAllJobs/' + jid);
    }

}

export default new GuestUserService();