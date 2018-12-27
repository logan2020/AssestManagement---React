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
import { Validators } from "../../containers/Utils/Validation/Validators";
import './Registration.css'

const ValidationSupport= new Validators();

class Registration extends Component {

    state={
        placeHolder:{
            name: '',
            email: '',
            password: ''
        },
        formFields:{
            "name": {
                validators:[
                    {'minLength':'Please enter minimum of 5 characters'},
                    {'required':'this field is required'}
                ],
                errorMessage:null
            },
            "email": {
                validators:[
                    {'minLength':'Please enter minimum of 5 characters'},
                    {'required':'this field is required'}
                ],
                errorMessage:null
            },
            "password": {
                validators:[
                    {'minLength':'Please enter minimum of 5 characters'},
                    {'required':'this field is required'}
                ],
                errorMessage:null
            }
            
        },
        formValidity: true
    }

    // form control value change listener
    inputChangeHandler = (event) => {
        switch(event.target.getAttribute("data-control")){
            case "name":{
                const temp=this.state.placeHolder;
                temp["name"]=event.target.value;
                this.setState({placeHolder: temp});
                break;
            }
            case "email":{
                const temp=this.state.placeHolder;
                temp["email"]=event.target.value;
                this.setState({placeHolder: temp});
                break;
            }
            case "password":{
                const temp=this.state.placeHolder;
                temp["password"]=event.target.value;
                this.setState({placeHolder: temp});
                break;
            }
            default: 
                console.log("Other than input field");
        }
    }
  
    validateFields=()=>{
        let duplicateFormFields={
            ...this.state.formFields,
            "name":{
                ...this.state.formFields["name"],
                validators: [...this.state.formFields["name"].validators]
            }
        };
        let formStatus= true;

        for(let fieldName in duplicateFormFields){
            let validationRulesArray= duplicateFormFields[fieldName].validators;
            let FieldError = false;
            // eslint-disable-next-line
            validationRulesArray.forEach((rulePlusErrorMessageObj)=>{
                for(let rule in rulePlusErrorMessageObj){
                    if(ValidationSupport.validate(rule, this.state.placeHolder[fieldName])!==''){
                        duplicateFormFields[fieldName].errorMessage=rulePlusErrorMessageObj[ValidationSupport.validate(rule, this.state.placeHolder[fieldName])];
                        FieldError = true;
                        formStatus = false;
                    }
                }
            });
            if(!FieldError){
                //clear field error
                duplicateFormFields[fieldName].errorMessage = null;
            }
        }
        this.setState({formFields:duplicateFormFields});
        return formStatus;
    }

    // form submit
    addNewUser= ()=>{
        let formStatus=this.validateFields();
        if(formStatus){
            this.props.registerUser(this.state.placeHolder);
        }
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
                        value={this.state.placeHolder.name}
                        onChange={this.inputChangeHandler}/>
                    <br />
                    {this.state.formFields["name"].errorMessage?<div className="alert alert-danger" role="alert">
                        {this.state.formFields["name"].errorMessage}
                    </div>: null}
                    <TextField
                        hintText="Enter your Email"
                        type="email"
                        floatingLabelText="Email"
                        data-control="email"
                        value={this.state.placeHolder.email}
                        onChange={this.inputChangeHandler}/>
                    <br />
                    {this.state.formFields["email"].errorMessage?<div className="alert alert-danger" role="alert">
                        {this.state.formFields["email"].errorMessage}
                    </div>: null}
                    <TextField
                        type="password"
                        hintText="Enter your Password"
                        floatingLabelText="Password"
                        data-control="password"
                        value={this.state.placeHolder.password}
                        onChange={this.inputChangeHandler}/>
                    <br />
                    {this.state.formFields["password"].errorMessage?<div className="alert alert-danger" role="alert">
                        {this.state.formFields["password"].errorMessage}
                    </div>: null}
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
        redirectToLogin: state.root.redirectToLogin
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
