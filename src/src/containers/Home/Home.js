import React, { Component } from "react";
import { connect } from "react-redux";

import DetailedDisplay from "../../components/DetailedDisplay/DetailedDisplay";
import AssestList from '../AssestList/AssestList'
import { clearRedirectionToHome } from "../../redux/actions/actions";

class Home extends Component{
    
    componentDidMount(){
        if(this.props.redirectToHome===true){
            this.props.clearRedirectionToHome();
        }
    }

    render(){
        return(
            <React.Fragment>
                <AssestList/>
                <DetailedDisplay/>
            </React.Fragment>
        )
    }

}

const mapStateToProps = (state) =>{
    return{
        redirectToHome: state.redirectToHome
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        clearRedirectionToHome: () => {
            dispatch(clearRedirectionToHome());
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Home);