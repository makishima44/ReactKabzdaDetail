import React, { useState } from "react";

type OnOffPropsType = {
  on: boolean;
  onChange: (value: boolean) => void;
};

export const OnOff = (props: OnOffPropsType) => {
  console.log("OnOff rendering");

  const blockStyle = {
    margin: "20px",
  };

  const onStyle = {
    width: "30px",
    height: "20px",
    border: "1px solid black",
    display: "inline-block",
    padding: "5px",
    backgroundColor: props.on ? "yellowGreen" : "white",
  };

  const offStyle = {
    width: "30px",
    height: "20px",
    border: "1px solid black",
    display: "inline-block",
    marginLeft: "5px",
    padding: "5px",
    backgroundColor: props.on ? "white" : "red",
  };

  const indicatorStyle = {
    width: "10px",
    height: "10px",
    borderRadius: "5px",
    border: "1px solid black",
    display: "inline-block",
    marginLeft: "10px",
    padding: "5px",
    backgroundColor: props.on ? "yellowGreen" : "red",
  };

  return (
    <div style={blockStyle}>
      <div
        style={onStyle}
        onClick={() => {
          props.onChange(true);
        }}
      >
        On
      </div>
      <div
        style={offStyle}
        onClick={() => {
          props.onChange(false);
        }}
      >
        Off
      </div>
      <div style={indicatorStyle}></div>
    </div>
  );
};
