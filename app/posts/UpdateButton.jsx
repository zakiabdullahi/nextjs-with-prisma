"use client";
import { useRouter } from "next/navigation";
import React, { useTransition } from "react";

const DeleteButton = ({ id }) => {
  const [transition, startTransition] = useTransition();

  const router = useRouter();

  const handleUpdate = async (id) => {
    console.log("Update ........");
    router.push(`/posts/${id}`);
    // const data = await fetch(`http://localhost:3000/api/post/${id}`, {
    //   method: "PUT",
    // });
  };

  return (
    <div className="flex justify-between items-center space-x-2">
      <button
        onClick={() => handleUpdate(id)}
        type="submit"
        className=" bg-indigo-700 py-2 px-4 rounded-md text-white"
      >
        Update
      </button>
    </div>
  );
};

export default DeleteButton;
