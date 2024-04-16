import { action } from "@storybook/addon-actions";
import { Accordion } from "./Accordion";
import { useState } from "react";

export default {
  component: Accordion,
};

const onCHangeCallpack = action("хуй");
const onClickCallback = action("some item was clicked");

export const CollapsedAccordion = () => {
  return (
    <Accordion
      titleValue={"Collapsed Accordion"}
      collapsed={true}
      onChange={onCHangeCallpack}
      items={[]}
      onClick={onClickCallback}
    />
  );
};

export const OpenedAccordion = () => {
  return (
    <Accordion
      titleValue={"Opened Accordion"}
      collapsed={false}
      onChange={() => {}}
      items={[
        { title: "Dimych", value: 1 },
        { title: "Valera", value: 2 },
        { title: "Artem", value: 3 },
        { title: "Victor", value: 4 },
      ]}
      onClick={onClickCallback}
    />
  );
};

export const AccordionDemo = () => {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <Accordion
      titleValue={"Accordion"}
      collapsed={collapsed}
      onChange={() => {
        setCollapsed(!collapsed);
      }}
      items={[
        { title: "Dimych", value: 1 },
        { title: "Valera", value: 2 },
        { title: "Artem", value: 3 },
        { title: "Victor", value: 4 },
      ]}
      onClick={onClickCallback}
    />
  );
};
