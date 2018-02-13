import React ,{Component} from "react";
import Users from "../containers/users";
import ActiveUser from "../containers/active-users";
class App extends Component{
    render(){
        return (
            <div>
                <h1>User Name</h1>
                    <Users />
                <h2>User Details</h2>
                    <ActiveUser />
            </div>
        )
    }
}
export default App;