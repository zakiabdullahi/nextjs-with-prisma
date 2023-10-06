import { Suspense } from "react";
import PostList from "./PostList";
export const dynamic = "force-dynamic";
export default async function PostPage() {
  return (
    <>
      <div>
        <h1 className="text-2xl font-bold ">Posts Page</h1>
        <Suspense fallback={<div>Loading...</div>}>
          <PostList />
        </Suspense>
        {/* <p>posts</p> */}
      </div>
    </>
  );
}
