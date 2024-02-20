"use client";

import Image from "next/image";
import style from "./avatar.module.css";

export default function Avatar({ person, size, keyValue }) {
  return (
    <div className={style.avatarSection} key={keyValue}>
      <Image
        className={style.avatarImage}
        src={person.image}
        alt={person.name}
        width={size}
        height={size}
      />
      <div className={style.avatar}>
        <h4>{person.name}</h4>
        <p className={style.avatarAddress}>{person.address}</p>
        <p className={style.avatarEmail}>{person.email}</p>
      </div>
    </div>
  );
}
