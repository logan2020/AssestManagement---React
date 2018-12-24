import React,{ Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {AppBar,Toolbar,Typography} from "@material-ui/core";
import {TextField, RaisedButton} from "material-ui";

import { clearRedirectionToLogin, login } from "../../redux/actions/actions";

class Login extends Component{

    componentDidMount(){
        // this.props.clearRedirectionToLogin();
    }

    state={
        email:'vijaydce2020@mail.com',
        password: '60607777'
    }

    // form control handlers
    inputChangeHandler = (event) =>{
        switch(event.target.getAttribute("data-control")){
            case "email":{
                this.setState({email:event.target.value})
                break;
            }
            case "password":{
                this.setState({password:event.target.value})
                break;
            }
            default:{
                console.log("other than input handled");
            }
        }
    }
    
    // form submission handler
    onsubmit=()=>{
        this.props.login({email:this.state.email,password: this.state.password})
    }

    render(){
        let style={
            margin : 15
        }
        return(
            <React.Fragment>
                {this.props.redirectToHome?<Redirect to="/home"/>:null}
                <MuiThemeProvider>
                    <div>
                        <AppBar position="static" title="Login">
                            <Toolbar>
                                <Typography variant="h6" color="inherit">
                                    Login
                                </Typography>
                            </Toolbar>
                        </AppBar>
                        <TextField
                            hintText="Enter your Email"
                            floatingLabelText="Email"
                            data-control="email"
                            value={this.state.email}
                            onChange={this.inputChangeHandler}/>
                        <br/>
                        <TextField
                            type="password"
                            hintText="Enter your Password"
                            floatingLabelText="Password"
                            data-control="password"
                            value={this.state.password}
                            onChange={this.inputChangeHandler}/>
                        <br/>
                        <RaisedButton 
                            label="Submit" 
                            primary={true} 
                            style={style} 
                            onClick={this.onsubmit}/>
                    </div>
                </MuiThemeProvider>
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) =>{
    return{
        redirectToHome: state.redirectToHome
    }
}

const mapDispatchToProps = (dispatch) =>{
    return {
        clearRedirectionToLogin: () =>{
            return dispatch(clearRedirectionToLogin());
        },
        login: (userInfo) => {
            return dispatch(login(userInfo));
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps) (Login);