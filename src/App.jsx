import "./App.css";
import Header from "./components/Header/Header";
import PostInputField from "./components/PostInputField/PostInputField";
import PostFeed from "./components/PostFeed/PostFeed";
import { useState, useEffect } from "react";
function App() {
  const postData = [
    {
      name: "Julius Caesar",
      post: "hgvdfjsikpahgjdksahfgjkdsahfjkdlsahfjkldsahfjkls",
    },
    {
      name: "Cassius",
      post: "nfvjdsohafujiodshaofiuhdsuaiohfduiodsahuifohseduiaohfduiosyhafuiodsa",
    },
    {
      name: "Brutus",
      post: "uidyfuiodsuhgfuioashfiodsha",
    },
  ];

  const [posts, setPosts] = useState(postData);

  //create function that will add new post to posts state variable

  return (
    <div className="App">
      <Header />
      <div classname="flex-container">
        <PostInputField />
        <PostFeed posts={posts} />
      </div>
    </div>
  );
}

export default App;
