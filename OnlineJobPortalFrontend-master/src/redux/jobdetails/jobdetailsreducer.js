import * as job from './jobdetailstype'

const initialState = {
    loading: false,
    jobs: [],
    message: ''
}

const jobdetailsreducer = (state = initialState, action) => {
    switch (action.type) {
        //Post Job reducer
        case job.POST_JOB_REQUEST:
            return {
                loading: true,
                message: '',
            }
        case job.POST_JOB_SUCCESS:
            return {
                loading: false,
                message: action.payload,
            }
        case job.POST_JOB_FAILURE:
            return {
                loading: false,
                message: "Error occured while adding. \n Please try again."
            }
        //Fetch Job reducer
        case job.FETCH_JOBS_REQUEST:
            return {
                ...state,
                loading: true,
                message: ''
            }
        case job.FETCH_JOBS_SUCCESS:
            return {
                loading: false,
                jobs: action.payload,
                message: ''
            }
        case job.FETCH_JOBS_FAILURE:
            return {
                loading: false,
                message: action.payload
            }
        //Delete Job reducer
        case job.DELETE_JOB_REQUEST:
            return {
                loading: true,
                message: '',
            }
        case job.DELETE_JOB_SUCCESS:
            return {
                loading: false,
                jobs: action.payload
            }
        case job.DELETE_JOB_FAILURE:
            return {
                loading: false,
                message: action.payload
            }
        //Update Job reducer
        case job.UPDATE_JOB_REQUEST:
            return {
                loading: true,
                message: '',
            }
        case job.UPDATE_JOB_SUCCESS:
            return {
                loading: false,
                job: [],
                message: action.payload
            }
        case job.UPDATE_JOB_FAILURE:
            return {
                loading: false,
                message: action.payload
            }
        //Fetch Job by id reducer
        case job.FETCH_JOB_BY_ID_REQUEST:
            return {
                loading: true,
                message: ''
            }
        case job.FETCH_JOB_BY_ID_SUCCESS:
            return {
                loading: false,
                job: action.payload,
                message: ''
            }
        case job.FETCH_JOB_BY_ID_FAILURE:
            return {
                loading: false,
                error: action.payload
            }
        default: return state
    }
}

export default jobdetailsreducer