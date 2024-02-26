"use client";

import { useRouter } from "next/navigation";
import style from "./post.module.css";

type Props = {
  children: React.ReactNode;
  post: {
    postid: number;
    content: string;
    user: {
      id: string;
      image: string;
      nickname: string;
    };
    createdAt: Date;
    images: any[];
  };
};

export default function Postarticle({ children, post }: Props) {
  const router = useRouter();
  const onClick = () => {
    router.push(`/${post.user.id}/status/${post.postid}`);
  };

  return (
    <article onClickCapture={onClick} className={style.post}>
      {children}
    </article>
  );
}
