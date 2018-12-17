import React,{ Component } from 'react';
import { Route } from 'react-router-dom'
import { withRouter } from 'react-router-dom'
import { connect } from "react-redux";

// own components 
import MenuBar from "../MenuBar/MenuBar";
import AddNewItem from '../../components/AddNewItem/AddNewItem'
import AssestList from '../../containers/AssestList/AssestList'
import  AddNewItemForm from '../AddNewItem/AddNewItemForm/AddNewItemForm'

class Layout extends Component{

    render(){
        return(
            <div>
                <MenuBar></MenuBar>
                <main className="container">
                    <Route path="/" 
                        render={(props) => (
                            <AssestList {...props} 
                                assestLists={this.props.assestLists}/>
                        )}
                        exact />
                    <Route path="/add" 
                        render={(props) => (
                            <AddNewItemForm {...props} 
                                visibilityState={this.props.toggleRecordForm}
                                placeHolderValue={this.props.placeHolder}/>
                        )}/>
                </main>
                <footer>
                    {/* just to click icon and change route */}
                    <AddNewItem/>
                </footer>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        assestLists: state.assestLists,
        toggleRecordForm: state.toggleRecordForm,
        placeHolder: state.placeHolder
    }
}

export default withRouter(connect(mapStateToProps)(Layout));