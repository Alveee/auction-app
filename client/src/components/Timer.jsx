import React, { useEffect, useState } from "react";

const Timer = ({ closeDate }) => {
  const calculateTimeLeft = () => {
    let difference = +new Date(closeDate) - +new Date();

    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearTimeout(timer);
  });

  const timerComponents = [];
  Object.keys(timeLeft).forEach((interval, index) => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
      <span key={index}>
        {timeLeft[interval]} {interval === "seconds" ? "" : ": "}
      </span>
    );
  });

  return (
    <>
      <span>Available Until</span>
      <p className="fs-3">
        {timerComponents.length ? (
          timerComponents
        ) : (
          <span>Bidding is closed!</span>
        )}
      </p>
    </>
  );
};

export default Timer;
