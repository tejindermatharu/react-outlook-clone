import React, {useState} from "react";
import InboxIcon from "@material-ui/icons/Inbox";
import MenuIcon from "@material-ui/icons/Menu";
import SendIcon from "@material-ui/icons/Send";
import "./style.scss";
import Button from "@material-ui/core/Button";
import {useDispatch} from "react-redux";
import {mailActionCreator} from "src/actions/mailActions";

interface IMailFolders {
    name: string;
    icon: unknown;
}

const SideBarItems: Array<IMailFolders> = [
    {name: "Inbox", icon: <InboxIcon />},
    {name: "Sent", icon: <SendIcon />}
];

function SideBar() {
    const [isExpanded, setIsExpanded] = useState<boolean>(false);
    const dispatch = useDispatch();

    return (
        <div className={`side-bar__container ${isExpanded ? "expanded" : ""}`}>
            <span className="expand__icon" onClick={() => setIsExpanded(!isExpanded)}>
                <MenuIcon />
            </span>
            {isExpanded && (
                <Button
                    className="new-message__button btn"
                    variant="contained"
                    color="primary"
                    onClick={() => dispatch(mailActionCreator())}
                >
                    New Message
                </Button>
            )}
            {isExpanded && (
                <div className="mail__list">
                    <ul>
                        {SideBarItems.map((i) => {
                            return (
                                <li className="mail-items__list" key={i.name}>
                                    {i.icon}
                                    {i.name}
                                </li>
                            );
                        })}
                    </ul>
                </div>
            )}
        </div>
    );
}

export default SideBar;
