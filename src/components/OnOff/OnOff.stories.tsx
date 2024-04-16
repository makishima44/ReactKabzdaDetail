import { useState } from "react";
import { OnOff } from "./OnOff";
import { action } from "@storybook/addon-actions";

export default {
  title: "OnOff stories",
  component: OnOff,
};

const callback = action("on or off clicked");

export const OnMod = () => {
  return <OnOff on={true} onChange={callback} />;
};

export const OffMod = () => {
  return <OnOff on={false} onChange={callback} />;
};

export const RatingChanging = () => {
  const [value, setValue] = useState<boolean>(true);
  return <OnOff on={value} onChange={setValue} />;
};
