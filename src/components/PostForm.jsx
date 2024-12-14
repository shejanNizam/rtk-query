/* eslint-disable react/prop-types */
import { useState } from "react";
import { useAddPostMutation, useUpdatePostMutation } from "../services/api";

const PostForm = ({ post, isEditing }) => {
  const [title, setTitle] = useState(post?.title || "");
  const [body, setBody] = useState(post?.body || "");
  const [addPost] = useAddPostMutation();
  const [updatePost] = useUpdatePostMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPost = { title, body };
    if (isEditing) {
      updatePost({ id: post.id, updatedPost: newPost });
    } else {
      addPost(newPost);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="input input-bordered w-full"
      />
      <textarea
        placeholder="Body"
        value={body}
        onChange={(e) => setBody(e.target.value)}
        className="textarea textarea-bordered w-full"
      />
      <button type="submit" className="btn btn-primary">
        {isEditing ? "Update Post" : "Add Post"}
      </button>
    </form>
  );
};

export default PostForm;
