import React from "react";
import { Card, CardImg, CardBody } from "reactstrap";
import Comment from "./comment/Comment.js"
import { Link } from "react-router-dom";

const Post = ({ post }) => {
  return (
    <Card className="m-4">
      <Link to={`/users/${post.userProfile.id}`}>
        <p className="text-left px-2">Posted by: {post.userProfile.name}</p>
      </Link>
      <CardImg top src={post.imageUrl} alt={post.title} />
      <CardBody>
        <p>
          <Link to={`/posts/${post.id}`}>
              <strong>{post.title}</strong>
          </Link>
        </p>
        <p>{post.caption}</p>
        <p>Comments:</p>
        {
            post.commentsOnPost.map(comment => {
                return <Comment comment={comment} />
            })
        }
      </CardBody>
    </Card>
  );
};

export default Post;