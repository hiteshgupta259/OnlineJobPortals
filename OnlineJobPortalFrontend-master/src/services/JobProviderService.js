import axios from 'axios';

const JOBPROVIDER_API_BASE_URL = "http://localhost:8080/jobProvider";

class JobProviderService{

    getAllJobProviders(){
        return axios.get(JOBPROVIDER_API_BASE_URL);
    }

    saveJobProvider(jobProvider){
        return axios.post(`${JOBPROVIDER_API_BASE_URL}/registration`, jobProvider);
    }

    findJobProviderById(jp_id){
        return axios.get(`${JOBPROVIDER_API_BASE_URL}/${jp_id}`);
    }

    updateJobProvider(jobProvider, jp_id){
        return axios.put(JOBPROVIDER_API_BASE_URL+'/updateProfile/'+jp_id, jobProvider);
    }

    loginJobProvider(jobProvider){
        return axios.post(`${JOBPROVIDER_API_BASE_URL}/login`);
    }

}

export default new JobProviderService()