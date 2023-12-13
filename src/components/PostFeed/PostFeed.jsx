import App from "../../App";
import PostInputField from "../PostInputField/PostInputField";
import PostData from "../PostData/PostData";
const PostFeed = ({ posts }) => {
  var postItems = posts.map((post) => (
    <PostData key={post.name} post={post.post} />
  ));

  var likeDislike;

  return <div>{postItems}</div>;
};
export default PostFeed;
