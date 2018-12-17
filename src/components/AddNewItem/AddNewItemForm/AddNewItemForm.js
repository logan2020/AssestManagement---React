import React, {Component} from 'react';
import './AddNewItemForm.css';

class AddNewItemForm extends Component{

    render(){
        return(
            this.props.visibilityState?
            <div data-component="AddNewItemForm" className="formHolder container">
                <h3>Enter Your details Below</h3>
                <div className="form-group">
                    <label className="col-12 col-lg-6 col-md-6 col-sm-12 d-inline-block" id="name"> Enter your Name</label>
                    <input 
                        className="col-12 col-lg-6 col-md-6 col-sm-12 form-control d-inline-block" 
                        type="text" 
                        htmlFor="name"
                        value={this.props.placeHolderValue.name}
                        onChange={this.props.inputChange}/>
                </div>
                <div className="form-group">
                    <label className="col-12 col-lg-6 col-md-6 col-sm-12 d-inline-block" id="sap"> Enter your SAP ID</label>
                    <input 
                        className="col-12 col-lg-6 col-md-6 col-sm-12 form-control d-inline-block" 
                        type="text" 
                        htmlFor="sap"
                        value={this.props.placeHolderValue.SAP_Id}
                        onChange={this.props.inputChange}/>
                </div>
                <div className="form-group">
                    <label className="col-12 col-lg-6 col-md-6 col-sm-12 d-inline-block" id="email"> Enter your Email Id</label>
                    <input 
                        className="col-12 col-lg-6 col-md-6 col-sm-12 form-control d-inline-block" 
                        type="email" 
                        htmlFor="email"
                        value={this.props.placeHolderValue.email_Id}
                        onChange={this.props.inputChange}/>
                </div>
                <div className="form-group">
                    <label className="col-12 col-lg-6 col-md-6 col-sm-12 d-inline-block" id="system"> Enter your System Number</label>
                    <input 
                        className="col-12 col-lg-6 col-md-6 col-sm-12 form-control d-inline-block" 
                        type="text" 
                        htmlFor="system"
                        value={this.props.placeHolderValue.system_number}
                        onChange={this.props.inputChange}/>
                </div>
                <div className="form-group">
                    <input 
                        className="col-12 col-lg-6 col-md-6 col-sm-12 form-control d-inline-block" 
                        type="submit"
                        value="submit"
                        onClick={this.props.addRecord}/>
                </div>
            </div>:null
        );
    }
}

export default AddNewItemForm;