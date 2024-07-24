import { useState, useRef } from "react";
import DisplayComponent from "./DisplayComponent";
import BtnComponent from "./BtnComponent";

const Display = () => {
  const [time, setTime] = useState({ s: 0, m: 0, h: 0 });
  const intervalRef = useRef(null);
  const [status, setStatus] = useState(0);
  // Not started = 0
  // started = 1
  // stopped = 2

  const start = () => {
    if (intervalRef.current) return;
    intervalRef.current = setInterval(run, 1000);
    setStatus(1);
    console.log("hello");
  };

  const run = () => {
    setTime((prevTime) => {
      let { s, m, h } = prevTime;

      s++;
      if (s === 60) {
        s = 0;
        m++;
      }
      if (m === 60) {
        m = 0;
        h++;
      }

      return { s, m, h };
    });
  };

  const stop = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
    setStatus(2);
  };

  const reset = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
    setStatus(0);
    setTime({ s: 0, m: 0, h: 0 });
  };

  const resume = () => start();

  return (
    <div className="wrapper">
      <main className="mainSection">
        <div className="stopwatch">
          <DisplayComponent time={time} />
          <BtnComponent
            status={status}
            resume={resume}
            reset={reset}
            stop={stop}
            start={start}
          />
        </div>
      </main>
    </div>
  );
};

export default Display;
