import React from "react";
import {useSelector} from "react-redux";
import {MailTypeMap} from "src/lib/types/mail";
import {RootState} from "src/reducers";
import {PENDING} from "src/actions/actionTypes";
import "./style.scss";
import MailItemRow from "components/MailItemRow";

function Mail() {
    const {mailItems, mailStatus} = useSelector((state: RootState) => state.mail);
    const selectedFolder = useSelector((state: RootState) => state.common.selectedFolder);

    return (
        <div>
            <div className="mail__header">
                <span className="mail-type__label">{MailTypeMap.get(selectedFolder).name}</span>
            </div>
            {mailStatus === PENDING ? (
                <div>loading</div>
            ) : (
                <ul className="mail__list">
                    {mailItems &&
                        mailItems.map((m) => {
                            return <MailItemRow key={m.id} mailItem={m} />;
                        })}
                </ul>
            )}
        </div>
    );
}

export default Mail;
