"use client";
import React, { useEffect, useState } from "react";
import styles from "./Clock.module.css";

const Clock = ({ lastOnline }: { lastOnline: number }) => {
  const lastOnlineDate = new Date(lastOnline * 1000);

  const formattedDate = lastOnlineDate.toLocaleString(undefined, {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  const [elapsed, setElapsed] = useState("00:00:00");

  useEffect(() => {
    const updateElapsed = () => {
      const diffSec = Math.floor(Date.now() / 1000 - lastOnline);
      const hrs = Math.floor(diffSec / 3600);
      const mins = Math.floor((diffSec % 3600) / 60);
      const secs = diffSec % 60;
      setElapsed(
        `${String(hrs).padStart(2, "0")}:${String(mins).padStart(
          2,
          "0"
        )}:${String(secs).padStart(2, "0")}`
      );
    };
    updateElapsed();
    const id = setInterval(updateElapsed, 1000);
    return () => clearInterval(id);
  }, [lastOnline]);

  return (
    <div aria-label="Clock" className={styles.clockContainer}>
      {/* Absolute formatted date/time */}
      <div
        aria-label={`Last seen at: ${formattedDate}`}
        className={styles.timeStampBlock}
      >
        Last seen at: {formattedDate}
      </div>

      <div className={styles.timeStampBlock}>
        Elapsed since last seen: <b>{elapsed}</b>
      </div>
    </div>
  );
};

export default Clock;
