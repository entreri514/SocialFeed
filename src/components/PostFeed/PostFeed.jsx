import Post from "../Post/Post";
import { useState, useEffect } from "react";
import LikeDislike from "../LikeDislike/LikeDislike";

//debugger;
const PostFeed = ({ posts }) => {
  var postItems = posts.map((post, i) => (
    <Post key={i} post={post} like={post.like} />
  ));

  return <div>{postItems}</div>;
};
export default PostFeed;
