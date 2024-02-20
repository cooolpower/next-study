import Link from "next/link";
import style from "./trend.module.css";

export default function Trend() {
  return (
    <Link href={`/search?q=트렌드`} className={style.container}>
      <span className={style.count}>실시간트렌드</span>
      <span className={style.title}>제로초</span>
      <span className={style.count}>1,234 posts</span>
    </Link>
  );
}
