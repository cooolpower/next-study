"use client";

import Image from "next/image";
import style from "./logoutbutton.module.css";

export default function Logoutbutton() {
  const me = {
    id: "cooolpower",
    nickname: "라떼아빠",
    image: "/5Udwvqim.jpg",
  };
  const onLogOut = () => {
    alert("logouted");
  };

  return (
    <button className={style.logOutButton} onClick={onLogOut}>
      <div className={style.logOutUserImage}>
        <Image src={me.image} alt={me.id} width={40} height={40} />
      </div>
      <div className={style.logOutUserName}>
        <div>{me.nickname}</div>
        <div>@{me.id}</div>
      </div>
    </button>
  );
}
