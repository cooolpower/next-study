import { NextPage } from "next";
import Link from "next/link";

const NotFound: NextPage = () => {
  return (
    <div>
      <div>페이지 없음. 돌아가셈</div>
      <Link href="/">돌아가기</Link>
    </div>
  );
};

export default NotFound;
