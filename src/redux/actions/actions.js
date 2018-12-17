import * as actionTypes from "../constants/action-types";

export const addRecord = (record) => {
    return ({
        type: actionTypes.ADD_RECORD,
        payload: record
    });
}
