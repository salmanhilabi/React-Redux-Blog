import React, { Component } from "react";
import PostForm from "./homePageComponents/postForm";
import AllPost from "./homePageComponents/allPost";

class BlogPostWrapper extends Component {
  render() {
    return (
      <div className="main-post-container">
        <PostForm />
        <AllPost />
      </div>
    );
  }
}

export default BlogPostWrapper;
