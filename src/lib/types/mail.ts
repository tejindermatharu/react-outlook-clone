export const enum MailType {
    INBOX = 1,
    SENT = 2,
    DELETED = 3
}

// export const MailTypeList = new Map<MailType, IMailDisplay>([
//     [MailType.INBOX, {name: "Inbox"}],
//     [MailType.SENT, {name: "Sent"}],
//     [MailType.DELETED, {name: "Deleted"}]
// ]);

export interface IMailItems {
    id: number;
    mailType: MailType;
    from: string;
    name: string;
    subject: string;
}
