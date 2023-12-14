import React from "react";
import { Link, NavLink } from "react-router-dom";
import { AppState } from "./context/AppProvider";

const LIstItem = (props) => {
  const { opnMblNav, setOpnMblNav } = AppState();
  return (
    <NavLink
      onClick={() => setOpnMblNav(false)}
      to={props.to}
      style={{ padding: "0 32px", lineHeight: "50px" }}
      className={`${props.borderDir} fontFadeColor ${({ isActive }) =>
        isActive ? "active" : ""}`}
    >
      {props.name}
    </NavLink>
  );
};

export default LIstItem;
