import React, { Component } from "react";
import { connect } from "react-redux";
import Post from "./single-post/post";

class AllPost extends Component {
  render() {
    return (
      <div className="post-container">
        {this.props.posts.blogReducer.length === 0 ?
         <div>
            <h1 className="no_post_heading">No Post in the Database </h1>
         </div>
        : this.props.posts.blogReducer.map(post => (
          post === null ? null
          : <div key={post.id}>
              <Post post={post}/>
            </div>
          ))}
      </div>
    );
  }
}

const mapStateToProps = state => { // fetch all stored Posts/Data from Redux
  return {
    posts: state
  };
};

export default connect(mapStateToProps)(AllPost);
