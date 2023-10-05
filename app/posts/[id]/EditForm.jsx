"use client";
import { CldUploadWidget } from "next-cloudinary";
import { useRouter } from "next/navigation";
import { startTransition, useState } from "react";

const EditForm = ({ post }) => {
  console.log(post);
  const [imageUrl, setImageUrl] = useState(post.url ? post.url : null);
  const [content, setContent] = useState(post.content ? post.content : null);
  const [title, setTitle] = useState(post.title ? post.title : null);
  const router = useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();

    const registerPost = await fetch(
      `http://localhost:3000/api/post/${post.id}`,
      {
        method: "PUT",
        body: JSON.stringify({ title, content, url: imageUrl }),
      }
    );

    setContent("");
    setTitle("");
    setImageUrl(null);
    router.refresh();
    router.push("/posts");
  };
  return (
    <div className="h-auto mx-auto  flex justify-center items-center max-w-4xl mt-24">
      <div className="flex flex-col space-y-6">
        <form
          onSubmit={handleSubmit}
          className="bg-white p-6 max-w-sm mx-auto rounded-md shadow-md"
        >
          <div className="mb-4">
            <label htmlFor="title" className="block text-sm text-gray-600 mb-2">
              Title:
            </label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-3 py-2 border rounded-md outline-none focus:border-indigo-500 focus:ring"
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="content"
              className="block text-sm text-gray-600 mb-2"
            >
              Content:
            </label>
            <textarea
              id="content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="w-full px-3 py-2 border rounded-md outline-none focus:border-indigo-500 focus:ring"
              required
            ></textarea>
          </div>
          <CldUploadWidget
            uploadPreset="hkq6e2tg"
            onUpload={(result, widget) =>
              // @ts-ignore
              setImageUrl(result.info.url)
            }
          >
            {({ open }) => {
              return (
                <button
                  className="bg-indigo-700 py-4 px-2 rounded-md m-4 text-white"
                  onClick={(e) => {
                    e.preventDefault();
                    open();
                  }}
                >
                  Upload an Image
                </button>
              );
            }}
          </CldUploadWidget>

          {imageUrl && (
            <div className="mb-4">
              <label className="block text-sm text-gray-600 mb-2">
                Image Preview:
              </label>
              <img
                src={imageUrl}
                alt="Preview"
                className="w-full h-64 object-cover rounded-md"
              />
            </div>
          )}

          {imageUrl && (
            <button
              type="submit"
              className="w-full bg-indigo-700 py-2 px-4 rounded-md text-white"
            >
              Update the post
            </button>
          )}
        </form>
      </div>
    </div>
  );
};

export default EditForm;
