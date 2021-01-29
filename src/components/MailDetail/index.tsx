import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "src/reducers";

type MailProps = {
    test: string;
};

const MailDetail: React.FC<MailProps> = ({test}) => {
    const selectedMail = useSelector((state: RootState) => state.mail.selectedMail);

    return (
        <div className="mail-detail__container">
            <div className="mail-detail__toolbar"></div>
            <div className="mail-detail__header"></div>
            <div className="mail-detail__body">{selectedMail?.from}</div>
        </div>
    );
};

export default MailDetail;
