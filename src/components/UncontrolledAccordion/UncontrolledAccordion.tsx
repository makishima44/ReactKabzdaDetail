import { useState } from "react";

type AccorionPropsType = {
  titleValue: string;
};

export function UncontrolledAccordion(props: AccorionPropsType) {
  console.log("Accorion rendering");

  let [collapsed, setCollapsed] = useState(true);

  return (
    <div>
      <AccordionTitle
        title={props.titleValue}
        onClick={() => {
          setCollapsed(!collapsed);
        }}
      />

      {!collapsed && <AccordionBody />}
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
  console.log("AccordionTitle rendering");
  return (
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
    </ul>
  );
}
