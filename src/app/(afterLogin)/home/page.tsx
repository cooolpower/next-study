import style from "./home.module.css";

import TabProvider from "@/app/(afterLogin)/home/_components/tabprovider";
import Tab from "@/app/(afterLogin)/home/_components/tab";
import PostForm from "@/app/(afterLogin)/home/_components/postform";
import Post from "@/app/(afterLogin)/_component/post";
import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from "@tanstack/react-query";
import { revalidatePath } from "next/cache";
import PostRecommends from "./_components/postRecommends";
import { getPostRecommends } from "./_lib/getPostRecommends";

export default async function Home() {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["posts", "recommends"],
    queryFn: getPostRecommends,
  });
  const dehydratedState = dehydrate(queryClient);

  return (
    <main className={style.main}>
      <HydrationBoundary state={dehydratedState}>
        <TabProvider>
          <Tab />
          <PostForm />
          {/* <Post />
          <Post />
          <Post />
          <Post />
          <Post /> */}
          <PostRecommends />
        </TabProvider>
      </HydrationBoundary>
    </main>
  );
}
