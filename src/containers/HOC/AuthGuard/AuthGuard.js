import React,{ Component } from "react";
import {connect} from 'react-redux';
import {Route, withRouter} from 'react-router-dom';

export default function(ProtectedComponent, ...rest){

    class AuthGuard extends Component{
        
        componentWillMount(){
            if(!this.props.authendicated){
                this.props.history.push("/login");
            }
        }

        render(){
            return(
                <Route {...rest} render={(props) => (
                    <ProtectedComponent {...props} />
                )} />
            );
        }

    }

    const mapStateToProps= (state)=>{
        return{
            authendicated: state.root.authendicated
        }
    }

    return withRouter(connect(mapStateToProps)(AuthGuard));
}