import React, {useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAlignJustify} from "@fortawesome/free-solid-svg-icons";
import "./style.scss";

function SideBar(props) {
    const [isExpanded, setIsExpanded] = useState<boolean>(false);

    return (
        <div className={`side-bar__container ${isExpanded ? "expanded" : ""}`}>
            <span className="expand__icon" onClick={() => setIsExpanded(!isExpanded)}>
                <FontAwesomeIcon icon={faAlignJustify} />
            </span>
        </div>
    );
}

export default SideBar;
