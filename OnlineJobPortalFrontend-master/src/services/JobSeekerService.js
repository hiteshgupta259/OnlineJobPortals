import axios from 'axios';

const SEEKER_API_BASE_URL = "http://localhost:8080/jobseekerregistration/jobseeker";
const SEEKER_APPLY_URL = "http://localhost:8080/jobDetails"

class JobSeekerService {

    getAllJobSeekerRegistration(){
        return axios.get(`${SEEKER_API_BASE_URL}/viewAll`);
    }

    createSeeker(seeker){
        return axios.post(`${SEEKER_API_BASE_URL}/addJobseeker`, seeker);
    }

    getJobs(){
        return axios.get(`${SEEKER_APPLY_URL}/allJobs`);
    }
    applyJob(apply){
        return axios.post(`${SEEKER_APPLY_URL}/apply`, apply);
    }
   
}

export default new JobSeekerService()