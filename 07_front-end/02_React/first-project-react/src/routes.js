import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from './containers/Home'
import Users from './containers/Users'
function Routes() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" Component={Home} />
                <Route exact path="/usuarios" Component={Users} />
            </Switch>
        </Router>
    )
}

export default Routes