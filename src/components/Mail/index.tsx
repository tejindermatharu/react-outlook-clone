import React from "react";
import {useSelector} from "react-redux";

function Mail() {
    const mail = useSelector((state: any) => state.mail.mail);

    return (
        <div>
            <span>mail count:</span>
            {mail &&
                mail.map((m) => {
                    return <span key={m.id}>{m.title}</span>;
                })}
        </div>
    );
}

export default Mail;
