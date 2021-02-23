import React, {useState} from "react";
import RadioButtonCheckedRounded from "@material-ui/icons/RadioButtonCheckedRounded";
import RadioButtonUncheckedRounded from "@material-ui/icons/RadioButtonUncheckedRounded";
import classNames from "classnames";

interface ICheckBox {
    checked: boolean;
    onChecked: (e: any, checked: boolean) => void;
    className?: string;
}

const CheckBox = ({checked, className, onChecked}: ICheckBox) => {
    const onClicked = (e, isChecked: boolean) => {
        onChecked(e, isChecked);
    };

    return (
        <div className={classNames("checkbox__container", className)}>
            {checked ? (
                <RadioButtonCheckedRounded onClick={(e) => onClicked(e, false)} />
            ) : (
                <RadioButtonUncheckedRounded onClick={(e) => onClicked(e, true)} />
            )}
        </div>
    );
};

export default CheckBox;
