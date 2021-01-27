import React from "react";

type MailProps = {
    test: string;
};

const MailList: React.FC<MailProps> = ({test}) => {
    return <div>{test}</div>;
};

export default MailList;
