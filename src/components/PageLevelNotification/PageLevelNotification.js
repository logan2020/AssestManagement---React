import React, { Component } from "react";
import { connect } from "react-redux";

import { clearPageLevelNotification } from "../../redux/actions/actions";

import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';

const styles = theme => ({
    close: {
      padding: theme.spacing.unit / 2,
    },
  });
  

class PagelLevelNotification extends Component {

    state = {
        feedBackClasses : ['alert','alert-info'],
        open: true
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.feedback!==this.props.apiRequestFeedback){
            setTimeout(()=>{
                this.props.clearPageLevelNotification();
            }, 2000)
        }
    }
    
    handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        this.setState({ open: false });
    };    
    render() {
        const { classes } = this.props;
        return(
            this.props.feedback?
            <div>
                <Snackbar
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                    }}
                    open={this.state.open}
                    autoHideDuration={6000}
                    onClose={this.handleClose}
                    ContentProps={{
                        'aria-describedby': 'message-id',
                    }}
                    message={<span id="message-id">{this.props.feedback}</span>}
                    action={[
                        <Button key="undo" color="secondary" size="small" onClick={this.handleClose}>
                            Close
                        </Button>,
                        <IconButton
                            key="close"
                            aria-label="Close"
                            color="inherit"
                            className={classes.close}
                            onClick={this.handleClose}>
                        </IconButton>,
                    ]}
                />
            </div>:null
            )
    }
}

const mapStateToProps = (state) => {
    return {
        feedback: state.root.apiRequestFeedback
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        clearPageLevelNotification: ()=>{
            dispatch(clearPageLevelNotification());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (withStyles(styles)(PagelLevelNotification));