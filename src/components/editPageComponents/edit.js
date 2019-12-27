import React, { Component } from "react";
import { connect } from "react-redux";
import {Link} from "react-router-dom";
import { updatePost } from "../../store/actions/actionType";

class EditPage extends Component {
  state = {
    isDataExist: false,
    file: '',
    imageUrl: '',
    updated: '',
    title: '',
    author: '',
    message: ''
  }

  componentDidMount(){
    if (!this.props.location.data) {
       this.props.history.push("/"); // Redirect the from edit page to home page if data doesn't exist
    }else{
       const { post } = this.props.location.data;
       this.setState({
         isDataExist: true,
         imageUrl: post.image,
         title: post.title,
         author: post.author,
         message: post.message
       });
    }
  }

  getImage = e => {
     e.preventDefault();
     // Running FileReader to format the image that was uploaded and then adding it in the state
     let reader = new FileReader();
     let file = e.target.files[0];

     reader.onloadend = () => {
       this.setState({
         file: file,
         imageUrl: reader.result
       });
     }
     reader.readAsDataURL(file)
  }

  handleValues = e => {
    // get each value of each input and store it in the state
    this.setState({[e.target.id]: e.target.value});
  }

  handleEdit = e => {
    e.preventDefault();

    const data = {
      id: new Date(),
      title: this.state.title,
      author: this.state.author,
      message: this.state.message,
      image: this.state.imageUrl
    };

    //dipatch updatePost function that will update with new post
    this.props.dispatch(updatePost(this.props.location.data.id, data));
    this.setState({
      updated: 'Post was updated',
      title: '',
      author: '',
      message: '',
      imageUrl: ''
    });
    this.removeImage.value = null;
  };

  render() {
    const editSelectedPost = () => {
       if(this.state.isDataExist){
        return <div key={this.props.location.data.id} className="edit_post">
           <div className="edit_page_upper_text">
             <Link to="/" className="back_btn">Back</Link>
             <h5>{this.state.updated}</h5>
           </div>
           <form className="form" onSubmit={this.handleEdit}>
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
               ref={image => (this.removeImage = image)}
               onChange={e => this.getImage(e)}
               />
             <br />
             <button>Update</button>
           </form>
         </div>
      }else{
         return <h3>No Post To Edit</h3>
      }
    }
    return (
      <div>
        {editSelectedPost()}
      </div>
    );
  }
}

export default connect()(EditPage);
