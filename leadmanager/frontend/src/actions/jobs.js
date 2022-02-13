import axios from "axios";
import { createMessage, returnErrors } from './messages';

import { GET_JOBS, DELETE_JOB, ADD_JOB, GET_CREATOR, GET_ERRORS } from "./types";
import { tokenConfig } from "./auth";

// GET JOBS
export const getJobs = () => (dispatch, getState) => {
    axios.get('/api/jobs/', tokenConfig(getState))
        .then(res => {
            dispatch({
                type: GET_JOBS,
                payload: res.data
            });
        }).catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
}


// DELETE JOB
export const deleteJob = (id) => (dispatch, getState) => {
    axios.delete(`/api/jobs/${id}/`, tokenConfig(getState))
        .then(res => {
            dispatch(createMessage({ deleteJob: "Job Deleted" }));
            dispatch({
                type: DELETE_JOB,
                payload: id
            });
        }).catch(err => console.log(err));
}

// ADD JOB
export const addJob = (lead) => (dispatch, getState) => {
    axios.post("/api/jobs/", lead, tokenConfig(getState))
        .then(res => {
            dispatch(createMessage({ addJob: "Job Added" }));
            dispatch({
                type: ADD_JOB,
                payload: res.data
            });
        }).catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
}
