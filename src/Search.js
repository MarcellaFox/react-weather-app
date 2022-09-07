import React, { useState, useRef } from "react";
import { useEffect } from "react";
import "./Search.css";
import SearchIcon from "./SearchIcon";

export default function Search(props) {
  const targetRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const showSearchInput = isHovered || isFocused;

  useEffect(() => {
    targetRef.current.value = "";
  }, [showSearchInput]);

  return (
    <div
      className="Search"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      style={{ width: showSearchInput ? "50%" : null }}
    >
      <form onSubmit={props.onSubmit}>
        {" "}
        <input
          type="search"
          ref={targetRef}
          showSearchInput={showSearchInput}
          style={{ display: showSearchInput ? "block" : "none" }}
          onChange={props.onChange}
        />
      </form>

      <SearchIcon />
    </div>
  );
}
