import * as actionTypes from "../constants/action-types";

const initialStore={
    assestLists: [],
      placeHolder: {
          "name": "Your name",
          "SAP_Id": "5177210",
          "email_Id": "mail@mail.com",
          "system_number": "RW-04-2B-W-XXX"
      },
      selectedRecord: null,
      addRecordSuccessfull: false,
      reloadHomeRoute: false
}


const rootReducer = (state=initialStore, action) => {
    switch(action.type){
        case actionTypes.ADD_RECORD:{
            const copyAssestList = [...state.assestLists];
                copyAssestList.push(action.payload);
                return{
                    ...state,
                    assestLists: [...copyAssestList],
                }
        }
        case actionTypes.RETRIVE_RECORDS:{
            return{
                ...state,
                assestLists: [...action.payload],
                addRecordSuccessfull: false,
                reloadHomeRoute: false
            }
        }
        case actionTypes.RETRIVE_SINGLE_RECORD: {
            const tempSelectedRecord = state.assestLists.filter((el)=>{
                return el._id===action.payload;
            });
            return {
                ...state,
                selectedRecord: tempSelectedRecord[0]
            }
        }
        case actionTypes.POST_RECORD_SUCCESSFULL:{
            return{
                ...state,
                addRecordSuccessfull: true
            }
        }
        case actionTypes.CHANGE_SYSTEM_NUMBER_SUCCESS:{
            return{
                ...state,
                reloadHomeRoute: true
            }
        }
        default:
            return state;
    }
}

export default rootReducer;