import * as actionTypes from "../constants/action-types";

export const addRecord = (record) => {
    return ({
        type: actionTypes.ADD_RECORD,
        payload: record
    });
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
