import React from "react";
import {useForm} from "react-hook-form";
import "./style.scss";

type FormData = {
    mailTo: string;
    subject: string;
};

const MailForm = () => {
    const {register, handleSubmit, watch, errors} = useForm<FormData>();
    const onSubmit = (data: FormData) => console.log(data);

    return (
        <form className="mail__form" onSubmit={handleSubmit(onSubmit)}>
            <input
                className="mail-form__input"
                name="mailTo"
                defaultValue="test"
                ref={register({required: true})}
            />
            <input className="mail-form__input" name="subject" ref={register({required: true})} />
            {errors.subject && <span>This field is required</span>}
            <input type="submit" />
        </form>
    );
};

export default MailForm;
