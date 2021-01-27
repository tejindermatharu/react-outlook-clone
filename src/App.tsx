import React from "react";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import TopBar from "./components/TopBar/index";
import SideBar from "components/SideBar";
import Mail from "./components/Mail";
import MailList from "./components/MailList";

const App: React.FC = () => {
    return (
        <React.Fragment>
            <Router>
                <TopBar />
                <div className="app__body">
                    <SideBar />
                    <div className="mail__container">
                        <Switch>
                            <Route path="/maillist">
                                <MailList test="mail list" />
                            </Route>
                            <Route path="/">
                                <Mail />
                            </Route>
                        </Switch>
                    </div>
                </div>
            </Router>
        </React.Fragment>
    );
};

export default App;
