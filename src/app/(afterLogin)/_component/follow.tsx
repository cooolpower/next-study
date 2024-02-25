"use client";

import Image from "next/image";
import style from "./follow.module.css";

export default function Follow({ person, size, keyValue }) {
  const onFollow = () => {};

  return (
    <div className={style.container} key={keyValue}>
      <div className={style.userLogoSection}>
        <div className={style.userLogo}>
          <Image
            className={style.avatarImage}
            src={person.image}
            alt={person.name}
            width={size}
            height={size}
          />
        </div>
      </div>
      <div className={style.userInfo}>
        <div className={style.title}>{person.name}</div>
        <div className={style.count}>@{person.username}</div>
      </div>
      <div className={style.followButtonSection}>
        <button onClick={onFollow}>팔로우</button>
      </div>
    </div>
  );
}
