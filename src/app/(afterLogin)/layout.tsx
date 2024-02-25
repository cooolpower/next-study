import style from "./layout.module.css";
import Link from "next/link";
import Image from "next/image";
import NavMenu from "@/app/(afterLogin)/_component/navmenu";
import TrendSection from "@/app/(afterLogin)/_component/trendsection";
import FollowSection from "@/app/(afterLogin)/_component/followsection";
import Logoutbutton from "@/app/(afterLogin)/_component/logoutbutton";
import Rightsearch from "@/app/(afterLogin)/_component/rightsearch";

type Props = {
  children: React.ReactNode;
  modal: React.ReactNode;
};

export default function afterLoginLayout({ children, modal }: Props) {
  const target = {
    user: {
      image: "/5Udwvqim.jpg",
    },
  };

  return (
    <div className={style.container}>
      <div className={style.leftSectionWrapper}>
        <section className={style.leftSection}>
          <div className={style.leftSectionFixed}>
            <Link className={style.logo} href="/home">
              <div className={style.logoPill}>
                <Image
                  src={target.user.image}
                  alt="로고"
                  width={40}
                  height={40}
                />
              </div>
            </Link>
            <nav>
              <ul>
                <NavMenu />
              </ul>
              <Link href="/compose/tweet" className={style.postButton}>
                게시하기
              </Link>
            </nav>
            <Logoutbutton />
          </div>
        </section>
      </div>
      <div className={style.rightSectionWrapper}>
        <div className={style.rightSectionInner}>
          <main className={style.main}>{children}</main>
          <section className={style.rightSection}>
            <Rightsearch />
            <TrendSection />
            <FollowSection />
          </section>
        </div>
      </div>
      {modal}
    </div>
  );
}
