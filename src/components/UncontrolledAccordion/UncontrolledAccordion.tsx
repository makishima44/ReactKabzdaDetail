import { useReducer, useState } from "react";
import { TOGGLE_COLLAPSED, reducer } from "./reducer";

export type AccorionPropsType = {
  titleValue: string;
};

export function UncontrolledAccordion(props: AccorionPropsType) {
  console.log("UncontrolledAccorion rendering");

  //let [collapsed, setCollapsed] = useState(true);
  let [state, dispatch] = useReducer(reducer, { collapsed: false });

  return (
    <div>
      {/* <AccordionTitle
        title={props.titleValue}
        onClick={() => {
          setCollapsed(!collapsed);
        }}
      /> */}
      <AccordionTitle
        title={props.titleValue}
        onClick={() => {
          dispatch({ type: TOGGLE_COLLAPSED });
        }}
      />

      {!state.collapsed && <AccordionBody />}
    </div>
  );
}

type AccordionTitle = {
  title: string;
  onClick: () => void;
};

function AccordionTitle(props: AccordionTitle) {
  console.log("AccordionTitle rendering");
  return (
    <h3
      onClick={() => {
        props.onClick();
      }}
    >
      {props.title}
    </h3>
  );
}

function AccordionBody() {
  console.log("AccordionBody rendering");
  return (
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
    </ul>
  );
}
