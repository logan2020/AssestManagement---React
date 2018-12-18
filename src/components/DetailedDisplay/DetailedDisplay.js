import React, { Component } from "react";
import { connect } from "react-redux";
import { changeSystemNumberRequest } from "../../redux/actions/actions";

import "./DetailedDisplay.css"

class DetailedDisplay extends Component{

    state={
        updateRecord: false,
        selectedRecord: null,
        editedSystem_number: ''
    }

    updateHandler = () =>{
        this.setState({updateRecord: true})
    }

    updateSystemNumberHandler = (event) => {
        this.setState({editedSystem_number: event.target.value})
    }

    changeSystemNumberInDb = () =>{
        //change users system number
        this.props.changeSystemNumberRequest({
            system_number: this.state.editedSystem_number,
            _id: this.props.selectedRecord._id
        });
    }

    render(){
        let contentFiller = null;
        if(this.props.selectedRecord && !this.state.updateRecord)
        {
            contentFiller = (<React.Fragment>
                <p> Employee name : {this.props.selectedRecord.name} </p>
                <p> Employee Record :{this.props.selectedRecord.sap_id} </p>
                <p> Employee email :{this.props.selectedRecord.email} </p>
                <p> System Number : {this.props.selectedRecord.system_number} </p>
            </React.Fragment>);
        }
        if(this.props.selectedRecord && this.state.updateRecord){
            let inputStyle={
                "width": "40%"
            }
            contentFiller = (<React.Fragment>
                <p> Employee name : {this.props.selectedRecord.name} </p>
                <p> Employee Record :{this.props.selectedRecord.sap_id} </p>
                <p> Employee email :{this.props.selectedRecord.email} </p>
                <div> System Number : 
                    <input style={inputStyle}
                        type="text"
                        value={this.state.editedSystem_number}
                        onChange={this.updateSystemNumberHandler}/>
                </div>
            </React.Fragment>);
        }
        
        return(
            this.props.selectedRecord?
            <div data-component="detailed-component" className="detailedRecord">
                <h4>{this.props.selectedRecord._id} </h4>
                {contentFiller}
                <div className="buttonHolder">
                    {this.state.updateRecord?
                        <button 
                            type="button"
                            className="btn btn-info"
                            onClick={this.changeSystemNumberInDb}>Save</button>:
                        <button 
                            type="button" 
                            className="btn btn-info"
                            onClick={this.updateHandler}>Update</button>
                    }
                    <button type="button" className="btn btn-danger">Delete</button>
                </div>
            </div>
            : null
        );
    }
}

const mapStateToProps= (state) =>{
    return{
        selectedRecord: state.selectedRecord
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        changeSystemNumberRequest: (changeData) => {
            dispatch(changeSystemNumberRequest(changeData));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DetailedDisplay);