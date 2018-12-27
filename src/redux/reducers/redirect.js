import * as actionTypes from "../constants/action-types";

const initialStore={
    redirectToLogin: false,
    redirectToHome: false
}


const redirectReducer = (state=initialStore, action) => {
    switch(action.type){

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

export default redirectReducer;