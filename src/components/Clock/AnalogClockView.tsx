import { ClockViewPropsType } from "./Clock";
import s from "./Clock.module.css";

export const AnalogClockView = ({ date }: ClockViewPropsType) => {
  const seconds = date.getSeconds();
  const minutes = date.getMinutes();
  const hours = date.getHours();

  const secondsDegree = (seconds / 60) * 360;
  const minutesDegree = (minutes / 60) * 360 + (seconds / 60) * 6;
  const hoursDegree = (hours / 12) * 360 + (minutes / 60) * 30;

  return (
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
