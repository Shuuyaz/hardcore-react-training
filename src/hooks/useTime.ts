import { DateTime } from "luxon";
import { useEffect, useState } from "react";

const useTime = (startTime: number) => {
  const [currentTime, setCurrentTime] = useState(
    DateTime.fromMillis(startTime)
  );
  useEffect(() => {
    console.log("KAKKA");
  });
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime((previous) => previous.plus({ seconds: 1 }));
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return currentTime;
};

export default useTime;
