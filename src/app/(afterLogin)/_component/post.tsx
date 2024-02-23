import style from "./post.module.css"
import Link from "next/link";
import ActionButton from "@/app/(afterLogin)/_component/actionbutton";

// for the dayjs
import dayjs from 'dayjs'; // dayjs 호출
import relativeTime from 'dayjs/plugin/relativeTime'; // dayjs 상대시간 플러그인 호출
import 'dayjs/locale/ko'; // dayjs 한글화 

dayjs.locale('ko');
dayjs.extend(relativeTime);


export default function Post(){
  const target = {
   user: {
    id: 'cooolpower',
    image: './5Udwvqim.jpg',
    nickname: '라떼아빠'
   },
   content: '인프런 강의 따라하기', 
   createdAt: new Date(),
   Images: []
  }

  return (
    <article className={style.post}>
      <div className={style.postWrapper}>
        <div className={style.postUserSection}>
          <Link href={`/${target.User.id}`} className={style.postUserImage}>
            <img src={target.User.image} alt={target.User.nickname}/>
            <div className={style.postShade} />
          </Link>
        </div>
        <div className={style.postBody}>
          <div className={style.postMeta}>
            <Link href='/'>
              {/* {`/${target.User.id}`} */}
              <span className={style.postUserName}>{target.User.nickname}</span>
              &nbsp;
              <span className={style.postUserId}>@{target.User.id}</span>
              &nbsp;
              ·
              &nbsp;
            </Link>
            <span className={style.postDate}>{dayjs(target.createdAt).fromNow(true)}</span>
          </div>
          <div>{target.content}</div>
          <div className={style.postImageSection}>

          </div>
          <ActionButton />
        </div>
      </div>
    </article>
  )
}