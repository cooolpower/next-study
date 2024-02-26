import Link from "next/link";
import Image from "next/image";
import style from "./post.module.css";
import cx from "classnames";

type Props = {
  post: {
    postid: number;
    content: string;
    user: {
      id: string;
      nickname: string;
      image: string;
    };
    createdAt: Date;
    images: any[];
  };
};

export default function Postimages({ post }: Props) {
  if (!post.images) return null;
  if (!post.images.length) return null;
  if (post.images.length === 1) {
    return (
      <Link
        href={`/${post.user.id}/status/${post.postid}/photo/${post.images[0].imageId}`}
        className={cx(style.postImageSection, style.oneImage)}
        style={{
          backgroundImage: `url(${post.images[0]?.link})`,
          backgroundSize: "contain",
        }}
      >
        <Image src={post.images[0]?.link} alt="" width={526} height={526} />
      </Link>
    );
  }
  if (post.images.length === 2) {
    return (
      <div className={cx(style.postImageSection, style.twoImage)}>
        <Link
          href={`/${post.user.id}/status/${post.postid}/photo/${post.images[0].imageId}`}
          style={{
            backgroundImage: `url(${post.images[0]?.link})`,
            backgroundSize: "cover",
          }}
        ></Link>
        <Link
          href={`/${post.user.id}/status/${post.postid}/photo/${post.images[1].imageId}`}
          style={{
            backgroundImage: `url(${post.images[1]?.link})`,
            backgroundSize: "cover",
          }}
        ></Link>
      </div>
    );
  }
  if (post.images.length === 3) {
    return (
      <div className={cx(style.postImageSection, style.threeImage)}>
        <Link
          href={`/${post.user.id}/status/${post.postid}/photo/${post.images[0].imageId}`}
          style={{
            backgroundImage: `url(${post.images[0]?.link})`,
            backgroundSize: "cover",
          }}
        ></Link>
        <div>
          <Link
            href={`/${post.user.id}/status/${post.postid}/photo/${post.images[1].imageId}`}
            style={{
              backgroundImage: `url(${post.images[1]?.link})`,
              backgroundSize: "cover",
            }}
          ></Link>
          <Link
            href={`/${post.user.id}/status/${post.postid}/photo/${post.images[2].imageId}`}
            style={{
              backgroundImage: `url(${post.images[2]?.link})`,
              backgroundSize: "cover",
            }}
          ></Link>
        </div>
      </div>
    );
  }
  if (post.images.length === 4) {
    return (
      <div className={cx(style.postImageSection, style.fourImage)}>
        <Link
          href={`/${post.user.id}/status/${post.postid}/photo/${post.images[0].imageId}`}
          style={{
            backgroundImage: `url(${post.images[0]?.link})`,
            backgroundSize: "cover",
          }}
        ></Link>
        <Link
          href={`/${post.user.id}/status/${post.postid}/photo/${post.images[1].imageId}`}
          style={{
            backgroundImage: `url(${post.images[1]?.link})`,
            backgroundSize: "cover",
          }}
        ></Link>
        <Link
          href={`/${post.user.id}/status/${post.postid}/photo/${post.images[2].imageId}`}
          style={{
            backgroundImage: `url(${post.images[2]?.link})`,
            backgroundSize: "cover",
          }}
        ></Link>
        <Link
          href={`/${post.user.id}/status/${post.postid}/photo/${post.images[3].imageId}`}
          style={{
            backgroundImage: `url(${post.images[3]?.link})`,
            backgroundSize: "cover",
          }}
        ></Link>
      </div>
    );
  }
  return null;
}
