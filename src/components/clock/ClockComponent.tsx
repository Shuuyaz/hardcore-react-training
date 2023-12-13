"use client";
import { DateTime } from "luxon";
import { FC } from "react";
import * as styles from "./ClockComponent.css";
import cx from "clsx";

type Props = {
  time: DateTime;
  locale: string;
  zone: string;
};

const ClockComponent: FC<Props> = ({ time, locale, zone }) => {
  const localTime = time.setLocale(locale).setZone(zone);
  const isNightTime = localTime.hour >= 17 || localTime.hour <= 7;
  const classes = cx(styles.clock, isNightTime && styles.nightTime);
  return (
    <div className={classes}>
      Time:{" "}
      {localTime.setLocale(locale).setZone(zone).toLocaleString({
        minute: "2-digit",
        hour: "2-digit",
        second: "2-digit"
      })}
    </div>
  );
};

export default ClockComponent;
