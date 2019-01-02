import  axios from "axios";

import * as actionTypes from "../constants/action-types";
import { redirectToLogin, redirectToHome } from "./redirectActions";

export const addRecord = (record) => {
    return ({
        type: actionTypes.ADD_RECORD,
        payload: record
    });
}

//async function to post record
export const postAddRecordRequest = (record) =>{
    return (dispatch) => {
        dispatch(showSpinner());
        axios.post("/assest",record).then((payload)=>{
                dispatch(addRecord(payload.data));
                dispatch(hideSpinner());
                dispatch(postRecordSuccessfull());
        }).catch((err)=>{
            dispatch(hideSpinner());
            console.log(err);
        });
    }
}

export const retriveRecords= (listOfRecords) => {
    return({
        type: actionTypes.RETRIVE_RECORDS,
        payload: listOfRecords
    });
}
export const retriveRecordsRequest = () => {
    return (dispatch) => {
        dispatch(showSpinner());
        axios.get("/assest").then((payload)=>{
            dispatch(retriveRecords(payload.data));
            dispatch(hideSpinner());
        }).catch((err)=>{
            console.log(err);
            dispatch(hideSpinner());
        })
    }
}

export const retriveSingleRecord = (recordId) => {
    return({
        type: actionTypes.RETRIVE_SINGLE_RECORD,
        payload: recordId
    });
}

export const postRecordSuccessfull = () =>{
    return({
        type: actionTypes.POST_RECORD_SUCCESSFULL
    });
}

export const changeSystemNumberRequestSuccess = () => {
    return ({
        type: actionTypes.CHANGE_SYSTEM_NUMBER_SUCCESS
    })
}

export const changeSystemNumberRequest = (changeData) =>{
    //changeData={
    //  system_number: user edited system number
    //  _id : mongo id
    // }
    return (dispatch) => {
        axios.put("/assest/edit",changeData)
        .then((payload)=>{
            dispatch(changeSystemNumberRequestSuccess());
            dispatch(retriveRecordsRequest())
        })
        .catch((err)=>{
            console.log(err);
        })
    }
}

export const clearSingleRecordSelection = () => {
    return{
        type: actionTypes.CLEAR_SINGLE_RECORD_SELECTION
    }
}

// to delete the selected user
export const deleteRecordRequest = (selectedRecordId) => {
    let data={
        _id:selectedRecordId
    }
    return (dispatch)=>{
        dispatch(showSpinner());
        axios.delete("/assest",{data})
            .then((payload)=>{
                dispatch(hideSpinner());
                dispatch(deleteRecordRequestSuccess("Your Record deleted successfully"));
                dispatch(clearSingleRecordSelection());
                dispatch(retriveRecordsRequest());
            }).catch((err)=>{
                dispatch(hideSpinner());
                console.log(err);
            })
    }
    
}

export const deleteRecordRequestSuccess = (apiRequestFeedback) =>{
    return {
        type: actionTypes.DELETE_SELECTED_RECORD_REQUEST_SUCCESS,
        payload: apiRequestFeedback
    }
}

// unauthendicated  flows 
// registration starts here
export const registerUser = (userInformation) =>{
    return (dispatch) => {
        axios.post("/addUser",userInformation)
        .then((data)=>{
            dispatch(registerUserRequestSuccess("Registration sucess"));
            dispatch(redirectToLogin())
        }).catch((err)=>{
            console.log(err);
        })
    }
}
export const registerUserRequestSuccess = (userInfo) =>{
    return {
        type: actionTypes.REGISTER_USER_REQUEST_SUCCESS,
        payload: userInfo
    }
}
// registration ends here

//login starts here
export const login = (userInfo) => {
    return (dispatch)=>{
        dispatch(showSpinner());
        axios.post("/signIn",userInfo)
        .then((payload)=>{
            dispatch(loginRequestSuccess(payload.data));
            localStorage.setItem('jwt',payload.data.token);
            dispatch(userLoggedIn());
            dispatch(hideSpinner());
            dispatch(redirectToHome());
        })
        .catch((err)=>{
            if(err.response.status===401){
                dispatch(loginRequestFailure(err.response.data["message"]));
                dispatch(hideSpinner());
            }
            if(err.response.status===500){
                dispatch(loginRequestFailure("Internal server error try again later"));
                dispatch(hideSpinner());
            }
            console.log("sign in error",err);
        })

    }
}
export const loginRequestSuccess = (payload) =>{
    return{
        type: actionTypes.LOGIN_REQUEST_SUCCESS,
        payload: payload
    }
}

export const loginRequestFailure = (payload) =>{
    return{
        type: actionTypes.LOGIN_REQUEST_FAILURE,
        payload: payload
    }
}

export const userLoggedIn=() => {
    return{
        type: actionTypes.USER_LOGGED_IN
    }
}
export const userLoggedOff=() => {
    return{
        type: actionTypes.USER_LOGGED_OFF
    }
}
// login ends here

//clear page Level Notification
export const clearPageLevelNotification = () => {
    return{
        type: actionTypes.CLEAR_PAGE_LEVEL_NOTIFICATION
    }
}

// To show and hide spinner
export const showSpinner = () =>{
    return {
        type: actionTypes.SHOW_SPINNER
    }
}

export const hideSpinner = () => {
    return{
        type: actionTypes.HIDE_SPINNER
    }
}
