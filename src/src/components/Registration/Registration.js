import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "@material-ui/core/AppBar";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

import { registerUser } from "../../redux/actions/actions";

class Registration extends Component {

    state={
        userEnteredValue:{
            name: '',
            email: '',
            password: ''
        }
    }

    // form control value change listener
    inputChangeHandler = (event) => {
        switch(event.target.getAttribute("data-control")){
            case "name":{
                const temp=this.state.userEnteredValue;
                temp["name"]=event.target.value;
                this.setState({userEnteredValue: temp});
                break;
            }
            case "email":{
                const temp=this.state.userEnteredValue;
                temp["email"]=event.target.value;
                this.setState({userEnteredValue: temp});
                break;
            }
            case "password":{
                const temp=this.state.userEnteredValue;
                temp["password"]=event.target.value;
                this.setState({userEnteredValue: temp});
                break;
            }
            default: 
                console.log("Other than input field");
        }
    }
  
    // form submit
    addNewUser= ()=>{
        this.props.registerUser(this.state.userEnteredValue);
    }

    render() {
        let style = {
        margin: 15
        };

        let redirectToLogin=null
        if(this.props.redirectToLogin){
            redirectToLogin = <Redirect to="/login"/>
        }

        return (
            <React.Fragment>
                {redirectToLogin}
                <MuiThemeProvider>
                    <div>
                    <AppBar position="static">
                        <Toolbar>
                            <Typography variant="title" color="inherit">
                                Registration
                            </Typography>
                        </Toolbar>
                    </AppBar>
                    <TextField
                        hintText="Enter Your Name"
                        floatingLabelText="Name"
                        data-control="name"
                        value={this.state.userEnteredValue.name}
                        onChange={this.inputChangeHandler}/>
                    <br />
                    <TextField
                        hintText="Enter your Email"
                        type="email"
                        floatingLabelText="Email"
                        data-control="email"
                        value={this.state.userEnteredValue.email}
                        onChange={this.inputChangeHandler}/>
                    <br />
                    <TextField
                        type="password"
                        hintText="Enter your Password"
                        floatingLabelText="Password"
                        data-control="password"
                        value={this.state.userEnteredValue.password}
                        onChange={this.inputChangeHandler}/>
                    <br />
                    <RaisedButton 
                        label="Submit"
                        primary={true}
                        style={style}
                        onClick={this.addNewUser} />
                    </div>
                </MuiThemeProvider>
        </React.Fragment>
        );
  }
}

const mapStateToProps = (state) =>{
    return {
        redirectToLogin: state.redirectToLogin
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        registerUser: ( userInfo) =>{
            dispatch(registerUser(userInfo));
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Registration);
