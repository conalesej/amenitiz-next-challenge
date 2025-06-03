import Link from "next/link";
import styles from "./page.module.css";

export default function NotFound() {
  return (
    <div className={styles.notFound}>
      <h1>There were no content found.</h1>
      <Link href="/gms">
        <span className={styles.link}>Go back to Grandmasters List</span>
      </Link>
    </div>
  );
}
