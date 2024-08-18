import React, { useRef, useState, useEffect } from "react";
import { Fireworks } from "@fireworks-js/react";
// import { Button } from "@/components/ui/button";

export function FireWorks() {
  const [isRunning, setIsRunning] = useState(false);
  const ref = useRef(null);

  const toggle = () => {
    if (!ref.current) return;
    if (isRunning) {
      ref.current.stop();
    } else {
      ref.current.start();
    }
    setIsRunning(!isRunning);
  };

  return (
    <div className="h-screen w-screen">
      <div className="flex justify-center items-center ">
        <button onClick={toggle}>
          {isRunning ? "Stop" : "Start"} Fireworks
        </button>
        <button onClick={() => ref.current?.clear()}>Clear</button>
      </div>
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          // zIndex: 1,
        }}
      >
        <Fireworks
          ref={ref}
          options={{ opacity: 0.1 }}
          style={{
            width: "100%",
            height: "100%",
            background: "transparent",
            delay: "0.05",
            // zIndex: 1,
            // opacity:
          }}
        />
      </div>
    </div>
  );
}

export default FireWorks;
