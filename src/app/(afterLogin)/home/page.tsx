import style from "./home.module.css";

import TabProvider from "@/app/(afterLogin)/home/_components/tabprovider";
import Tab from "@/app/(afterLogin)/home/_components/tab";
import PostForm from "@/app/(afterLogin)/home/_components/postform";
import Post from "@/app/(afterLogin)/_component/post";
import { HydrationBoundary, QueryClient, dehydrate } from "@tanstack/react-query";

async function getPostRecommends(){
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/posts/recommends`,
    {
      next: {
        tags: ["posts", "recommends"],
      },
      // cache: 'no-store', 캐싱 저장 막기
    },
  );
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Home() {
  const queryClient = new QueryClient();
  queryClient.prefetchQuery({queryKey: ['posts', 'recommends'],
  queryFn: getPostRecommends})
  const dehydratedState = dehydrate(queryClient);

  return (
    <main className={style.main}>
      <HydrationBoundary state={dehydratedState}>
        <TabProvider>
          <Tab />
          <PostForm />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
        </TabProvider>
      </HydrationBoundary>
    </main>
  );
}
