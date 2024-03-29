import style from "./home.module.css";

import TabProvider from "@/app/(afterLogin)/home/_components/tabprovider";
import Tab from "@/app/(afterLogin)/home/_components/tab";
import PostForm from "@/app/(afterLogin)/home/_components/postform";
import Post from "@/app/(afterLogin)/_component/post";

export default function Home() {
  return (
    <main className={style.main}>
      <TabProvider>
        <Tab/>
        <PostForm />
        <Post/>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
      </TabProvider>
    </main>
  );
}
