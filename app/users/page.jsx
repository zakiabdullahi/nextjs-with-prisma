import React, { Suspense } from "react";
import PostList from "../posts/PostList";
import UsersList from "./UserList";
export const dynamic = "force-dynamic";

const UsersPage = () => {
  return (
    <>
      <UsersList />;{/* <p>users</p> */}
    </>
  );
};

export default UsersPage;
