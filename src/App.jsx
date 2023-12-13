import "./App.css";
import Header from "./components/Header/Header";
import PostInputField from "./components/PostInputField/PostInputField";
import PostFeed from "./components/PostFeed/PostFeed";

function App() {
  //state variable for posts to pass down

  return (
    <div className="App">
      <Header />
      <PostInputField />
      <PostFeed />
    </div>
  );
}

export default App;
