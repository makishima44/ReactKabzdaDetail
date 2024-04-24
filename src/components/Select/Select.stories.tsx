import { action } from "@storybook/addon-actions";
import { Select } from "./Select";
import { useMemo, useState } from "react";

export default {
  title: "Select",
  component: Select,
};

export const WithValue = () => {
  const [value, setValue] = useState("2");
  return (
    <Select
      value={value}
      onChange={setValue}
      items={[
        { title: "Minsk", value: "1" },
        { title: "Moscow", value: "2" },
        { title: "Kiev", value: "3" },
      ]}
    />
  );
};

export const WithoutValue = () => {
  const [value, setValue] = useState(null);

  return (
    <Select
      onChange={setValue}
      value={value}
      items={[
        { title: "Minsk", value: "1" },
        { title: "Moscow", value: "2" },
        { title: "Kiev", value: "3" },
      ]}
    />
  );
};

export const HelpsMemoExpample = () => {
  console.log("HelpsMemoExpample");
  const [value1, setValue1] = useState(null);
  const [value2, setValue2] = useState(null);
  const [value3, setValue3] = useState(null);
  const [counter, setCounter] = useState(0);

  const [city, setCity] = useState([
    { value: "1", title: "Minsk", countryId: 1 },
    { value: "2", title: "Mogilev", countryId: 1 },
    { value: "3", title: "Vitebsk", countryId: 1 },
    { value: "4", title: "Moscow", countryId: 2 },
    { value: "5", title: "Rostov", countryId: 2 },
    { value: "6", title: "SPT", countryId: 3 },
    { value: "7", title: "Tokyo", countryId: 3 },
    { value: "8", title: "Kyoto", countryId: 3 },
    { value: "9", title: "Nagasaki", countryId: 3 },
  ]);

  const BelarusCity = useMemo(() => {
    console.log("BelarusCity");
    return city.filter((u) => u.countryId === 1);
  }, [city]);
  const RussianCity = useMemo(() => {
    console.log("BelarusCity");
    return city.filter((u) => u.countryId === 2);
  }, [city]);

  const JapanCity = useMemo(() => {
    console.log("BelarusCity");
    return city.filter((u) => u.countryId === 3);
  }, [city]);

  // const JapanCity = city.filter((u) => {
  //   console.log("JapanCity");
  //   return u.countryId === 3;
  // });

  return (
    <div style={{ display: "flex" }}>
      <Select onChange={setValue1} value={value1} items={BelarusCity} />
      <hr />
      <Select onChange={setValue2} value={value2} items={RussianCity} />
      <hr />
      <Select onChange={setValue3} value={value3} items={JapanCity} />
    </div>
  );
};
