import "./App.css";
import Header from "./components/Header/Header";
import PostInputField from "./components/PostInputField/PostInputField";
import PostFeed from "./components/PostFeed/PostFeed";
import { useState, useEffect } from "react";
function App() {
  const handleNewPost = (newName, newPost) => {
    const updatedPosts = [...posts, newPost];
  };
  const postData = [
    {
      name: "Julius Caesar",
      post: "hgvdfjsikpahgjdksahfgjkdsahfjkdlsahfjkldsahfjkls",
      like: null,
    },
    {
      name: "Cassius",
      post: "nfvjdsohafujiodshaofiuhdsuaiohfduiodsahuifohseduiaohfduiosyhafuiodsa",
      like: null,
    },
    {
      name: "Brutus",
      post: "uidyfuiodsuhgfuioashfiodsha",
      like: null,
    },
  ];

  const [posts, setPosts] = useState(postData);

  //create function that will add new post to posts state variable

  return (
    <div className="App">
      <Header />
      <div>
        <PostInputField />
        <PostFeed posts={posts} />
        <PostInputField onNewName={handleNewPost} />
      </div>
    </div>
  );
}

export default App;
