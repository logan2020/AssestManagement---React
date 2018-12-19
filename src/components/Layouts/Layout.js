import React,{ Component } from 'react';
import { Route } from 'react-router-dom'
import { withRouter } from 'react-router-dom'
import { connect } from "react-redux";

// own components 
import MenuBar from "../MenuBar/MenuBar";
import PagelLevelNotification from "../PageLevelNotification/PageLevelNotification";
import AddNewItem from '../../components/AddNewItem/AddNewItem'
import AssestList from '../../containers/AssestList/AssestList'
import  AddNewItemForm from '../AddNewItem/AddNewItemForm/AddNewItemForm'
import DetailedDisplay from "../DetailedDisplay/DetailedDisplay";
import Registration from "../Registration/Registration";
import Login from "../Login/Login";
class Layout extends Component{

    render(){
        return(
            <div>
                <MenuBar></MenuBar>
                <main className="container">
                    <PagelLevelNotification/>
                    {/* Authendicated app */}
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
                    {/* unauthendiacted routes */}
                    <Route path="/register" component={Registration}/>
                    <Route path="/login" component={Login}/>

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