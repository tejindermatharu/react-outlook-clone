import React, {useEffect, useState} from "react";
import DeleteOutline from "@material-ui/icons/DeleteOutline";
import {IMailItem} from "src/lib/types/mail";
import {useHistory} from "react-router";
import {useDispatch} from "react-redux";
import {MAIL_ACTIONS} from "src/actions/actionTypes";
import {deleteMail} from "src/actions/mailActions";
import CheckBox from "components/Sdk/CheckBox";

interface IMailRowProps {
    mailItem: IMailItem;
    checked: boolean;
    onChecked: (e: any, isChecked: boolean) => void;
}

const MailRowItem = ({mailItem, checked, onChecked}: IMailRowProps) => {
    const dispatch = useDispatch();
    const history = useHistory();

    useEffect(() => {
        console.log(mailItem.id);
    });

    const onMailDeleteClick = (e: any, id: number) => {
        e.stopPropagation();
        dispatch(deleteMail(id));
    };

    const onMailItemClick = (mailItem: IMailItem) => {
        dispatch({type: MAIL_ACTIONS.SELECTED_MAIL, payload: mailItem});
        history.push("/maildetail");
    };

    const onCheckClicked = (e, isChecked: boolean) => {
        e.stopPropagation();
        onChecked(e, isChecked);
    };

    return (
        <li
            key={mailItem.id}
            className="mail-row__container"
            onClick={() => onMailItemClick(mailItem)}
        >
            <CheckBox checked={checked} onChecked={onCheckClicked} />
            <span className="name__label">{mailItem.from}</span>
            <span className="mail-edit__buttons">
                <DeleteOutline onClick={(e) => onMailDeleteClick(e, mailItem.id)} />
            </span>
            <span className="subject__label">{mailItem.subject}</span>
        </li>
    );
};

export default MailRowItem;
