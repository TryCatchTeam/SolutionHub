import { combineReducers } from "redux";
import leads from './leads';
import errors from './errors';
import messages from './messages';
import auth from './auth';
import jobs from "./jobs";

export default combineReducers({
    jobs,
    messages,
    errors,
    auth
});