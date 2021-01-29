import React, {useState} from "react";
import {useHistory} from "react-router-dom";
import classNames from "classnames";
import InboxIcon from "@material-ui/icons/Inbox";
import MenuIcon from "@material-ui/icons/Menu";
import SendIcon from "@material-ui/icons/Send";
import "./style.scss";
import Button from "@material-ui/core/Button";
import {useDispatch, useSelector} from "react-redux";
import {mailActionCreator, mailFolderChange} from "src/actions/mailActions";
import {MailType} from "src/lib/types/mail";
import {GLOBAL_ACTIONS} from "src/actions/actionTypes";
import {RootState} from "src/reducers";

interface IMailFolders {
    mailType: MailType;
    name: string;
    icon: unknown;
}

const SideBarItems: Array<IMailFolders> = [
    {mailType: MailType.INBOX, name: "Inbox", icon: <InboxIcon />},
    {mailType: MailType.SENT, name: "Sent", icon: <SendIcon />}
];

function SideBar() {
    const selectedFolder = useSelector((state: RootState) => state.common.selectedFolder);
    const [isExpanded, setIsExpanded] = useState<boolean>(false);
    const dispatch = useDispatch();
    const history = useHistory();

    const onMailItemClick = (mailType: MailType) => {
        dispatch(mailFolderChange(mailType));
        history.push("/mail");
    };

    const hightlightSelected = (mailType: MailType): string => {
        return selectedFolder === mailType ? "highlight__list-item" : "";
    };

    return (
        <div className={`side-bar__container ${isExpanded ? "expanded" : ""}`}>
            <span className="expand__icon" onClick={() => setIsExpanded(!isExpanded)}>
                <MenuIcon />
            </span>
            {isExpanded && (
                <Button className="new-message__button btn" variant="contained" color="primary">
                    New Message
                </Button>
            )}
            {isExpanded && (
                <div className="mail__list">
                    <ul>
                        {SideBarItems.map((i) => {
                            return (
                                <li
                                    className={classNames(
                                        "mail-items__list",
                                        hightlightSelected(i.mailType)
                                    )}
                                    key={i.name}
                                    onClick={() => onMailItemClick(i.mailType)}
                                >
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
