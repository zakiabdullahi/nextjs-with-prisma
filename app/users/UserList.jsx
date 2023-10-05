import React from "react";

const UsersList = async () => {
  const data = await fetch("http://127.0.0.1:3000/api/user");

  const users = await data.json();

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
