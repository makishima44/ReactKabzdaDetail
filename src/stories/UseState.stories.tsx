import { useMemo, useState } from "react";

export default {
  title: "useState demo",
};

function generationData() {
  console.log("generationData");
  return 1231231241;
}

export const Example1 = () => {
  console.log("Example1");

  const [counter, setCounter] = useState(generationData);

  const changer = (state: number) => {
    return state + 1;
  };

  return (
    <>
      <button onClick={() => setCounter(changer)}>+</button>
      {counter}
    </>
  );
};
