type AccorionPropsType = {
  titleValue: string;
  collapsed: boolean;
  onChange: () => void;
};

export function Accordion(props: AccorionPropsType) {
  console.log("Accorion rendering");

  return (
    <div>
      <AccordionTitle title={props.titleValue} onChange={props.onChange} />
      {!props.collapsed && <AccordionBody />}
    </div>
  );
}

type AccordionTitle = {
  title: string;
  onChange: () => void;
};

function AccordionTitle(props: AccordionTitle) {
  console.log("AccordionTitle rendering");
  return <h3 onClick={(event) => props.onChange()}>{props.title}</h3>;
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
