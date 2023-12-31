"use client";
import { useRouter } from "next/navigation";
import React, { useTransition } from "react";
import { getBaseUrl } from "../../app/util/baseUrl";
export const dynamic = "force-dynamic";

const DeleteButton = ({ id }) => {
  const [transition, startTransition] = useTransition();

  const router = useRouter();

  const handleDelete = async (id) => {
    const baseURL = getBaseUrl();
    const data = await fetch(`${baseURL}/api/post/${id}`, {
      method: "DELETE",
    });

    startTransition(() => router.refresh());
  };
  //   const handleUpdate = async (id) => {
  //     const data = await fetch(`http://localhost:3000/api/post/${id}`, {
  //       method: "PUT",
  //     });

  //     startTransition(() => router.refresh());
  //   };

  return (
    <div className="flex justify-between items-center space-x-2">
      <button
        onClick={() => handleDelete(id)}
        type="submit"
        className=" bg-red-700 py-2 px-4 rounded-md text-white"
      >
        Delete
      </button>
      {/* <button
        onClick={() => handleUpdate(id)}
        type="submit"
        className=" bg-indigo-700 py-2 px-4 rounded-md text-white"
      >
        Update
      </button> */}
    </div>
  );
};

export default DeleteButton;
