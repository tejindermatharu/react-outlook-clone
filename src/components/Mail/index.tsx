import React from "react";
import {useSelector} from "react-redux";

function Mail(props) {
    const count = useSelector((state: any) => state.mail.counter);

    return (
        <div>
            <span>mail count:</span>
            <span>{count}</span>
        </div>
    );
}

export default Mail;
