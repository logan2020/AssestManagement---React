import React,{ Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {AppBar,Toolbar,Typography} from "@material-ui/core";
import {TextField, RaisedButton} from "material-ui";

import { clearRedirectionToLogin, login } from "../../redux/actions/actions";
import { Validators } from "../../containers/Utils/Validation/Validators";

const ValidationSupport= new Validators();


class Login extends Component{

    state={
        placeHolder:{
            "email":'vijaydce2020@mail.com',
            "password": '60607777'
        },
        formFields:{
            "email": {
                validators:[
                    {'minLength':'Please enter minimum of 5 characters'},
                    {'required':'this field is required'}
                ],
                errorMessage:null
            },
            "password": {
                validators:[
                    {'minLength_8':'Please enter minimum of 8 characters'},
                    {'required':'this field is required'}
                ],
                errorMessage:null
            }
        },
        formValidity: true
    }

    validateFields=()=>{
        let duplicateFormFields={
            ...this.state.formFields,
            "email":{
                ...this.state.formFields["email"],
                validators: [...this.state.formFields["email"].validators]
            }
        };
        let formStatus= true;

        for(let fieldName in duplicateFormFields){
            let validationRulesArray= duplicateFormFields[fieldName].validators;
            let FieldError = false;
            validationRulesArray.map((rulePlusErrorMessageObj)=>{
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

    // form control handlers
    inputChangeHandler = (event) =>{
        switch(event.target.getAttribute("data-control")){
            case "email":{
                const temp = this.state.placeHolder;
                temp["email"] = event.target.value;
                this.setState({placeHolder:temp});
                break;
            }
            case "password":{
                const temp = this.state.placeHolder;
                temp["password"] = event.target.value;
                this.setState({placeHolder:temp});
                break;
            }
            default:{
                console.log("other than input handled");
            }
        }
    }
    
    // form submission handler
    onsubmit = () => {
        let formStatus=this.validateFields();
        if(formStatus){
            this.props.login(this.state.placeHolder);
        }
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
                            value={this.state.placeHolder.email}
                            onChange={this.inputChangeHandler}/>
                        <br/>
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
                        <br/>
                        {this.state.formFields["password"].errorMessage?<div className="alert alert-danger" role="alert">
                            {this.state.formFields["password"].errorMessage}
                        </div>: null}
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