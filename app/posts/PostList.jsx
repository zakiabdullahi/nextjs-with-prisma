import Link from "next/link";
import React, { Suspense } from "react";
import DeleteButton from "./DeleteButton";
import UpdateButton from "./UpdateButton";

const PostList = async () => {
  let posts = [];
  try {
    // @ts-ignore
    const data = await fetch("http://127.0.0.1:3000/api/post", {
      cache: "no-store",
    });

    posts = await data.json();
  } catch (error) {
    console.log(error);
  }

  return (
    <div className="flex flex-col justify-between items-center min-h-screen bg-gray-100">
      <h1 className="text-4xl text-gray-800 font-bold">Posts List</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id} className="mb-6 bg-white p-4 rounded-md shadow-lg">
            <img
              src={post.url}
              alt={post.title}
              className="w-full h-64 object-cover rounded-md mb-4"
            />
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-2xl font-semibold mb-2">{post.title}</h2>
                <p className="text-gray-600">{post.content}</p>
              </div>
              <div className="flex space-x-2">
                <DeleteButton id={post.id} />
                <UpdateButton id={post.id} />
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostList;
