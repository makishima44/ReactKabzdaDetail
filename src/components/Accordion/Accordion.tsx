import React from "react";

type ItemType = {
  title: string;
  value: any;
};

type AccorionPropsType = {
  titleValue: string;
  collapsed: boolean;
  onChange: () => void;
  items: ItemType[];
  onClick: (value: any) => void;
};

export function Accordion(props: AccorionPropsType) {
  console.log("Accorion rendering");

  return (
    <div>
      <AccordionTitle title={props.titleValue} onChange={props.onChange} />
      {!props.collapsed && (
        <AccordionBody items={props.items} onClick={props.onClick} />
      )}
    </div>
  );
}

//------------------------------------------------------------------------------//

type AccordionTitle = {
  title: string;
  onChange: () => void;
};

const AccordionTitle = React.memo(AccordionTitleMemo);

function AccordionTitleMemo(props: AccordionTitle) {
  console.log("AccordionTitle rendering");
  return <h3 onClick={(event) => props.onChange()}>{props.title}</h3>;
}

//---------------------------------------------------------------------------//

type AccorionBodyPropsType = {
  items: ItemType[];
  onClick: (value: any) => void;
};

const AccordionBody = React.memo(AccordionBodyMemo);

function AccordionBodyMemo(props: AccorionBodyPropsType) {
  console.log("AccordionTitle rendering");
  return (
    <ul>
      {props.items.map((el, index) => (
        <li
          key={index}
          onClick={() => {
            props.onClick(el.value);
          }}
        >
          {el.title}
        </li>
      ))}
    </ul>
  );
}
