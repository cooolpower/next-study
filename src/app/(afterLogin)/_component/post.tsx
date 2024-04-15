import style from "./post.module.css";
import Link from "next/link";
import Image from "next/image";
import ActionButton from "@/app/(afterLogin)/_component/actionbutton";
import Postarticle from "@/app/(afterLogin)/_component/postarticle";
import Postimages from "@/app/(afterLogin)/_component/postimages";

// for the dayjs
import dayjs from "dayjs"; // dayjs 호출
import relativeTime from "dayjs/plugin/relativeTime"; // dayjs 상대시간 플러그인 호출
import "dayjs/locale/ko"; // dayjs 한글 플러그인 호출
import { faker } from "@faker-js/faker";

dayjs.locale("ko");
dayjs.extend(relativeTime);

type Props = {
  noImage?: boolean;
};

export default function Post({ noImage }: Props) {
  const target = {
    postid: 1,
    user: {
      id: "jameskim",
      image: "/5Udwvqim.jpg",
      nickname: "라떼아빠",
    },
    content: "인프런 강의 따라하기",
    createdAt: new Date(),
    images: [] as any[],
  };

  if (Math.random() > 0 && !noImage) {
    target.images.push(
      { imageId: 1, link: faker.image.urlPicsumPhotos() },
      { imageId: 2, link: faker.image.urlPicsumPhotos() },
      { imageId: 3, link: faker.image.urlPicsumPhotos() },
      { imageId: 4, link: faker.image.urlPicsumPhotos() }
    );
  }

  return (
    <Postarticle post={target}>
      <div className={style.postWrapper}>
        <div className={style.postUserSection}>
          <Link href={`/${target.user.id}`} className={style.postuserImage}>
            <Image
              src={target.user.image}
              alt={target.user.nickname}
              width={40}
              height={40}
            />
            <div className={style.postShade} />
          </Link>
        </div>
        <div className={style.postBody}>
          <div className={style.postMeta}>
            <Link href={`/${target.user.id}`}>
              <span className={style.postuserName}>{target.user.nickname}</span>
              &nbsp;
              <span className={style.postuserId}>@{target.user.id}</span>
              &nbsp; · &nbsp;
            </Link>
            <span className={style.postDate}>
              {dayjs(target.createdAt).fromNow(true)}
            </span>
          </div>
          <div>{target.content}</div>
          <div>
            <Postimages post={target} />
          </div>
          <ActionButton />
        </div>
      </div>
    </Postarticle>
  );
}
