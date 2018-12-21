import React,{ Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import { withRouter } from 'react-router-dom'
import { connect } from "react-redux";

// own components 
import MenuBar from "../MenuBar/MenuBar";
import PagelLevelNotification from "../PageLevelNotification/PageLevelNotification";
import AddNewItem from '../../components/AddNewItem/AddNewItem'
import  AddNewItemForm from '../AddNewItem/AddNewItemForm/AddNewItemForm'
import Registration from "../Registration/Registration";
import Login from "../Login/Login";
import Home  from "../../containers/Home/Home";
import { PrivateRoute } from "../../containers/HOC/PrivateRoute/PrivateRoute";
class Layout extends Component{

    render(){
        return(
            <div>
                <MenuBar></MenuBar>
                <main className="container">
                    <PagelLevelNotification/>
                    <Switch>
                        {/* unauthendiacted routes */}
                        <Route path="/register" component={Registration}/>
                        <Route path="/login" component={Login}/>
                        {/* Authendicated app */}
                        <PrivateRoute path="/add" component={AddNewItemForm}/>
                        <PrivateRoute to='/' exact component={Home}/>
                        {/* <Route path="/" exact component={Home}/> */}
                        {/* <Route path="/add" component={AddNewItemForm}/> */}
                    </Switch>

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