import * as React from "react";
import SearchBar from "./../SearchBar/index";
import "./style.scss";

function TopBar() {
    return (
        <div className="top-bar__container">
            <span className="outlook__span">Outlook</span>
            <SearchBar />
        </div>
    );
}

export default TopBar;
