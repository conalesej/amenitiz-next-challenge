import React from "react";

import styles from "./Container.module.css";

const Container = ({
  children,
  direction = "column",
}: {
  children: React.ReactNode;
  direction?: "row" | "column";
}) => {
  return (
    <main className={`${styles.container} ${styles[direction]}`}>{children}</main>
  );
};

export default Container;
