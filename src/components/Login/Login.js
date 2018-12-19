import React,{ Component } from "react";
import { connect } from "react-redux";

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from "@material-ui/core/AppBar";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

import { clearRedirectionToLogin, login } from "../../redux/actions/actions";

class Login extends Component{

    componentDidMount(){
        this.props.clearRedirectionToLogin();
    }

    state={
        email:'',
        password: ''
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
                <MuiThemeProvider>
                    <div>
                        <AppBar position="static">
                            <Toolbar>
                                <Typography variant="title" color="inherit">
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

const mapDispatchToProps = (dispatch) =>{
    return {
        clearRedirectionToLogin: () =>{
            return dispatch(clearRedirectionToLogin());
        },
        login: () => {
            return dispatch(login());
        }
    }
}
export default connect(null,mapDispatchToProps) (Login);