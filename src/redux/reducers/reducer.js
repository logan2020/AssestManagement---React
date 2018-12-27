import * as actionTypes from "../constants/action-types";

const initialStore={
    assestLists: [],
    selectedRecord: null,
    addRecordSuccessfull: false,
    reloadHomeRoute: false,
    apiRequestFeedback: null,
    authendicated: false,
    // after login set jwt token and logged in userInfo
    jwtToken: '',
    loggedInUserInfo: {}
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
        case actionTypes.CLEAR_SINGLE_RECORD_SELECTION:{
            return{
                ...state,
                selectedRecord: null
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
        case actionTypes.DELETE_SELECTED_RECORD_REQUEST_SUCCESS:{
            return {
                ...state,
                apiRequestFeedback: action.payload
            }
        }

        // registration
        case actionTypes.REGISTER_USER_REQUEST_SUCCESS:{
            return {
                ...state,
                apiRequestFeedback: action.payload
            }
        }
        //login
        case actionTypes.LOGIN_REQUEST_FAILURE:{
            return{
                ...state,
                apiRequestFeedback: action.payload
            }
        }
        case actionTypes.LOGIN_REQUEST_SUCCESS:{
            return{
                ...state,
                apiRequestFeedback: action.payload.status,
                jwtToken: action.payload.token,
                loggedInUserInfo: action.payload.userData
            }
        }

        // set state.authendiacted=true once the user logged in 
        case actionTypes.USER_LOGGED_IN:{
            if(localStorage.getItem("jwt")!=null)
            {   
                return{
                    ...state,
                    authendicated: true
                }
            }
            return{
                ...state
            }
        }
        // set state.authendiacted=false once the user logged in 
        case actionTypes.USER_LOGGED_OFF:{
            localStorage.removeItem("jwt");
            return {
                ...state,
                authendicated: false,
                apiRequestFeedback: "You successfully signed off"
            }
        }

        case actionTypes.CLEAR_PAGE_LEVEL_NOTIFICATION:{
            return{
                ...state,
                apiRequestFeedback: null
            }
        }

        default:
            return state;
    }
}

export default rootReducer;