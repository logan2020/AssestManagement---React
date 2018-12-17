import React, {Component} from 'react';

import './AssestList.css';

class AssestList extends Component{
    

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
                        return (<tr key={key}>
                                <td> {person.name} </td>
                                <td> {person.SAP_Id} </td>
                                <td> {person.email_Id} </td>
                                <td> {person.system_number} </td>
                            </tr>)
                    })}
                
                </tbody>
            </table>
        );
    }
}
export default AssestList;