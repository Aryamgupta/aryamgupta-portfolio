import React from "react";

const ContactLinks = (props) => {
  return (
    <a
      href={props.link}
      style={{
        display: "flex",
        flexDirection: "row",
        fontSize: "14px",
        alignItems: "center",
        paddingLeft: "20px",
        height: "30px",
        marginTop: "10px",
      }}
    >
      {props.linkIcon}{" "}
      <span style={{ padding: "0 0px 0 10px  " }}>{props.linkTitle}</span>
    </a>
  );
};

export default ContactLinks;
