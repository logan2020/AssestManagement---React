import React, {Component} from 'react';
import { connect } from "react-redux";

import { withStyles } from '@material-ui/core/styles';
// import {Table, TableBody, TableCell, TableHead, TableRow, Paper} from '@material-ui/core';


import './AssestList.css';
import { retriveRecordsRequest, retriveSingleRecord } from '../../redux/actions/actions';


const styles = theme => ({
    root: {
      width: '100%',
      marginTop: theme.spacing.unit * 3,
      overflowX: 'auto',
    },
    table: {
      minWidth: 700,
    },
  });

class AssestList extends Component{
    
    componentDidMount(){
        this.props.retriveRecordsRequest();
    }

    onSelectingRecord(selectedElement){
        this.props.detailedRecord(selectedElement);
    }

    shouldComponentUpdate(nextProps, nextState){
        return this.props.assestLists!==nextProps.assestLists;
    }

    render(){
        // eslint-disable-next-line
        const { classes } = this.props;
        return (
            <React.Fragment>
                {/* material way starts here */}
                {/* <Paper className={classes.root}>
                    <Table className={classes.table}>
                        <TableHead>
                            <TableRow>
                                <TableCell>Name</TableCell>
                                <TableCell align="left">SAP ID</TableCell>
                                <TableCell align="left">Email Id</TableCell>
                                <TableCell align="left">System Number</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                        {this.props.assestLists.map((person,key )=>{
                            return (<TableRow onClick={()=>this.onSelectingRecord(person._id)} key={person._id}>
                                    <TableCell> {person.name} </TableCell>
                                    <TableCell align="left"> {person.sap_id} </TableCell>
                                    <TableCell align="left"> {person.email} </TableCell>
                                    <TableCell align="left"> {person.system_number} </TableCell>
                                </TableRow>)
                        })}
                        </TableBody>
                    </Table>
                </Paper> */}
            {/* Material way ends here */}
            <table data-component="AssestList" className="table table-striped table-bordered table-responsive">
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
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state) => {
    return{
        assestLists: state.root.assestLists,
        reloadHomeRoute: state.root.reloadHomeRoute
    }
}

const mapDispatchToProps = (dispatch) =>{
    return {
        retriveRecordsRequest: () =>{
            return dispatch(retriveRecordsRequest());
        },
        detailedRecord: (recordId) =>{
            return dispatch(retriveSingleRecord(recordId));
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps) (withStyles(styles)(AssestList));