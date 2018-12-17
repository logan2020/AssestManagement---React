import React,{ Component } from 'react';
import { Route } from 'react-router-dom'
import { withRouter } from 'react-router-dom'

// own components 
import MenuBar from "../MenuBar/MenuBar";
import AddNewItem from '../../components/AddNewItem/AddNewItem'
import AssestList from '../../containers/AssestList/AssestList'
import  AddNewItemForm from '../AddNewItem/AddNewItemForm/AddNewItemForm'

class Layout extends Component{

    state={
        assestLists: [{
          "name": "Loganathan",
          "SAP_Id": "51772050",
          "email_Id": "vijaydce2020@gmail.com",
          "system_number": "RW-04-2B-W-072"
        },
        {
          "name": "Prabhakaran",
          "SAP_Id": "5164350",
          "email_Id": "prabha@gmail.com",
          "system_number": "RW-04-2B-W-071"
        },
        {
          "name": "Prabhakaran",
          "SAP_Id": "5164350",
          "email_Id": "prabha@gmail.com",
          "system_number": "RW-04-2B-W-071"
        }],
        toggleRecordForm : true,
        placeHolder: {
            "name": "Any name",
            "SAP_Id": "5177210",
            "email_Id": "mail@mail.com",
            "system_number": "RW-04-2B-W-XXX"
        }
      }
    constructor(props){
        super(props);
        this.inputChangeHandler=this.inputChangeHandler.bind(this);
    }

    //form handlers
    inputChangeHandler= (event) => {
        switch(event.target.getAttribute("for")){
            case "name":{
                const placeholder=this.state.placeHolder;
                placeholder["name"]=event.target.value;
                this.setState({placeHolder: placeholder})
                break;
            }
            case "sap":{
                const placeholder=this.state.placeHolder;
                placeholder["SAP_Id"]=event.target.value;
                this.setState({placeHolder: placeholder})
                break;
            }
            case "email":{
                const placeholder=this.state.placeHolder;
                placeholder["email_Id"]=event.target.value;
                this.setState({placeHolder: placeholder})
                break;
            }
            case "system":{
                const placeholder=this.state.placeHolder;
                placeholder["system_number"]=event.target.value;
                this.setState({placeHolder: placeholder})
                break;
            }
            default:
                console.log("nothing matched");
                break;
        }
        
    }

    // form submission
    addRecordHandler = () =>{
        const tempAssestList=[...this.state.assestLists];
        tempAssestList.push(this.state.placeHolder);
        this.setState({assestLists: tempAssestList})
        this.props.history.push('/')
    }
    // form handlers ends here


    render(){
        return(
            <div>
                <MenuBar></MenuBar>
                <main className="container">
                    <Route path="/" 
                        render={(props) => (
                            <AssestList {...props} 
                                assestLists={this.state.assestLists}/>
                        )}
                        exact />
                    <Route path="/add" 
                        render={(props) => (
                            <AddNewItemForm {...props} 
                                visibilityState={this.state.toggleRecordForm}
                                inputChange={this.inputChangeHandler}
                                placeHolderValue={this.state.placeHolder}
                                addRecord={this.addRecordHandler}/>
                        )}/>
                </main>
                <footer>
                    <AddNewItem/>
                </footer>
            </div>
        );
    }
}

export default withRouter(Layout);