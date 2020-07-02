import React from "react";
import "./App.css";
import { PostProvider } from "./providers/PostProvider";
import  PostForm  from "./components/PostForm";
import PostList from "./components/PostList";

function App() {
  return (
    <div className="App">
      <PostProvider>
        <PostForm />
        <PostList />
      </PostProvider>
    </div>
  );
}

export default App;