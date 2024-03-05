import { faker } from "@faker-js/faker";
import Link from "next/link";
import style from "./chatroom.module.css";
import React from "react";
import Image from "next/image";
import cx from "classnames";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import "dayjs/locale/ko";
import Backbutton from "@/app/_components/backbutton";
dayjs.locale("ko");
dayjs.extend(relativeTime);

export default function Chatroom() {
  const user = {
    id: "hero",
    nickname: "슈퍼맨",
    image: faker.image.avatar(),
  };

  const messages = [
    {
      messageId: 1,
      roomid: 123,
      id: "eric",
      content: "안녕하세요",
      creatad: new Date(),
    },
    {
      messageId: 2,
      roomid: 123,
      id: "tom",
      content: "안녕히가세요",
      creatad: new Date(),
    },
  ];
  return (
    <div className={style.main}>
      <div className={style.header}>
        <Backbutton />
        <div>
          <h2>{user.nickname}</h2>
        </div>
      </div>
      <Link href={user.nickname} className={style.userInfo}>
        <Image src={user.image} alt={user.id} width={64} height={64} />
        <div>
          <b>{user.nickname}</b>
        </div>
        <div>@{user.id}</div>
      </Link>
      <div className={style.list}>
        {messages.map((m) => {
          if (m.id === "eric") {
            return (
              <div
                key={m.messageId}
                className={cx(style.myMessage, style.message)}
              >
                <div className={style.content}>{m.content}</div>
                <div className={style.date}>
                  {dayjs(m.creatad).format("YYYY년 MM월 DD일 A HH시 mm분")}
                </div>
              </div>
            );
          }
          return (
            <div
              key={m.messageId}
              className={cx(style.yourMessage, style.message)}
            >
              <div className={style.content}>{m.content}</div>
              <div className={style.date}>
                {dayjs(m.creatad).format("YYYY년 MM월 DD일 A HH시 mm분")}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
