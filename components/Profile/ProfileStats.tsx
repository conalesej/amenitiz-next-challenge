import React from "react";
import styles from "./ProfileStats.module.css";
import ProfileDetailItem from "./ProfileDetailItem";
import Card from "../UI/Card";
import { formatTimestamp, getCountryName, getIdentifier } from "@/utils/util";
import { PlayerProfile } from "@/types/chess";

const ProfileStats = (playerProfile: PlayerProfile) => {
  return (
    <Card>
      <div className={styles.statsBox} aria-label="Player Profile Stats">
        {Object.entries(playerProfile).map(([key, value]) => {
          if (
            ["username", "avatar", "@id", "last_online", "name"].includes(key)
          ) {
            return null;
          }

          switch (key) {
            case "url":
              return (
                <ProfileDetailItem
                  key={key}
                  label="Profile URL"
                  value={value}
                  href={value}
                />
              );

            case "verified":
              return (
                <ProfileDetailItem
                  key={key}
                  label="Verified"
                  value={value ? "✅ Yes" : "❌ No"}
                />
              );

            case "is_streamer":
              return (
                <ProfileDetailItem
                  key={key}
                  label="Streaming"
                  value={value ? "✅ Yes" : "❌ No"}
                />
              );

            case "streaming_platforms":
              return (
                <ProfileDetailItem
                  key={key}
                  label="Streaming Platforms"
                  value={
                    value && Array.isArray(value) && value.length > 0
                      ? value.join(", ")
                      : "Unknown"
                  }
                />
              );

            case "country": {
              const code = getIdentifier(value);
              const countryName = getCountryName(code) || code || "Unknown";
              return (
                <ProfileDetailItem
                  key={key}
                  label="Country"
                  value={countryName}
                />
              );
            }

            case "status":
              return (
                <ProfileDetailItem
                  key={key}
                  label="Status"
                  value={value === "premium" ? "🪙 Premium" : `⚱️ ${value}`}
                />
              );

            case "joined":
              return (
                <ProfileDetailItem
                  key={key}
                  label="Joined"
                  value={formatTimestamp(value as number)}
                />
              );

            default: {
              // For any other key (e.g., followers, league, title, player_id, etc.)
              // Format label from snake_case or simple key
              const label = key
                .replace(/_/g, " ")
                .replace(/^\w/, (c) => c.toUpperCase());
              return (
                <ProfileDetailItem
                  key={key}
                  label={label}
                  value={String(value)}
                />
              );
            }
          }
        })}
      </div>
    </Card>
  );
};

export default ProfileStats;
