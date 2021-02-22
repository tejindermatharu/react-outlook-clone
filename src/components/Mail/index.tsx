import React, {useState} from "react";
import {useSelector} from "react-redux";
import {MailTypeMap} from "src/lib/types/mail";
import {RootState} from "src/reducers";
import {PENDING} from "src/actions/actionTypes";
import MailItemRow from "components/MailItemRow";
import CheckBox from "components/Sdk/CheckBox";
import "./style.scss";

function Mail() {
    const [checked, toggleChecked] = useState<boolean>(false);
    const {mailItems, mailStatus} = useSelector((state: RootState) => state.mail);
    const selectedFolder = useSelector((state: RootState) => state.common.selectedFolder);

    const onCheckedAll = (e, isChecked: boolean) => {
        toggleChecked(isChecked);
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
                    {mailItems &&
                        mailItems.map((m) => {
                            return (
                                <MailItemRow
                                    key={m.id}
                                    mailItem={m}
                                    checked={checked}
                                    onChecked={() => {}}
                                />
                            );
                        })}
                </ul>
            )}
        </div>
    );
}

export default Mail;
