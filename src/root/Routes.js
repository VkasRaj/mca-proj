import React from "react";
import { Switch, Route } from "react-router-dom";

import Feedback from "../App/Feedback";
import List from "../App/List";
import Specs from "../App/Specs";
import Home from "../App/Home";

const Routes = () => {
    return (
        <Switch>
            <Route path="/feedback" component={Feedback} />
            <Route path="/specs" component={Specs} />
            <Route path="/list" component={List} />
            <Route path="/" component={Home} exact />
        </Switch>
    );
};

export default Routes;
