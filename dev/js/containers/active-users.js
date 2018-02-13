import React ,{Component} from "react";
import {connect} from "react-redux";
import allReducer from "../reducers";
class ActiveUser extends Component{
    render(){
        if (!this.props.userss) {
            return (<div>Select a user...</div>);
}
        return (
            <div>
                <h3>Name :{this.props.userss.name}</h3>
                <h3>I.D  :{this.props.userss.id}</h3>
                <h3>Programme :{this.props.userss.programme}</h3>
                <h3>Address :{this.props.userss.address}</h3>
            </div>
        );
    }
}
function mapStateToProps(state){
    return {
        userss:state.active
    }
}
export default connect(mapStateToProps)(ActiveUser);