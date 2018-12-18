import React, {Component} from 'react';
import axios from "axios";
import { connect } from "react-redux";

import './AssestList.css';
import { retriveRecords, retriveSingleRecord } from '../../redux/actions/actions';

class AssestList extends Component{
    
    componentDidMount(){
        axios.get("http://localhost:9090/assest").then((payload)=>{
            this.props.retriveData(payload.data);
        }).catch((err)=>{
            console.log(err);
        })
    }

    componentDidUpdate(){
        if(this.props.reloadHomeRoute){
            // this.props.history.push("/");
        }
    }

    onSelectingRecord(selectedElement){
        this.props.detailedRecord(selectedElement);
    }

    render(){
        return (
            <table data-component="AssestList" className="table table-striped table-bordered">
                <thead>
                    <tr>
                        <th> Name </th>
                        <th> SAP ID </th>
                        <th> Email Id </th>
                        <th> System Number </th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.assestLists.map((person,key )=>{
                        return (<tr onClick={()=>this.onSelectingRecord(person._id)} key={person._id}>
                                <td> {person.name} </td>
                                <td> {person.sap_id} </td>
                                <td> {person.email} </td>
                                <td> {person.system_number} </td>
                            </tr>)
                    })}
                
                </tbody>
            </table>
        );
    }
}

const mapStateToProps = (state) => {
    return{
        assestLists: state.assestLists,
        reloadHomeRoute: state.reloadHomeRoute
    }
}

const mapDispatchToProps = (dispatch) =>{
    return {
        retriveData: (records) =>{
            return dispatch(retriveRecords(records));
        },
        detailedRecord: (recordId) =>{
            return dispatch(retriveSingleRecord(recordId));
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(AssestList);