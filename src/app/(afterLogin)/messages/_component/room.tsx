"use client";

import style from "@/app/(afterLogin)/messages/messages.module.css";
import { faker } from "@faker-js/faker";
import { useRouter } from "next/navigation";
import Image from "next/image";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import "dayjs/locale/ko";

dayjs.locale("ko");
dayjs.extend(relativeTime);

export default function Room() {
  const router = useRouter();
  const user = {
    id: "hero",
    nickname: "영웅",
    Messages: [
      { roomid: 12, content: "안녕", createdat: new Date() },
      { roomid: 34, content: "안녕하세요", createdat: "new Date()" },
    ],
  };

  const onClick = () => {
    router.push(`/messages/${user.Messages.at(-1)?.roomid}`);
  };

  return (
    <div className={style.room} onClick={onClick}>
      <div className={style.roomuserimage}>
        <Image src={faker.image.avatar()} alt="" width={40} height={40} />
      </div>
      <div className={style.roomchatinfo}>
        <div className={style.roomuserinfo}>
          <b>{user.nickname}</b>
          &nbsp;
          <span>@{user.id}</span>
          &nbsp; · &nbsp;
          <span className={style.postdate}>
            {dayjs(user.Messages?.at(-1)?.createdat).fromNow(true)}
          </span>
        </div>
        <div className={style.roomlastchat}>
          {user.Messages?.at(-1)?.content}
        </div>
      </div>
    </div>
  );
}
