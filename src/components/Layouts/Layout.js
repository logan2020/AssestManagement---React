import React,{ Component } from 'react';
import { Route } from 'react-router-dom'
import { withRouter } from 'react-router-dom'
import { connect } from "react-redux";

// own components 
import MenuBar from "../MenuBar/MenuBar";
import AddNewItem from '../../components/AddNewItem/AddNewItem'
import AssestList from '../../containers/AssestList/AssestList'
import  AddNewItemForm from '../AddNewItem/AddNewItemForm/AddNewItemForm'
import DetailedDisplay from "../DetailedDisplay/DetailedDisplay";

class Layout extends Component{

    render(){
        return(
            <div>
                <MenuBar></MenuBar>
                <main className="container">
                    <Route path="/" 
                        render={(props) => (
                            <React.Fragment>
                                <AssestList {...props} 
                                    assestLists={this.props.assestLists}/>
                                <DetailedDisplay/>
                            </React.Fragment>
                        )}
                        exact />
                    <Route path="/add" component={AddNewItemForm}/>
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
        assestLists: state.assestLists
    }
}

export default withRouter(connect(mapStateToProps)(Layout));