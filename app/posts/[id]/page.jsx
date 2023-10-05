import { Suspense } from "react";
import NotFoundPost from "../not-found";
import EditForm from "./EditForm";

const PostInfoPage = async ({ params }) => {
  const data = await fetch(`http://127.0.0.1:3000/api/post/${params.id}`, {
    cache: "no-store",
  });

  const post = data.ok ? await data.json() : null;

  if (!post) {
    return NotFoundPost();
  }

  return (
    <Suspense fallback={<div>Loading...Post </div>}>
      <h1>PostInfoPage</h1>

      <span>{post.title}</span>
      <EditForm post={post} />
    </Suspense>
  );
};

export default PostInfoPage;
