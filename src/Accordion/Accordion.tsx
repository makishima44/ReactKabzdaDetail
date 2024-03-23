type AccorionPropsType = {
  titleValue: string;
  collapsed: boolean;
  onClick: () => void;
};

export function Accordion(props: AccorionPropsType) {
  console.log("Accorion rendering");

  return (
    <div>
      <AccordionTitle title={props.titleValue} onClick={props.onClick} />
      {!props.collapsed && <AccordionBody />}
    </div>
  );
}

type AccordionTitle = {
  title: string;
  onClick: () => void;
};

function AccordionTitle(props: AccordionTitle) {
  console.log("AccordionTitle rendering");
  return <h3 onClick={props.onClick}>{props.title}</h3>;
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
