import PostList from "../posts/PostList";
import UsersList from "./UserList";
import { Suspense } from "react";

export const dynamic = "force-dynamic";
const UsersPage = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <UsersList />
    </Suspense>
  );
};

export default UsersPage;
