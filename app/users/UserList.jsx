import React from "react";

const UsersList = async () => {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  const data = await fetch("https://jsonplaceholder.typicode.com/users");

  const users = await data.json();

  return (
    <>
      <h1 className="text-4xl text-gray-800 font-bold">Users List</h1>
      {users.map((post) => (
        <p key={post.id}>{post.username}</p>
      ))}
    </>
  );
};

export default UsersList;
