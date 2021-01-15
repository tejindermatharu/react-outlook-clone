import * as React from "react";
import SearchBar from "./../SearchBar/index";
import "./style.scss";

function TopBar(props) {
    return (
        <div className="top-bar__container">
            <span>Outlook</span>
            <SearchBar />
        </div>
    );
}

export default TopBar;
