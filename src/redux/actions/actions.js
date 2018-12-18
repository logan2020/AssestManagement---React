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

export const changeSystemNumber = () => {
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
            dispatch(changeSystemNumber())
        })
        .catch((err)=>{
            console.log(err);
        })
    }
}