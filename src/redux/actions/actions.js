import * as actionTypes from "../constants/action-types";
import  axios from "axios";

export const addRecord = (record) => {
    return ({
        type: actionTypes.ADD_RECORD,
        payload: record
    });
}

//async function to post record
export const postAddRecordRequest = (record) =>{
    return (dispatch) => {
        axios.post("http://localhost:9090/assest",record).then((payload)=>{
                dispatch(addRecord(payload.data));
                dispatch(postRecordSuccessfull());
        }).catch((err)=>{
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
        axios.get("http://localhost:9090/assest").then((payload)=>{
            dispatch(retriveRecords(payload.data));
        }).catch((err)=>{
            console.log(err);
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
        axios.put("http://localhost:9090/assest/edit",changeData)
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
        axios.delete("http://localhost:9090/assest",{data})
            .then((payload)=>{
                dispatch(deleteRecordRequestSuccess("Your Record deleted successfully"));
                dispatch(clearSingleRecordSelection());
                dispatch(retriveRecordsRequest());
            }).catch((err)=>{
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
        axios.post("http://localhost:9090/addUser",userInformation)
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
        console.log("axios login goes here");

    }
}
export const loginRequestSuccess = (msg) =>{
    return{
        type: actionTypes.LOGIN_REQUEST_SUCCESS,
        payload: msg
    }
}
// login ends here

// redirect routes parts
export const redirectToLogin = () =>{
    return {
        type: actionTypes.REDIRECT_TO_LOGIN
    }
}

export const clearRedirectionToLogin = () => {
    return{
        type: actionTypes.CLEAR_REDIRECTION_TO_LOGIN
    }
}