import LikeDislike from "../LikeDislike/LikeDislike";
import PostFeed from "../PostFeed/PostFeed";
//Make sure it accepts the correct props
//Display the two properties of the post that gets passed in

const Post = ({ post }) => {
  return (
    <p>
      <p>{post.name}</p>
      <p>{post.post}</p>
      <p>{<LikeDislike />}</p>
    </p>
  );
};

export default Post;
