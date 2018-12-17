import * as actionTypes from "../constants/action-types";

const initialStore={
    assestLists: [{
        "name": "Loganathan",
        "SAP_Id": "51772050",
        "email_Id": "vijaydce2020@gmail.com",
        "system_number": "RW-04-2B-W-072"
      },
      {
        "name": "Prabhakaran",
        "SAP_Id": "5164350",
        "email_Id": "prabha@gmail.com",
        "system_number": "RW-04-2B-W-071"
      },
      {
        "name": "Prabhakaran",
        "SAP_Id": "5164350",
        "email_Id": "prabha@gmail.com",
        "system_number": "RW-04-2B-W-071"
      }],
      toggleRecordForm : true,
      placeHolder: {
          "name": "Your name",
          "SAP_Id": "5177210",
          "email_Id": "mail@mail.com",
          "system_number": "RW-04-2B-W-XXX"
      }
}


const rootReducer = (state=initialStore, action) => {
    switch(action.type){
        case actionTypes.ADD_RECORD:{
            const copyAssestList = [...state.assestLists];
            copyAssestList.push(action.payload);
            return{
                ...state,
                assestLists: [...copyAssestList]
            }
        }
        default:
            return state;
    }
}

export default rootReducer;