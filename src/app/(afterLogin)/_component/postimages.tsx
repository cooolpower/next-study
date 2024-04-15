import Link from "next/link";
import Image from "next/image";
import style from "./post.module.css";
import cx from "classnames";

type Props = {
  post: {
    postid: number;
    user: {
      id: string;
      image: string;
      nickname: string;
    };
    content: string;
    createdAt: Date;
    images: any[];
  };
};

export default function Postimages({ post }: Props) {
  if (!post.images) return null;
  if (!post.images.length) return null;
  let imageLength = Math.floor(Math.random() * 4) + 1;
  console.log(imageLength);
  if (imageLength === 1) {
    return (
      <Link
        href={`/${post.user.id}/status/${post.postid}/photo/${post.images[0].imageId}`}
        className={cx(style.postImageSection, style.oneImage)}
        style={{
          backgroundImage: `url(${post.images[0]?.link})`,
          backgroundSize: "contain",
        }}
      >
        <Image src={post.images[0]?.link} alt="" width={512} height={384} />
      </Link>
    );
  }
  if (imageLength === 2) {
    return (
      <div className={cx(style.postImageSection, style.twoImage)}>
        <Link
          href={`/${post.user.id}/status/${post.postid}/photo/${post.images[0].imageId}`}
          style={{
            backgroundImage: `url(${post.images[0]?.link})`,
            backgroundSize: "cover",
          }}
        >
          <Image src={post.images[0]?.link} alt="" width={256} height={384} />
        </Link>
        <Link
          href={`/${post.user.id}/status/${post.postid}/photo/${post.images[1].imageId}`}
          style={{
            backgroundImage: `url(${post.images[1]?.link})`,
            backgroundSize: "cover",
          }}
        >
          <Image src={post.images[1]?.link} alt="" width={256} height={384} />
        </Link>
      </div>
    );
  }
  if (imageLength === 3) {
    return (
      <div className={cx(style.postImageSection, style.threeImage)}>
        <Link
          href={`/${post.user.id}/status/${post.postid}/photo/${post.images[0].imageId}`}
          style={{
            backgroundImage: `url(${post.images[0]?.link})`,
            backgroundSize: "cover",
          }}
        >
          <Image src={post.images[0]?.link} alt="" width={256} height={384} />
        </Link>
        <div>
          <Link
            href={`/${post.user.id}/status/${post.postid}/photo/${post.images[1].imageId}`}
            style={{
              backgroundImage: `url(${post.images[1]?.link})`,
              backgroundSize: "cover",
            }}
          >
            <Image src={post.images[1]?.link} alt="" width={256} height={192} />
          </Link>
          <Link
            href={`/${post.user.id}/status/${post.postid}/photo/${post.images[2].imageId}`}
            style={{
              backgroundImage: `url(${post.images[2]?.link})`,
              backgroundSize: "cover",
            }}
          >
            <Image src={post.images[2]?.link} alt="" width={256} height={192} />
          </Link>
        </div>
      </div>
    );
  }
  if (imageLength === 4) {
    return (
      <div className={cx(style.postImageSection, style.fourImage)}>
        <Link
          href={`/${post.user.id}/status/${post.postid}/photo/${post.images[0].imageId}`}
          style={{
            backgroundImage: `url(${post.images[0]?.link})`,
            backgroundSize: "cover",
          }}
        >
          <Image src={post.images[0]?.link} alt="" width={256} height={192} />
        </Link>
        <Link
          href={`/${post.user.id}/status/${post.postid}/photo/${post.images[1].imageId}`}
          style={{
            backgroundImage: `url(${post.images[1]?.link})`,
            backgroundSize: "cover",
          }}
        >
          <Image src={post.images[1]?.link} alt="" width={256} height={192} />
        </Link>
        <Link
          href={`/${post.user.id}/status/${post.postid}/photo/${post.images[2].imageId}`}
          style={{
            backgroundImage: `url(${post.images[2]?.link})`,
            backgroundSize: "cover",
          }}
        >
          <Image src={post.images[2]?.link} alt="" width={256} height={192} />
        </Link>
        <Link
          href={`/${post.user.id}/status/${post.postid}/photo/${post.images[3].imageId}`}
          style={{
            backgroundImage: `url(${post.images[3]?.link})`,
            backgroundSize: "cover",
          }}
        >
          <Image src={post.images[3]?.link} alt="" width={256} height={192} />
        </Link>
      </div>
    );
  }
  return null;
}
