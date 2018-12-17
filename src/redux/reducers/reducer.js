import * as actionTypes from "../constants/action-types";
import  axios from "axios";

const initialStore={
    assestLists: [],
      toggleRecordForm : true,
      placeHolder: {
          "name": "Your name",
          "SAP_Id": "5177210",
          "email_Id": "mail@mail.com",
          "system_number": "RW-04-2B-W-XXX"
      },
      selectedRecord: null
}


const rootReducer = (state=initialStore, action) => {
    switch(action.type){
        case actionTypes.ADD_RECORD:{
            axios.post("http://localhost:9090/assest",action.payload).then((payload)=>{
                const copyAssestList = [...state.assestLists];
                copyAssestList.push(action.payload);
                return{
                    ...state,
                    assestLists: [...copyAssestList]
                }
            }).catch((err)=>{
                return state;
            });
            return state;
        }
        case actionTypes.RETRIVE_RECORDS:{
            return{
                ...state,
                assestLists: [...action.payload]
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
        default:
            return state;
    }
}

export default rootReducer;