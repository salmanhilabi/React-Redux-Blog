import React, { Component } from "react";
import { connect } from "react-redux";
import { addToList } from "../../store/actions/actionType";

class PostForm extends Component{
  state = {
    file: '',
    imageUrl: '',
    newPost: '',
    title: '',
    author: '',
    message: '',
  }

  getImage = e => {
    e.preventDefault();
    // Running FileReader to format the image that was uploaded and then adding it in the state
    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      this.setState({
        file: file,
        imageUrl: reader.result,
      });
    }
    reader.readAsDataURL(file)
  }

  handleValues = e => {
    // get each value of each input and store it in the state
    this.setState({[e.target.id]: e.target.value});
  }

  handleSubmit = e => {
    e.preventDefault();

    const data = {
      id: new Date(),
      title: this.state.title,
      author: this.state.author,
      message: this.state.message,
      image: this.state.imageUrl
    }

    this.props.dispatch(addToList(data)) //dipatch addToList function that will create a new post
    this.setState({ // clear the inputs after post is added to list
      newPost: "New Post Added In The List",
      imageUrl: '',
      title: '',
      author: '',
      message: ''
    });
    this.removeImage.value = null;
  };

  render() {
    return (
      <div className="post-form-container">
        <h5 className="new_post-alert">{this.state.newPost}</h5>
        <h1 className="post_heading">Create Post</h1>
        <form className="form" onSubmit={this.handleSubmit}>
          <input
            required
            type="text"
            id="title"
            onChange={this.handleValues}
            placeholder="Enter Post Title"
            value={this.state.title}
          />
          <br />
            <input
              required
              type="text"
              id="author"
              onChange={this.handleValues}
              placeholder="Enter Author Name"
              value={this.state.author}
            />
          <br />
          <textarea
            required
            rows="5"
            id="message"
            onChange={this.handleValues}
            cols="28"
            placeholder="Enter Post"
            value={this.state.message}
          />
          <br />
          <input
            required
            type="file"
            id="image"
            ref={image => (this.removeImage = image)}
            onChange={e => this.getImage(e)}
            />
          <br />
          <button>Post</button>
        </form>
      </div>
    );
  }
}

export default connect()(PostForm);
