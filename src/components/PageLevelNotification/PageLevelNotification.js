import React, { Component } from "react";
import { connect } from "react-redux";

import { clearPageLevelNotification } from "../../redux/actions/actions";

class PagelLevelNotification extends Component {

    state = {
        feedBackClasses : ['alert','alert-info']
    }

    componentWillReceiveProps(nextProps){
        console.log(nextProps,this.props.apiRequestFeedback);
        if(nextProps.feedback!==this.props.apiRequestFeedback){
            setTimeout(()=>{
                this.props.clearPageLevelNotification();
            }, 2000)
        }
    }
    
    render() {
        return(
            this.props.feedback?
                <div className={this.state.feedBackClasses.join(' ')} role="alert">
                    <strong>{this.props.feedback}</strong>
                </div>:null
            )
    }
}

const mapStateToProps = (state) => {
    return {
        feedback: state.apiRequestFeedback
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        clearPageLevelNotification: ()=>{
            dispatch(clearPageLevelNotification());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (PagelLevelNotification);