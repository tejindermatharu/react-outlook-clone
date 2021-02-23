import React, {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {IMailItem, IMailItemRow, MailTypeMap} from "src/lib/types/mail";
import {RootState} from "src/reducers";
import {PENDING} from "src/actions/actionTypes";
import MailItemRow from "components/MailItemRow";
import CheckBox from "components/Sdk/CheckBox";
import "./style.scss";

function Mail() {
    const [checked, toggleChecked] = useState<boolean>(false);
    const [mailRowChecked, toggleMailRowChecked] = useState<boolean>(false);
    const [mailItemRows, updateMailItemRows] = useState<IMailItemRow[]>([]);
    const {mailItems, mailStatus} = useSelector((state: RootState) => state.mail);
    const selectedFolder = useSelector((state: RootState) => state.common.selectedFolder);

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

    return (
        <div>
            <div className="mail__header">
                <CheckBox checked={checked} onChecked={onCheckedAll} />
                <span className="mail-type__label">{MailTypeMap.get(selectedFolder).name}</span>
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
                                />
                            );
                        })}
                </ul>
            )}
        </div>
    );
}

export default Mail;
