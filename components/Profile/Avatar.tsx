import React from "react";
import Image from "next/image";
import styles from "./Avatar.module.css";

const Avatar = ({ src, alt }: { src: string | null; alt: string }) => {
  return (
    <div className={styles.avatar} aria-label="Profile Avatar">
      <Image
        fill
        src={src || "/next.svg"}
        style={{ objectFit: "cover" }}
        sizes="(max-width: 768px) 100vw, 200px"
        alt={alt}
        quality={50}
      />
    </div>
  );
};

export default Avatar;
