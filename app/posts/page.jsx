import React from "react";
import PostList from "./PostList";

const UsersPage = async () => {
  return (
    <>
      <div>
        <h1 className="text-2xl font-bold ">Posts Page</h1>
        <PostList />
      </div>
    </>
  );
};

export default UsersPage;
