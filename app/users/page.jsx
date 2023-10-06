import PostList from "../posts/PostList";
import UsersList from "./UserList";
export const dynamic = "force-dynamic";
import { Suspense } from "react";

const UsersPage = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <UsersList />
    </Suspense>
  );
};

export default UsersPage;
