import App from "../../App";
import PostInputField from "../PostInputField/PostInputField";
const PostFeed = ({}) => {
  var posts = [
    "postfeedpostfeedpostfeedpostfeed",
    "postfeedpostfeedpostfeedpostfeed",
    "postfeedpostfeedpostfeedpostfeed",
  ];
  var postItems = posts.map((post) => <div>{post}</div>);
  var likeDislike;
  var names = ["Julius Caesar", "Cassius", "Brutus"];
  var nameItems = names.map((name) => <div>{name}</div>);
  return (
    <div>
      {nameItems}
      {postItems}
    </div>
  );
};

export default PostFeed;
