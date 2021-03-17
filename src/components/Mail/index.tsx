import React, {useEffect, useState} from "react";
import {useSelector, useDispatch} from "react-redux";
import {IMailItem, IMailItemRow, MailTypeMap} from "src/lib/types/mail";
import {RootState} from "src/reducers";
import {PENDING} from "src/actions/actionTypes";
import MailItemRow from "components/MailItemRow";
import CheckBox from "components/Sdk/CheckBox";
import DeleteOutline from "@material-ui/icons/DeleteOutline";
import "./style.scss";
import {deleteMails} from "src/actions/mailActions";

function Mail() {
    const [checked, toggleChecked] = useState<boolean>(false);
    const [mailRowChecked, toggleMailRowChecked] = useState<boolean>(false);
    const [mailItemRows, updateMailItemRows] = useState<IMailItemRow[]>([]);
    const {mailItems, mailStatus} = useSelector((state: RootState) => state.mail);
    const selectedFolder = useSelector((state: RootState) => state.common.selectedFolder);
    const dispatch = useDispatch();

    useEffect(() => {
        toggleChecked(false);
        updateMailItemRows([]);
    }, [selectedFolder]);

    useEffect(() => {
        if (mailItems) {
            const mailItemsRows: IMailItemRow[] = mailItems.map((x) => {
                return {...x, isChecked: false};
            });
            updateMailItemRows(mailItemsRows);
        }
    }, [mailItems]);

    const onCheckedAll = (e, isChecked: boolean) => {
        toggleChecked(isChecked);
        toggleMailRowChecked(isChecked);
        mailItemRows.forEach((x) => (x.isChecked = isChecked));
        updateMailItemRows([...mailItemRows]);
    };

    const onMailRowChecked = (id: number) => {
        mailItemRows.forEach((x) => {
            if (x.id === id) {
                x.isChecked = !x.isChecked;
            }
        });

        const isOneChecked = mailItemRows.some((x) => x.isChecked === true);
        if (isOneChecked !== mailRowChecked) {
            toggleMailRowChecked(isOneChecked);
        }
        updateMailItemRows([...mailItemRows]);
    };

    const removeMails = () => {
        const ids = mailItemRows.filter((x) => x.isChecked).map((x) => x.id);
        dispatch(deleteMails(ids));
    };

    const onDelete = (ids: number[]) => {
        dispatch(deleteMails(ids));
    };

    return (
        <div>
            <div className="mail__header">
                <CheckBox checked={checked} onChecked={onCheckedAll} />
                <span className="mail-type__label">{MailTypeMap.get(selectedFolder).name}</span>
                <button className="mail__button" type="button" name="Delete" onClick={removeMails}>
                    <DeleteOutline />
                    <span>Delete</span>
                </button>
            </div>
            {mailStatus === PENDING ? (
                <div>loading</div>
            ) : (
                <ul className="mail__list">
                    {mailItemRows.length > 0 &&
                        mailItemRows?.map((m) => {
                            return (
                                <MailItemRow
                                    mailRowChecked={mailRowChecked}
                                    key={m.id}
                                    mailItem={m}
                                    onChecked={onMailRowChecked}
                                    onDeleteMail={onDelete}
                                />
                            );
                        })}
                </ul>
            )}
        </div>
    );
}

export default Mail;
