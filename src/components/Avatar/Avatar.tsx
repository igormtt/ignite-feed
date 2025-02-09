import { InputHTMLAttributes } from "react";
import styles from "./Avatar.module.css";

interface UIAvatar extends InputHTMLAttributes<HTMLImageElement> {
  avatar: string;
  hasBorder?: boolean;
}

export default function Avatar({ hasBorder = true, ...props }: UIAvatar) {
  
  return (
    <img
      className={hasBorder ? styles.avatarWithBorder : styles.avatar}
      src={props.avatar}
      {...props}
    />
  );
}
