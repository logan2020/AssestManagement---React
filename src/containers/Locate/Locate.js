import React, { Component } from "react";
import { withRouter } from "react-router";
import { connect } from "react-redux";

import './Locate.module.css';
import { retriveSelectedRecordToLocate } from "../../redux/actions/actions";

class Locate extends Component{
    
    componentDidMount(){
        this.props.retriveSelectedRecord(this.props.match.params.personId);
    }

    render(){
        return(
            <React.Fragment>
                <br/>
                {this.props.selectedRecord?
                <div className="container emp-profile">
                    <form method="post">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="profile-img">
                                    <img style={{width: '100%'}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS52y5aInsxSm31CvHOFHWujqUx_wWTS9iM6s7BAm21oEN_RiGoog" alt=""/>
                                </div>
                            </div>
                            <div className="col-md-8">
                                <div className="profile-head">
                                    <h5>
                                        {this.props.selectedRecord.name}
                                    </h5>
                                    <div className="row">
                                            <div className="col-md-6">
                                                <label>Name</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>{this.props.selectedRecord.name}</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>Email</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>{this.props.selectedRecord.email}</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>SAP ID</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>{this.props.selectedRecord.sap_id}</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>System Number</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>{this.props.selectedRecord.system_number}</p>
                                            </div>
                                        </div>
                                </div>
                            </div>
                        </div>
                    </form>           
                </div>:null}
            </React.Fragment>
            
        );
    }

}

const mapStateToProps = (state) => {
    return{
        selectedRecord: state.root.selectedRecord
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        retriveSelectedRecord: (personId) =>{
            return dispatch(retriveSelectedRecordToLocate(personId));
        }
    }
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Locate));