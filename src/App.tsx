import React from "react";
import TopBar from "./components/TopBar/index";

import SideBar from "components/SideBar";

const App: React.FC = () => {
    return (
        <React.Fragment>
            <TopBar />
            <SideBar />
        </React.Fragment>
    );
};

export default App;
