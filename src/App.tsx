import React, { useState } from "react";
import "./App.css";
import { Accordion } from "./components/Accordion/Accordion";
import { Rating, RatingValueType } from "./components/Rating/Rating";
import { OnOff } from "./components/OnOff/OnOff";
import { UncontrolledOnOff } from "./components/UncontrolledOnOff/UncontrolledOnOff";
import { UncontrolledAccordion } from "./components/UncontrolledAccordion/UncontrolledAccordion";
import { UncontrolledRating } from "./components/UncontrolledRating/UncontrolledRating";

function App() {
  console.log("App rendering");

  let [ratingValue, setRatingValue] = useState<RatingValueType>(4);
  let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false);
  let [switchON, setSwitchOn] = useState(false);

  return (
    <div className="APP">
      <Rating value={ratingValue} onClick={setRatingValue} />
      <OnOff on={switchON} onChange={setSwitchOn} />
      <UncontrolledRating />
      {/* <UncontrolledOnOff onChange={setSwitchOn} /> {switchON.toString()} */}
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
