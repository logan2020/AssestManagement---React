import React, {Component} from 'react';
import { connect } from "react-redux";

import { addRecord } from "../../../redux/actions/actions";
import './AddNewItemForm.css';

class AddNewItemForm extends Component{

    state={
        placeHolder: {
        "name": "Any name",
        "SAP_Id": "5177210",
        "email_Id": "mail@mail.com",
        "system_number": "RW-04-2B-W-XXX"
        }
    }

    //form handlers
    inputChangeHandler= (event) => {
        switch(event.target.getAttribute("for")){
            case "name":{
                const placeholder=this.state.placeHolder;
                placeholder["name"]=event.target.value;
                this.setState({placeHolder: placeholder})
                break;
            }
            case "sap":{
                const placeholder=this.state.placeHolder;
                placeholder["SAP_Id"]=event.target.value;
                this.setState({placeHolder: placeholder})
                break;
            }
            case "email":{
                const placeholder=this.state.placeHolder;
                placeholder["email_Id"]=event.target.value;
                this.setState({placeHolder: placeholder})
                break;
            }
            case "system":{
                const placeholder=this.state.placeHolder;
                placeholder["system_number"]=event.target.value;
                this.setState({placeHolder: placeholder})
                break;
            }
            default:
                console.log("nothing matched");
                break;
        }
        
    }

    // form submit
    formSubmitHandler = (event) => {
        event.preventDefault();
        this.props.addRecord(this.state.placeHolder);
        this.props.history.push('/');
    }
    render(){
        return(
            this.props.visibilityState?
            <div data-component="AddNewItemForm" className="formHolder container">
                <h3>Enter Your details Below</h3>
                <form onSubmit={this.formSubmitHandler}>
                    <div className="form-group">
                        <label className="col-12 col-lg-6 col-md-6 col-sm-12 d-inline-block" id="name"> Enter your Name</label>
                        <input 
                            className="col-12 col-lg-6 col-md-6 col-sm-12 form-control d-inline-block" 
                            type="text" 
                            htmlFor="name"
                            value={this.state.placeHolder.name}
                            onChange={this.inputChangeHandler}/>
                    </div>
                    <div className="form-group">
                        <label className="col-12 col-lg-6 col-md-6 col-sm-12 d-inline-block" id="sap"> Enter your SAP ID</label>
                        <input 
                            className="col-12 col-lg-6 col-md-6 col-sm-12 form-control d-inline-block" 
                            type="text" 
                            htmlFor="sap"
                            value={this.state.placeHolder.SAP_Id}
                            onChange={this.inputChangeHandler}/>
                    </div>
                    <div className="form-group">
                        <label className="col-12 col-lg-6 col-md-6 col-sm-12 d-inline-block" id="email"> Enter your Email Id</label>
                        <input 
                            className="col-12 col-lg-6 col-md-6 col-sm-12 form-control d-inline-block" 
                            type="email" 
                            htmlFor="email"
                            value={this.state.placeHolder.email_Id}
                            onChange={this.inputChangeHandler}/>
                    </div>
                    <div className="form-group">
                        <label className="col-12 col-lg-6 col-md-6 col-sm-12 d-inline-block" id="system"> Enter your System Number</label>
                        <input 
                            className="col-12 col-lg-6 col-md-6 col-sm-12 form-control d-inline-block" 
                            type="text" 
                            htmlFor="system"
                            value={this.state.placeHolder.system_number}
                            onChange={this.inputChangeHandler}/>
                    </div>
                    <div className="form-group">
                        <input 
                            className="col-12 col-lg-6 col-md-6 col-sm-12 form-control d-inline-block" 
                            type="submit"
                            value="submit"/>
                    </div>
                </form>
            </div>:null
        );
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        addRecord: (record) => {
            return dispatch(addRecord(record));
        }
    }
}

export default connect(null, mapDispatchToProps)(AddNewItemForm);