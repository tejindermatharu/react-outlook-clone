import React, {useEffect} from "react";
import DeleteOutline from "@material-ui/icons/DeleteOutline";
import {IMailItem} from "src/lib/types/mail";
import {useHistory} from "react-router";
import {useDispatch} from "react-redux";
import {MAIL_ACTIONS} from "src/actions/actionTypes";

interface IMailRowProps {
    mailItem: IMailItem;
}

const MailRowItem = ({mailItem}: IMailRowProps) => {
    const dispatch = useDispatch();
    const history = useHistory();

    useEffect(() => {
        console.log(mailItem.id);
    });

    const onMailDeleteClick = (e: any, id: number) => {
        e.stopPropagation();
    };

    const onMailItemClick = (mailItem: IMailItem) => {
        dispatch({type: MAIL_ACTIONS.SELECTED_MAIL, payload: mailItem});
        history.push("/maildetail");
    };

    return (
        <li
            key={mailItem.id}
            className="mail-row__container"
            onClick={() => onMailItemClick(mailItem)}
        >
            <span className="name__label">{mailItem.from}</span>
            <span className="mail-edit__buttons">
                <DeleteOutline onClick={(e) => onMailDeleteClick(e, mailItem.id)} />
            </span>
            <span className="subject__label">{mailItem.subject}</span>
        </li>
    );
};

export default MailRowItem;
