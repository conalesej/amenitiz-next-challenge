import React from "react";
import Link from "next/link";
import styles from "./ProfileDetailItem.module.css";

const ProfileDetailItem = ({
  label,
  value,
  href,
}: {
  label: string;
  value: string | number;
  href?: string;
}) => {
  return (
    <div className={styles.item} aria-label={`${label}: ${value}`}>
      <div className={styles.label}>{label}:</div>
      {href ? (
        <Link
          href={href}
          className={styles.valueLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          🔗{value}
        </Link>
      ) : (
        <div className={styles.value}>{value}</div>
      )}
    </div>
  );
};

export default ProfileDetailItem;
