import Button from "@material-ui/core/Button";
import React, {useEffect, useRef} from "react";
import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import "./style.scss";
import {newMail} from "src/actions/mailActions";
import {IMailSendItem} from "src/lib/types/mail";
import {useHistory} from "react-router-dom";

const MailForm = () => {
    const {register, handleSubmit, watch, errors} = useForm<IMailSendItem>();
    const dispatch = useDispatch();
    const history = useHistory();

    const onSubmit = (data: IMailSendItem) => {
        dispatch(newMail(data));
        history.push("/mail");
    };

    const mailToRef = useRef<HTMLInputElement>();

    useEffect(() => {
        mailToRef.current.focus();
    }, []);

    return (
        <div className="mail-form__container">
            <form className="mail-form__form" onSubmit={handleSubmit(onSubmit)}>
                <div className="mail-form__header">
                    <input className="header__buttton" type="submit" value="Send" />
                </div>
                <div className="mail-form__errors">
                    {errors.from && (
                        <span className="errors__span">
                            This message must have at least one recipient.
                        </span>
                    )}
                </div>
                <div className="mailto__input">
                    <Button className="mailto__button btn" variant="contained" onClick={() => null}>
                        To
                    </Button>
                    <input
                        className="mail-form__input"
                        name="from"
                        ref={(e) => {
                            register(e, {required: true});
                            mailToRef.current = e;
                        }}
                    />
                </div>

                <input
                    className="mail-form__input"
                    placeholder="Add a subject"
                    name="subject"
                    ref={register({required: false})}
                />
                <textarea
                    className="mail-form__input mail__text-area"
                    name="message"
                    ref={register({required: false})}
                />
            </form>
        </div>
    );
};

export default MailForm;
