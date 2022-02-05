import axios from 'axios'

const JOBPROVIDER_API_BASE_URL = "http://localhost:8080/jobDetails";

class JobDetailsService {

    postJobDetails(JobDetails) {
        return axios.post(`${JOBPROVIDER_API_BASE_URL}/addJob`, JobDetails);
    }

    fetchAllJobs() {
        return axios.get(`${JOBPROVIDER_API_BASE_URL}/allJobs`)
    }

    deleteJob(id) {
        return axios.delete(`${JOBPROVIDER_API_BASE_URL}/deleteJob/` + id)
    }

    updateJob(id, details) {
        return axios.patch(`${JOBPROVIDER_API_BASE_URL}/updateJobLastDateById/` + id, details)
    }

    getJobById(id) {
        return axios.get(`${JOBPROVIDER_API_BASE_URL}/viewJobById/${id}`)
    }
}

export default new JobDetailsService()