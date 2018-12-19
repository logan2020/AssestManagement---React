import React, { Component } from "react";
import { connect } from "react-redux";

class PagelLevelNotification extends Component {
    render() {
        return(
            this.props.feedback?
                <div className="alert alert-info" role="alert">
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
export default connect(mapStateToProps) (PagelLevelNotification);