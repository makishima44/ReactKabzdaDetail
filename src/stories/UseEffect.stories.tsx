import { log } from "console";
import { useEffect, useState } from "react";

export default {
  title: "useEffect demo",
};

export const SimpleExample = () => {
  const [fake, setFake] = useState(1);
  const [counter, setCounter] = useState(1);

  console.log("SimpleExample");

  useEffect(() => {
    console.log("useEffect every render");
    document.title = counter.toString();
  });

  useEffect(() => {
    console.log("useEffect only first render(componentDidMout)");
    document.title = counter.toString();
  }, []);

  useEffect(() => {
    console.log("useEffect first render and every counter change");
    document.title = counter.toString();
  }, [counter]);

  return (
    <>
      Hello,{counter}
      {fake}
      <button onClick={() => setFake(fake + 1)}>fake+</button>
      <button onClick={() => setCounter(counter + 1)}>counter+</button>
    </>
  );
};

export const SetTimeoutExample = () => {
  const [fake, setFake] = useState(1);
  const [counter, setCounter] = useState(1);

  console.log("SetTimeoutExample");

  useEffect(() => {
    setInterval(() => {
      // console.log("tick: " + counter);
      setCounter((state) => state + 1);
    }, 1000);
  }, []);

  return (
    <>
      Hello, counter: {counter} - fake: {fake}
    </>
  );
};

export const Watch = () => {
  const getTime = () => {
    const x = new Date();
    return x.getHours() + ":" + x.getMinutes() + ":" + x.getSeconds();
  };

  const [watch, setWatch] = useState(getTime());

  useEffect(() => {
    console.log("useeffect");
    setInterval(() => {
      console.log("setInterval");
      setWatch(getTime());
    }, 1000);
  }, []);

  return <>{watch}</>;
};
