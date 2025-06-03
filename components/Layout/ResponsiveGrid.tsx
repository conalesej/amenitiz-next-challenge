import React from "react";
import Link from "next/link";

import styles from "./ResponsiveGrid.module.css";

interface ResponsiveGridProps {
  children: React.ReactNode;
}

const ResponsiveGridContainer = ({ children }: ResponsiveGridProps) => {
  return <ul className={styles.grid}>{children}</ul>;
};

const ResponsiveGridItem = ({ username }: { username: string }) => {
  return (
    <li
      aria-label={`Grandmaster Profile of ${username}`}
      className={styles.gridItem}
    >
      <Link
        href={`/gms/${username}`}
        className={styles.link}
        aria-label={`Link to Grandmaster Profile of ${username}`}
      >
        {username}
      </Link>
    </li>
  );
};

export default {
  Container: ResponsiveGridContainer,
  Item: ResponsiveGridItem,
};
