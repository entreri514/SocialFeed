import Post from "../Post/Post";
import { useState, useEffect } from "react";

//debugger;
const PostFeed = ({ posts }) => {
  var postItems = posts.map((post, i) => <Post key={i} post={post} />);

  return <div>{postItems}</div>;
};
export default PostFeed;
