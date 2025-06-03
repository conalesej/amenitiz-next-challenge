import React from "react";
import Link from "next/link";
import styles from "./BackButton.module.css";

const BackButton = () => {
  return (
    <Link
      className={styles.backButton}
      aria-label="Back to Grandmasters"
      href="/gms"
      role="button"
    >
      <span className={styles.icon}>←</span>
      Back to Grandmasters
    </Link>
  );
};

export default BackButton;
