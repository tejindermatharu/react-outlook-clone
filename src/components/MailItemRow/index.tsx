import React, {useEffect} from "react";
import DeleteOutline from "@material-ui/icons/DeleteOutline";
import {IMailItemRow} from "src/lib/types/mail";
import {useHistory} from "react-router";
import {useDispatch} from "react-redux";
import {MAIL_ACTIONS} from "src/actions/actionTypes";
import CheckBox from "components/Sdk/CheckBox";
import "./style.scss";

interface IMailRowProps {
    mailItem: IMailItemRow;
    mailRowChecked: boolean;
    onChecked: (id: number) => void;
    onDeleteMail: (id: number[]) => void;
}

const MailRowItem = ({mailItem, mailRowChecked, onChecked, onDeleteMail}: IMailRowProps) => {
    const dispatch = useDispatch();
    const history = useHistory();

    useEffect(() => {
        console.log(mailItem.id);
    });

    const onMailDeleteClick = (e: any, id: number) => {
        e.stopPropagation();
        onDeleteMail([id]);
    };

    const onMailItemClick = (mailItem: IMailItemRow) => {
        dispatch({type: MAIL_ACTIONS.SELECTED_MAIL, payload: mailItem});
        history.push("/maildetail");
    };

    const onCheckClicked = (e, id: number) => {
        e.stopPropagation();
        onChecked(id);
    };

    return (
        <li
            key={mailItem.id}
            className="mail-row__container"
            onClick={() => onMailItemClick(mailItem)}
        >
            <CheckBox
                checked={mailItem.isChecked}
                className={mailRowChecked ? "" : "mail-row__checkbox"}
                onChecked={(e) => onCheckClicked(e, mailItem.id)}
            />
            <span className="name__label">{mailItem.from}</span>
            <span className="mail-edit__buttons">
                <DeleteOutline onClick={(e) => onMailDeleteClick(e, mailItem.id)} />
            </span>
            <span className="subject__label">{mailItem.subject}</span>
        </li>
    );
};

export default React.memo(MailRowItem);
