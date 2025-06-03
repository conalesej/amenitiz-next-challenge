import React from "react";
import styles from "./Card.module.css";

const Card = ({ children }: { children: React.ReactNode }) => {
  return (
    <section aria-label="Card" className={styles.card}>
      {children}
    </section>
  );
};

export default Card;
