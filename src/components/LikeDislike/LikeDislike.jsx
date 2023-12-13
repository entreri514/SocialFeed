import PostFeed from "../PostFeed/PostFeed";
const LikeDislike = ({}) => {
  const clickLikeDislike = (e) => {
    console.log(e);
  };
  return (
    <div className="input-item">
      <button onClick={clickLikeDislike}>Like</button>
      <button onClick={clickLikeDislike}>Dislike</button>
    </div>
  );
};

export default LikeDislike;
