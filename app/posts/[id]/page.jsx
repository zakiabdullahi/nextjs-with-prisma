import { Suspense } from "react";
import NotFoundPost from "../not-found";
import EditForm from "./EditForm";
import { getBaseUrl } from "../../util/baseUrl";

export const dynamic = "force-dynamic";

const PostInfoPage = async ({ params }) => {
  const baseURL = getBaseUrl();
  const data = await fetch(`${baseURL}/api/post/${params.id}`);

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
