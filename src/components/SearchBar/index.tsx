import React, {useState} from "react";
import SearchIcon from "@material-ui/icons/Search";

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
                <div className="search__icon">
                    <SearchIcon className="search-icon__icon" />
                </div>
            )}
            <input className="search__input" placeholder="Search"></input>
        </div>
    );
}

export default SearchBar;
