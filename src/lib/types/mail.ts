export enum MailType {
    INBOX = 1,
    SENT = 2,
    DELETED = 3
}

export const MailTypeMap = new Map<MailType, {name: string}>([
    [MailType.INBOX, {name: "Inbox"}],
    [MailType.SENT, {name: "Sent"}],
    [MailType.DELETED, {name: "Deleted"}]
]);

export interface IMailItem {
    id?: number;
    mailType: MailType;
    from: string;
    subject: string;
    body: string;
}

export interface IMailItemRow extends IMailItem {
    isChecked: boolean;
}

export interface IMailSendItem {
    from: string;
    body: string;
    subject: string;
}
