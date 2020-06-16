import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/pages/Home/Home";

const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                < Route path ="/" exact component={Home} />
                < Route path ="/test" exact component={() => <h1>This is a Dummy Page</h1> } />
            </Switch>
        </BrowserRouter>
    );
};

export default Router;
