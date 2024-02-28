import { faker } from "@faker-js/faker";
import style from "./messages.module.css";
import Image from "next/image";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import "dayjs/locale/ko";

dayjs.locale("ko");
dayjs.extend(relativeTime);

function Room() {
  const user = {
    id: "hero",
    nickname: "영웅",
    Messages: [
      { content: "안녕", createdat: new Date() },
      { content: "안녕하세요", createdat: "new Date()" },
    ],
  };

  return (
    <div className={style.room}>
      <div className={style.roomuserimage}>
        <Image src={faker.image.avatar()} alt="" width={40} height={40} />
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
    </div>
  );
}

export default function Message() {
  return (
    <main className={style.main}>
      <div className={style.header}>
        <h3>쪽지</h3>
      </div>
      <Room />
      <Room />
      <Room />
      <Room />
      <Room />
    </main>
  );
}
