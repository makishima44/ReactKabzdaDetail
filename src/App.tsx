import React, { useState } from "react";
import "./App.css";
import { Accordion } from "./Accordion/Accordion";
import { RatingValueType } from "./Rating/Rating";
import { OnOff } from "./OnOff/OnOff";
import { UncontrolledOnOff } from "./UncontrolledOnOff/UncontrolledOnOff";
import { UncontrolledAccordion } from "./UncontrolledAccordion/UncontrolledAccordion";

function App() {
  console.log("App rendering");

  let [ratingValue, setRatingValue] = useState<RatingValueType>(4);
  let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false);
  let [switchON, setSwitchOn] = useState(false);
  return (
    <div className="APP">
      <Accordion
        titleValue="Menu"
        collapsed={accordionCollapsed}
        onChange={() => setAccordionCollapsed(!accordionCollapsed)}
      />
      {/* <OnOff on={switchON} onChange={setSwitchOn} /> */}
      <UncontrolledOnOff onChange={setSwitchOn} /> {switchON.toString()}
      <UncontrolledAccordion titleValue="Start" />
    </div>
  );
}

type PagePropsType = {
  title: string;
};

function PageTitle(props: PagePropsType) {
  console.log("AppTitle rendering");
  return <h1>{props.title}</h1>;
}

export default App;
