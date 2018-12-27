import React,{Component} from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { withRouter } from 'react-router'
import Button from '@material-ui/core/Button';

import logo from "../../logo.svg";
import './MenuBar.css'
import { userLoggedOff } from "../../redux/actions/actions";

export class MenuBar extends Component{
    
    onLogoffHandler = () => {
        this.props.history.push("/login");
        this.props.logOffHandler();
    }

    componentDidMount(){
        //clear redirection to home route
    }
    
    render(){

        return (
            this.props.authendicated?
            <nav data-component="menu-bar" className="navbar navbar-expand-sm bg-dark navbar-dark">
                <div className="col-6">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <img src={logo} alt="Logo comes here" />
                        </li>
                        <li className="nav-item">
                            <NavLink exact={true} activeClassName="active" className="nav-link" to='/home'>Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink activeClassName="active" className="nav-link" to='/add'>add</NavLink>
                        </li>
                    </ul>
                </div>
                <div className="sign-off-button-holder col-6">
                    <Button 
                        variant="contained" 
                        color="secondary"
                        onClick={this.onLogoffHandler}>Log off</Button>
                </div>
            </nav>
            :null);
    }
    
}

const mapStateToProps= (state) => {
    return{
        authendicated: state.root.authendicated
    }
}

const mapDispatchToProps = (dispatch) =>{
    return {
        logOffHandler: () => {
            dispatch(userLoggedOff())
        }
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps, null, { pure: false })(MenuBar));