import React, { useState } from "react";

type OnOffPropsType = {
  onChange: (on: boolean) => void;
};

export const UncontrolledOnOff = (props: OnOffPropsType) => {
  console.log("OnOff rendering");
  let [on, setOn] = useState(false);

  const blockStyle = {
    margin: "20px",
  };

  const onStyle = {
    width: "30px",
    height: "20px",
    border: "1px solid black",
    display: "inline-block",
    padding: "5px",
    backgroundColor: on ? "yellowGreen" : "white",
  };

  const offStyle = {
    width: "30px",
    height: "20px",
    border: "1px solid black",
    display: "inline-block",
    marginLeft: "5px",
    padding: "5px",
    backgroundColor: on ? "white" : "red",
  };

  const indicatorStyle = {
    width: "10px",
    height: "10px",
    borderRadius: "5px",
    border: "1px solid black",
    display: "inline-block",
    marginLeft: "10px",
    padding: "5px",
    backgroundColor: on ? "yellowGreen" : "red",
  };

  const onClicked = () => {
    setOn(true);
    props.onChange(true);
  };

  const offClicked = () => {
    setOn(false);
    props.onChange(false);
  };

  return (
    <div style={blockStyle}>
      <div style={onStyle} onClick={onClicked}>
        On
      </div>
      <div style={offStyle} onClick={offClicked}>
        Off
      </div>
      <div style={indicatorStyle}></div>
    </div>
  );
};
