import { useEffect, useState } from "react";
import s from "./Clock.module.css";

export type PropsType = {
  mode: string;
};

const get2digitsString = (num: number) => (num < 10 ? "0" + num : num);

export const Clock: React.FC<PropsType> = (props) => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    setInterval(() => {
      setDate(new Date());
    }, 1000);
  }, []);

  const seconds = date.getSeconds();
  const minutes = date.getMinutes();
  const hours = date.getHours();

  const secondsDegree = (seconds / 60) * 360;
  const minutesDegree = (minutes / 60) * 360 + (seconds / 60) * 6;
  const hoursDegree = (hours / 12) * 360 + (minutes / 60) * 30;

  return props.mode === "digital" ? (
    <div>
      <span>{get2digitsString(hours)}</span>:
      <span>{get2digitsString(minutes)}</span>:
      <span>{get2digitsString(seconds)}</span>
    </div>
  ) : (
    <div className={s.clock}>
      <div className={s.clockFace}>
        <div
          className={`${s.hand} ${s.hourHand}`}
          style={{ transform: ` translateX(-50%) rotate(${hoursDegree}deg)` }}
        />
        <div
          className={`${s.hand} ${s.minuteHand}`}
          style={{ transform: ` translateX(-50%) rotate(${minutesDegree}deg)` }}
        />
        <div
          className={`${s.hand} ${s.secondHand}`}
          style={{
            transform: ` translateX(-50%)  rotate(${secondsDegree}deg)`,
          }}
        />
      </div>
    </div>
  );
};
