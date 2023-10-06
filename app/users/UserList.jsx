import { getBaseUrl } from "app/util/baseUrl";
import React from "react";

const UsersList = async () => {
  const baseUrl = getBaseUrl();
  // @ts-ignore
  const data = await fetch(`${baseUrl}/api/user`);

  const users = await data.json();
  console.log(users);

  return (
    <>
      <h1 className="text-4xl text-gray-800 font-bold">Users List</h1>
      {users.map((post) => (
        <p key={post.id}>{post.name}</p>
      ))}
    </>
  );
};

export default UsersList;
