import React, {useState} from "react";
import RadioButtonCheckedRounded from "@material-ui/icons/RadioButtonCheckedRounded";
import RadioButtonUncheckedRounded from "@material-ui/icons/RadioButtonUncheckedRounded";

interface ICheckBox {
    checked: boolean;
    onChecked: (e: any, checked: boolean) => void;
}

const CheckBox = ({checked, onChecked}: ICheckBox) => {
    const onClicked = (e, isChecked: boolean) => {
        onChecked(e, isChecked);
    };

    return (
        <div className="checkbox__container">
            {checked ? (
                <RadioButtonCheckedRounded onClick={(e) => onClicked(e, false)} />
            ) : (
                <RadioButtonUncheckedRounded onClick={(e) => onClicked(e, true)} />
            )}
        </div>
    );
};

export default CheckBox;
