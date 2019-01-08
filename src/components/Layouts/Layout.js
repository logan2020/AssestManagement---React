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
import Locate from "../../containers/Locate/Locate";
import AuthGuard from "../../containers/HOC/AuthGuard/AuthGuard";
import Spinner from "../../containers/Spinner/Spinner";

const GuardHomeComponent = AuthGuard(Home);
const GuardAddNewItemFormComponent = AuthGuard(AddNewItemForm);

class Layout extends Component{

    render(){
        return(
            <div>
                <MenuBar></MenuBar>
                <Spinner></Spinner>
                <main className="container">
                    <PagelLevelNotification/>
                    <Switch>
                        {/* unauthendiacted routes */}
                        <Route path="/register" component={Registration}/>
                        <Route path="/login" component={Login}/>
                        <Route path="/locate/:personId" component={Locate}/>
                        {/* Authendicated app */}
                        <GuardAddNewItemFormComponent path="/add" component={AddNewItemForm}/>
                        <GuardHomeComponent to='/home' exact component={Home}/>
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
        assestLists: state.root.assestLists
    }
}

export default withRouter(connect(mapStateToProps)(Layout));