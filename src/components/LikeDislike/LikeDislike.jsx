import PostFeed from "../PostFeed/PostFeed";
import React, { useState } from "react";
import "./LikeDislike.css";
const LikeDislike = ({}) => {
  const [isLike, setIsLike] = useState(false);
  const [isDislike, setIsDislike] = useState(false);
  console.log(isLike);
  const clickLike = (e) => {
    if (isDislike === false) setIsLike(!isLike);
  };
  const clickDislike = (e) => {
    if (isLike === false) setIsDislike(!isDislike);
  };
  const btnClass = isLike ? "active-btn" : "";
  const btnClass2 = isDislike ? "active-btn2" : "";
  return (
    <div className="input-item">
      <button className={btnClass} onClick={clickLike}>
        Like
      </button>
      <button className={btnClass2} onClick={clickDislike}>
        Dislike
      </button>
    </div>
  );
};

export default LikeDislike;
