import React from "react";
import { Switch, Route } from "react-router-dom";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import PostDetails from "./components/PostDetails";
import { UserPosts } from "./components/users/UserPost";

const ApplicationViews = () => {
  return (
    <Switch>
      <Route path="/" exact>
        <PostList />
      </Route>

      <Route path="/posts/add">
        <PostForm />
      </Route>

      <Route path="/posts/:id">
          <PostDetails />
      </Route>

      <Route path="/users/:id">
          <UserPosts />
      </Route>
    </Switch>
  );
};

export default ApplicationViews;