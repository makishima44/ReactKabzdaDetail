import { Clock } from "./Clock";

export default {
  title: "Clock",
  component: Clock,
};

export const BaseExample = () => {
  return (
    <>
      <Clock mode="digital" />
      <Clock mode="asd" />
    </>
  );
};
