import * as job from './jobdetailstype'
import JobDetailsService from '../../services/JobDetailsService'

export const postRequest = () => {
    return {
        type: job.POST_JOB_REQUEST
    }
}

export const postSuccess = payload => {
    return {
        type: job.POST_JOB_SUCCESS,
        payload
    }
}

export const postFailure = payload => {
    return {
        type: job.POST_JOB_FAILURE,
        payload
    }
}

export const postJobDetails = (jobDetails) => {
    return (dispatch) => {
        dispatch(postRequest())
        JobDetailsService.postJobDetails(jobDetails)
            .then(response => {
                const message = response.data
                dispatch(postSuccess(message))
            })
            .catch(error => {
                // error.message is the error message
                dispatch(postFailure(error.message))
            })
    }
}

export const fetchRequest = () => {
    return {
        type: job.FETCH_JOBS_REQUEST
    }
}

export const fetchSuccess = payload => {
    return {
        type: job.FETCH_JOBS_SUCCESS,
        payload
    }
}

export const fetchFailure = payload => {
    return {
        type: job.FETCH_JOBS_FAILURE,
        payload
    }
}

export const fetchAllJobs = () => {
    return (dispatch) => {
        dispatch(fetchRequest())
        JobDetailsService.fetchAllJobs()
            .then(response => {
                const jobs = response.data;
                dispatch(fetchSuccess(jobs))
            })
            .catch(error => {
                dispatch(fetchFailure(error.message))
            })
    }
}

export const updateRequest = () => {
    return {
        type: job.UPDATE_JOB_REQUEST
    }
}

export const updateSuccess = payload => {
    return {
        type: job.UPDATE_JOB_SUCCESS,
        payload
    }
}

export const updateFailure = payload => {
    return {
        type: job.UPDATE_JOB_FAILURE,
        payload
    }
}

export const updateJob = (id, details) => {
    console.log(id + details)
    return (dispatch) => {
        dispatch(updateRequest())
        JobDetailsService.updateJob(id, details)
            .then(response => {
                const message = response.data;
                dispatch(updateSuccess(message))
            })
            .catch(error => {
                dispatch(updateFailure(error.message))
            })
    }
}

export const deleteRequest = () => {
    return {
        type: job.DELETE_JOB_REQUEST
    }
}

export const deleteSuccess = payload => {
    return {
        type: job.DELETE_JOB_SUCCESS,
        payload
    }
}

export const deleteFailure = payload => {
    return {
        type: job.DELETE_JOB_FAILURE,
        payload
    }
}

export const deleteJob = (id) => {
    return (dispatch) => {
        dispatch(deleteRequest())
        JobDetailsService.deleteJob(id)
            .then(response => {
                const message = response.data;
                dispatch(deleteSuccess(message))
            })
            .catch(error => {
                dispatch(deleteFailure(error.message))
            })
    }
}

export const fetchByIdRequest = () => {
    return {
        type: job.FETCH_JOB_BY_ID_REQUEST
    }
}

export const fetchByIdSuccess = payload => {
    return {
        type: job.FETCH_JOB_BY_ID_SUCCESS,
        payload
    }
}

export const fetchByIdFailure = payload => {
    return {
        type: job.FETCH_JOB_BY_ID_FAILURE,
        payload
    }
}

export const getJobById = (id) => {
    return (dispatch) => {
        dispatch(fetchByIdRequest())
        JobDetailsService.getJobById(id)
            .then(response => {
                const message = response.data;
                dispatch(fetchByIdSuccess(message))
            })
            .catch(error => {
                dispatch(fetchFailure(error.message))
            })
    }
}