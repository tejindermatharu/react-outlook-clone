import React, {useEffect, useState} from "react";
import {useHistory} from "react-router-dom";
import {useSelector, useDispatch} from "react-redux";
import DeleteOutline from "@material-ui/icons/DeleteOutline";
import {IMailItem, MailTypeMap} from "src/lib/types/mail";
import {RootState} from "src/reducers";
import {MAIL_ACTIONS} from "src/actions/actionTypes";
import "./style.scss";

function Mail() {
    const mailItems = useSelector((state: any) => state.mail.mailItems?.payload);
    const selectedFolder = useSelector((state: RootState) => state.common.selectedFolder);
    const dispatch = useDispatch();
    const history = useHistory();

    const onMailItemClick = (mailItem: IMailItem) => {
        dispatch({type: MAIL_ACTIONS.SELECTED_MAIL, payload: mailItem});
        history.push("/maildetail");
    };

    const onMailDeleteClick = (e: any, id: number) => {
        e.stopPropagation();
    };

    const renderMailRow = (mailItem: IMailItem) => {
        return (
            <li
                key={mailItem.id}
                className="mail-row__container"
                onClick={() => onMailItemClick(mailItem)}
            >
                <span className="name__label">{mailItem.name}</span>
                <span className="mail-edit__buttons">
                    <DeleteOutline onClick={(e) => onMailDeleteClick(e, mailItem.id)} />
                </span>
                <span className="subject__label">{mailItem.subject}</span>
            </li>
        );
    };

    return (
        <div>
            <div className="mail__header">
                <span className="mail-type__label">{MailTypeMap.get(selectedFolder).name}</span>
            </div>
            <ul className="mail__list">
                {mailItems &&
                    mailItems.map((m) => {
                        return renderMailRow(m);
                    })}
            </ul>
        </div>
    );
}

export default Mail;
