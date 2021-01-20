import React from "react";
import {useSelector} from "react-redux";
import {selectCount} from "src/reducers/mailReducer";

function Mail(props) {
    const count = useSelector(selectCount);

    return (
        <div>
            <span>mail count:</span>
            <span>{count}</span>
        </div>
    );
}

export default Mail;
