import React, { useEffect, useState } from "react";
import { Div, Header } from "./Timer.style";
const Timer = () => {
  const [days, setDays] = useState();
  const [hours, setHours] = useState();
  const [minutes, setMinutes] = useState();
  const [seconds, setSeconds] = useState();

  let interval;

  const startTimer = () => {
    const giveawayDate = new Date("Sep 30,2022").getTime();

    interval = setInterval(() => {
      const today = new Date().getTime();

      const countdown = giveawayDate - today;

      const gDay = Math.floor(countdown / (24 * 60 * 60 * 1000));

      const gHour = Math.floor(
        (countdown % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000)
      );

      const gMinute = Math.floor((countdown % (60 * 60 * 1000)) / (1000 * 60));

      const gSeconds = Math.floor((countdown % (60 * 1000)) / 1000);

      if (countdown < 0) {
        clearInterval(interval.current);
      } else {
        setDays(gDay);
        setHours(gHour);
        setMinutes(gMinute);
        setSeconds(gSeconds);
      }
    });
  };
  useEffect(() => {
    startTimer();
  });
  return (
    <>
      <Header>Time Left</Header>
      <Div>
        <div className="cont">
          <div>
            <h4>{days}</h4>
            <p>Days</p>
          </div>
          <span>:</span>
          <div>
            <h4>{hours}</h4>
            <p>Hours</p>
          </div>
          <span>:</span>
          <div>
            <h4>{minutes}</h4>
            <p>Minutes</p>
          </div>
          <span>:</span>
          <div>
            <h4>{seconds}</h4>
            <p>Seconds</p>
          </div>
        </div>
      </Div>
    </>
  );
};

Timer.defaultProps = {
  days: 10,
  hours: 10,
  minutes: 10,
  seconds: 10,
};
export default Timer;
