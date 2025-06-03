import React from "react";
import Card from "./Card";
import styles from "./Empty.module.css";

interface EmptyProps {
  title?: string;
  message?: string;
}

const Empty = ({
  title = "No Data Available",
  message = "Please try again later.",
}: EmptyProps) => {
  return (
    <Card>
      <section className={styles.emptyBox}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.message}>{message}</p>
      </section>
    </Card>
  );
};

export default Empty;
