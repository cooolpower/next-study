import style from "./post.module.css";
import Link from "next/link";
import ActionButton from "@/app/(afterLogin)/_component/actionbutton";
import Image from "next/image";

// for the dayjs
import dayjs from "dayjs"; // dayjs 호출
import relativeTime from "dayjs/plugin/relativeTime"; // dayjs 상대시간 플러그인 호출
import "dayjs/locale/ko"; // dayjs 한글 플러그인 호출

dayjs.locale("ko");
dayjs.extend(relativeTime);

export default function Post() {
  const target = {
    user: {
      id: "cooolpower",
      image: "/5Udwvqim.jpg",
      nickname: "라떼아빠",
    },
    content: "인프런 강의 따라하기",
    createdAt: new Date(),
    Images: [],
  };

  return (
    <article className={style.post}>
      <div className={style.postWrapper}>
        <div className={style.postUserSection}>
          <Link href={`/${target.user.id}`} className={style.postUserImage}>
            <Image
              src={target.user.image}
              width={40}
              height={40}
              alt={target.user.nickname}
            />
            <div className={style.postShade} />
          </Link>
        </div>
        <div className={style.postBody}>
          <div className={style.postMeta}>
            <Link href={`/${target.user.id}`}>
              <span className={style.postUserName}>{target.user.nickname}</span>
              &nbsp;
              <span className={style.postUserId}>@{target.user.id}</span>
              &nbsp; · &nbsp;
            </Link>
            <span className={style.postDate}>
              {dayjs(target.createdAt).fromNow(true)}
            </span>
          </div>
          <div>{target.content}</div>
          <div className={style.postImageSection}></div>
          <ActionButton />
        </div>
      </div>
    </article>
  );
}
