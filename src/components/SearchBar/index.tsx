import React, {useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearch} from "@fortawesome/free-solid-svg-icons";
import "./style.scss";

function SearchBar() {
    const [isFocused, setIsFocused] = useState<boolean>(false);

    return (
        <div
            className={`search__container ${isFocused && "focused"}`}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
        >
            {!isFocused && (
                <span className="search__icon">
                    <FontAwesomeIcon color="#0078d4" icon={faSearch} />
                </span>
            )}
            <input className="search__input" placeholder="Search"></input>
        </div>
    );
}

export default SearchBar;
