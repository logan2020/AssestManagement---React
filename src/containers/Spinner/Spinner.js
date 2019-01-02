import React,{ Component } from "react";
import { connect } from "react-redux";

import './Spinner.css'

class Spinner extends Component {
    render(){
        return(
            this.props.showSpinner?<div className="loader">Loading...</div>:null
        );
    }
}

const mapStateToProps = (state) => {
    return{
        showSpinner: state.root.showSpinner
    }
}

export default connect(mapStateToProps)(Spinner);