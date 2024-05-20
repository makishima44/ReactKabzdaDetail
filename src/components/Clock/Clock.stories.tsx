import { Clock } from "./Clock";

export default {
  title: "Clock",
  component: Clock,
};

export const DigitalClockModeExample = () => {
  return (
    <>
      <Clock mode="digital" />
    </>
  );
};

export const AnalogClockModeExample = () => {
  return (
    <>
      <Clock mode="analog" />
    </>
  );
};
