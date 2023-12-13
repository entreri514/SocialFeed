import App from "../../App";
import InputItem from "../InputItem/InputItem";
const PostInputField = ({}) => {
  var inputName = "";
  var inputPost = "";
  return (
    <div classname="flex-item">
      <h2>Name</h2>

      <h2>
        <InputItem />
      </h2>
    </div>
  );
};

export default PostInputField;
