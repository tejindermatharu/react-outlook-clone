import React from "react";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import TopBar from "./components/TopBar/index";
import SideBar from "components/SideBar";
import Mail from "./components/Mail";
import MailDetail from "./components/MailDetail";
import MailForm from "components/MailForm";

const App: React.FC = () => {
    return (
        <React.Fragment>
            <Router>
                <TopBar />
                <div className="app__body">
                    <SideBar />
                    <div className="mail__container">
                        <Switch>
                            <Route path="/maildetail">
                                <MailDetail test="mail list" />
                            </Route>
                            <Route path="/mailform">
                                <MailForm />
                            </Route>
                            <Route path="/mail">
                                <Mail />
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
