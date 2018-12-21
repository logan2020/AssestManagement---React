import * as actionTypes from "../constants/action-types";

const initialStore={
    redirectToLogin: false,
    redirectToHome: false,
    assestLists: [],
    placeHolder: {
        "name": "Your name",
        "SAP_Id": "5177210",
        "email_Id": "mail@mail.com",
        "system_number": "RW-04-2B-W-XXX"
    },
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
        // set state.authendiacted=true once the user logged in 
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

        // Redirect codes below
        // REDIRECT_TO_LOGIN page code start here
        case actionTypes.REDIRECT_TO_LOGIN:{
            return{
                ...state,
                redirectToLogin: true
            }
        }

        case actionTypes.CLEAR_REDIRECTION_TO_LOGIN:{
            return {
                ...state,
                redirectToLogin: false
            }
        }
        // REDIRECT_TO_LOGIN page code ends here

        // REDIRECT_TO_HOME page code start here
        case actionTypes.REDIRECT_TO_HOME:{
            return{
                ...state,
                redirectToHome: true
            }
        }

        case actionTypes.CLEAR_REDIRECTION_TO_HOME:{
            return {
                ...state,
                redirectToHome: false
            }
        }
        // REDIRECT_TO_LOGIN page code ends here
        default:
            return state;
    }
}

export default rootReducer;