import React, {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {IMailItems} from "src/lib/types/mail";
import {RootState} from "src/reducers";

function Mail() {
    const mailItems = useSelector((state: RootState) => state.mail.mailItems);
    const selectedFolder = useSelector((state: RootState) => state.common.selectedFolder);

    const [displayMailItems, setDisplayMailItems] = useState<Array<IMailItems>>([]);

    useEffect(() => {
        const filteredMail =
            mailItems.length > 0 ? mailItems.filter((m) => m.mailType === selectedFolder) : [];
        setDisplayMailItems(filteredMail);
    }, [mailItems]);

    return (
        <div>
            <span>mail count:</span>
            {displayMailItems &&
                displayMailItems.map((m) => {
                    return <span key={m.id}>{m.subject}</span>;
                })}
        </div>
    );
}

export default Mail;
