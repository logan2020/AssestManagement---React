import * as actionTypes from "../constants/action-types";


// redirect routes parts
// For Login parts
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

// For Home page parts
export const redirectToHome = () =>{
    return {
        type: actionTypes.REDIRECT_TO_HOME
    }
}

export const clearRedirectionToHome = () => {
    return{
        type: actionTypes.CLEAR_REDIRECTION_TO_HOME
    }
}