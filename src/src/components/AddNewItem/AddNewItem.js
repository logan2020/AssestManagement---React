import React, {Component}  from 'react';
import logo from '../../add.svg'
import { Link } from "react-router-dom";

class AddNewItem extends Component{
    ImageStyles={
        "width": "7%",
        "float": "right",
        "cursor": "pointer",
        "color": "white",
        "outline": "none",
        "zIndex": "99",
        "position": "fixed",
        "bottom": 20,
        "right": 30
    }

    render(){

        return(
            <Link to="/add">
                <img style={this.ImageStyles} src={logo} alt="to add new item"></img>
            </Link>
        );
    }
}

export default AddNewItem;