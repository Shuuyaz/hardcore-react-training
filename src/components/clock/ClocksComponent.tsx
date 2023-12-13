"use client";
import { FC } from "react";
import ClockComponent from "./ClockComponent";
import useTime from "@/hooks/useTime";

type Props = {
  serverTime: number;
};

const clockConfigs = [
  {
    zone: "Europe/Helsinki",
    locale: "fi-Fi"
  },
  {
    zone: "Asia/Seoul",
    locale: "ko-kr"
  }
];

const Clocks: FC<Props> = ({ serverTime }) => {
  const time = useTime(serverTime);
  return (
    <div>
      {clockConfigs.map((cc, index) => {
        return (
          <ClockComponent
            key={`KEY_${index}`}
            zone={cc.zone}
            locale={cc.locale}
            time={time}
          />
        );
      })}
    </div>
  );
};

export default Clocks;
