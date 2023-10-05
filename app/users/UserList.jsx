import React from "react";

const UsersList = async () => {
  let users = [];
  try {
    const data = await fetch("http://localhost:3000/api/user");

    users = await data.json();
  } catch (error) {
    console.log(error);
  }

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
