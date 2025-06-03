import React from "react";
import Link from "next/link";
import Avatar from "./Avatar";
import Card from "../UI/Card";
import Clock from "./Clock";
import styles from "./ProfileHeader.module.css";

const ProfileHeader = ({
  username,
  avatarUrl,
  title,
  href,
  lastOnline,
}: {
  username: string;
  avatarUrl: string;
  title?: string;
  href: string;

  lastOnline: number;
}) => {
  return (
    <Card>
      <div className={styles.header}>
        <Avatar src={avatarUrl} alt={username} />
        <div>
          {title && (
            <div aria-label={`Title of ${username}`} className={styles.title}>
              {title}
            </div>
          )}
          <div className={styles.username} aria-label="Username">
            <Link href={href} target="_blank" rel="noopener noreferrer">
              🌐{username}
            </Link>
          </div>
        </div>
        <Clock lastOnline={lastOnline} />
      </div>
    </Card>
  );
};

export default ProfileHeader;
