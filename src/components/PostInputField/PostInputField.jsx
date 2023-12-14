import App from "../../App";
import InputItem from "../InputItem/InputItem";
import React, { useState } from "react";

const PostInputField = ({ onNewName }) => {
  const [name, setName] = useState("");
  const [post, setPost] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      name,
      post,
    };
    onNewName = formData;
  };
  return (
    <form onSubmit={handleSubmit} className="flex item">
      <div>
        <label>Name</label>
        <input value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <div>
        <label>Post</label>
        <input value={post} onChange={(e) => setPost(e.target.value)} />
      </div>
      <button type="submit">Create</button>
    </form>
  );
};
export default PostInputField;
